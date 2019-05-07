import React, { Component } from 'react'
import { connect } from "react-redux";
import {getListChats} from '../../actions/listChat-actions'
import {getListUsers} from '../../actions/listUser-actions'
import {signout} from '../../api/UserAPI'
import { Switch, Route } from 'react-router-dom'
import io from 'socket.io-client';
import {getAllChat} from '../../api/ChatAPI'

///
import Tooltip from '@material-ui/core/Tooltip';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
///
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import Search from '@material-ui/icons/Search';
import Enter from '@material-ui/icons/NavigateNext';

///
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
///
import Paper from '@material-ui/core/Paper';
import Fab from '@material-ui/core/Fab';
import { array } from 'prop-types';
let styles = {

  rightpage:{
    display:"inline-block",
    backgroundColor: "#f2f2f2",
    height: "calc(100vh)",
    width: "calc(75vw - 1px)",
    verticalAlign: "top",
  },
  
  leftpage:{
    position: 'relative',
    display:"inline-block",
    backgroundColor: "#fcfcfc",
    height: "calc(100vh)",
    width: "25vw",
    verticalAlign: "top",
    borderRight:"1px solid #cccccc",
  },

  root: {
    width: '100%',
    maxWidth: "25vw",
    backgroundColor:'#ffffff',
    top:20,
  },

  divappbar: {
    flexGrow: 1,
    margin: "20px 20px",

  },

  appbar: {
    backgroundColor: '#d9d9d9',
    height: "4vw",
    flexGrow: 1,
  },
  chatbox: {
    backgroundColor: '#ffffff',
    height: "35vw",
    margin: "10px 10px",
    flexGrow: 1,
    padding: 20,
    overflow: 'auto',
  },

  search: {
    backgroundColor: '#ffffff',
    width:"25vw",
    top:28,
    height: "4vw"
  },
  
  onappbar: {
    margin: "17px",
    color: '#3e64a3',
    fontWeight: 'bold',
  },
  
  text: {
    fontSize: 30,
  },

  button: {
    margin: "0px 20px",
    color:"#ffffff",
    backgroundColor: '#d80f2d',
    padding: "20px",
    textAlign: 'center',
    fontSize: "16px",
    borderRadius: '50%',
  },

  inputbox : {
    fontSize: 30,
    margin: "10px 20px",
    color:"#ffffff",
    backgroundColor: '#ffffff',
    width:'calc(100% - 150px)',
    bottom: 0,
   // position: "absolute",
  },

  signout:{
    backgroundColor: '#163260',
    color:"#ffffff",
    bottom: 0,
    position: "absolute",
    margin: "20px 20px",
  },
  //////////
  seen:{
    display: 'block',
    color: '#d10c1c',
    fontSize: '14px',
    paddingBottom: '4px',
    marginLeft: '1100',
    textAlign: 'right',
  },
  othersMember:{
    marginTop: '10px',
  },
  currentMember:{
    textAlign: 'right',
    marginTop: '10px',
  },
  containsMessage:{
    display: 'inline-block',
  },
  username:{
    display: 'block',
    color: '#3e64a3',
    fontSize: '18px',
    paddingBottom: '4px',
    fontWeight: 'bold',
  },
  message:{
    padding: '10px',
    maxƯidth: '400px',
    margin: 0,
    borderRadius: '12px',
    backgroundColor: "#cbd0d8",
    color: '#ffffff',
    display: 'inline-block',
  },
};


class MainLayout extends Component {

    constructor(props){
      super(props)

      this.props.getListUsers()
      this.props.getListChats()
      this.socket = null;
      this.state = {
          status: false,
          chatsData: [],
          seen: '',
          search: "",
          message:"",
          choose:{},
          avt:"",
          tab: 1,
          tabuser: 1,
      }


      getAllChat().then((res)=>{
          this.setState({chatsData: res})
          if(res){
              var dataTemp= [];
              res.map(m=>{
                  if(m.sender == localStorage.getItem('userID') && m.receiver == this.state.choose._id) dataTemp.push(m)
                  if(m.receiver == localStorage.getItem('userID') && m.sender == this.state.choose._id) dataTemp.push(m)
              })
              if(dataTemp[0]){
                  if(dataTemp[dataTemp.length-1].isSeen && dataTemp[dataTemp.length-1].sender == localStorage.getItem('userID')) {this.setState({seen: 'SEEN'})}
                  else {this.setState({seen: ''})}
              }
          }
      })
      this.handleKeyPressSearch = this.handleKeyPressSearch.bind(this)
    }

    onClickSignout = () => {
      signout()
      this.socket.close();
      localStorage.clear();
      this.props.history.push('/')
      window.location.reload()
    }

    handleKeyPressSearch(e) {
      if (e.key === 'Enter') {
        this.handleSearch();
      }
    }  
    handleSearch = () => {
      // this.props.userData.users.map((value,i)

      // )
    }

    handleToggle = value => () => {
        const { checked } = this.state;
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];
    
        if (currentIndex === -1) {
        newChecked.push(value);
        } else {
        newChecked.splice(currentIndex, 1);
        }
    
        
    };  


    handleScroll = () => {

      var x = document.getElementById("boxMessage")
      x.scrollTop = x.scrollHeight;
    }

    handleClickUser = (user,i) => {
      this.setState({
        choose:user,
        avt:i,        
      })
      this.props.history.push({pathname: '/app/chat/'+user.username})
      this.setState({tab: 2},()=>{
        // var x = document.getElementById("boxMessage")
        // x.scrollTop = x.scrollHeight;
        this.handleScroll()
      })
    };

    onFocus = () => {
      getAllChat().then((res)=>{
          this.setState({chatsData: res})
          let dataTemp = this.state.chatsData

          var lastIDChat;
          dataTemp.map(m=>{
              if(m.sender == this.state.choose._id && m.receiver == localStorage.getItem('userID')) lastIDChat = m._id
          })

          if(lastIDChat){
              this.socket.emit("isSeen", {chat_id : lastIDChat});
          }
          console.log("asdasd", lastIDChat)
      })
    }

    onSubmit(e) {
      if(this.state.message){
          this.socket.emit("newMessage", {content : this.state.message, receiver: this.state.choose._id});
          console.log('Hieu dep trai'+this.state.choose.username);

          var chat = {sender:localStorage.getItem('userID'), receiver:this.state.choose._id, content:this.state.message, _created:Date.now()};
          var temp = this.state.chatsData;
          temp.push(chat);
          this.setState({chatsData: temp});
          this.setState({message: "", seen: ""});
      }
      e.preventDefault();
      
    }


    componentWillMount() {
      let token = localStorage.getItem('userToken')
      this.socket = io("http://localhost:3000/chat", {"query":{"token":token}});
      this.socket.on('newMessage', (response) => {
        this.setState({seen: ''})
        console.log("Hieu Ml",response)
          this.setState({chatsData: response})
      }); //hear newMessage
      this.socket.on('isSeen', (response) => {
          console.log("sda",response)
          var dataTemp= [];
          response.map(m=>{
              if(m.sender ==localStorage.getItem('userID') && m.receiver == this.state.choose._id) dataTemp.push(m)
              if(m.receiver == localStorage.getItem('userID') && m.sender == this.state.choose._id) dataTemp.push(m)
          })
          if(dataTemp[0]){
              if(dataTemp[dataTemp.length-1].isSeen && dataTemp[dataTemp.length-1].sender ==localStorage.getItem('userID')) {this.setState({seen: 'SEEN'})}
              else {this.setState({seen: ''})}
          }
        }); //isSeen
      }
    render(){

        

        console.log(this.props.userData.users)

        return(
        <div>
          <div style={styles.leftpage}>
          
          <TextField
            onFocus={()=>this.setState({tabuser: 2})}
            style={styles.search}
            id="outlined-adornment-search"
            variant="outlined"
            label="Tìm kiếm bạn bè"
            value={this.state.search}
            onChange={e=>this.setState({search: e.target.value})}  
            onKeyPress={this.handleKeyPressSearch}     
            InputProps={{
              endAdornment: (
                  <IconButton onClick={e=>this.handleSearch(e)} >
                    <Search/>
                  </IconButton>
              ),
          }}
          />
          
            <List dense style={styles.root}>
                
                {
                  this.state.tabuser === 1 &&(
                    this.props.userData.users.map((value,i) => (
                      <ListItem key={value}  onClick={ () => this.handleClickUser(value,i)}  button>
                        <ListItemAvatar>
                          <Avatar
                            alt={`Avatar n°${i + 1}`}
                            src={`/avatar/${i + 1}.jpg`}
                          />
                        </ListItemAvatar>
                        <ListItemText primary={value.username} />                 
                      </ListItem>
                    ))
                  )
  
                }
                {
                  this.state.tabuser === 2 &&(
                    this.props.userData.users.map((value,i) => (
                      <ListItem key={value}  onClick={ () => this.handleClickUser(value,i)}  button>
                        <ListItemAvatar>
                          <Avatar
                            alt={`Avatar n°${i + 1}`}
                            src={`/avatar/${i + 1}.jpg`}
                          />
                        </ListItemAvatar>
                        <ListItemText primary={value.username} />                 
                      </ListItem>
                    ))
                  )
  
                }
            </List>

            <Fab variant="extended" aria-label="Delete" style={styles.signout} onClick={this.onClickSignout}  >
             Thoát
            </Fab>

          </div>

          <div style={styles.rightpage}>
          <div style={styles.divappbar}>
             {
                this.state.tab === 1 && (
                   <div> </div>
               )
             }
             {
                this.state.tab === 2 && (
                   <div>
                      <AppBar position="static" style={styles.appbar} >
                        <Toolbar variant="dense" >
                              <Avatar
                                style={styles.onappbar}
                                alt={`Avatar n°${this.state.avt+1}`}
                                src={`/avatar/${this.state.avt+1}.jpg`}
                              />
                          <Typography variant="h6" color="inherit" style={styles.onappbar} >
                              {this.state.choose.username}
                          </Typography>
                        </Toolbar>
                      </AppBar>

                      <Paper  style={styles.chatbox} elevation={1} id='boxMessage' > 
                          {
                            this.state.chatsData.map(m => {
                                if((m.receiver == this.state.choose._id && m.sender == localStorage.getItem('userID'))) 
                                    {return this.renderMessage(m.sender, m.content, m._created,'Me')}
                                if((m.receiver == localStorage.getItem('userID') && m.sender == this.state.choose._id)) 
                                    {return this.renderMessage(m.sender, m.content, m._created,this.state.choose.username)}
                            })
                          }
                          <div style={styles.seen}>
                             {this.state.seen}
                          
                          </div>
                      </Paper>

                      

                      <form onSubmit={e => this.onSubmit(e)}  >
                        <TextField
                          style={styles.inputbox}
                          id="outlined-adornment-message"
                          variant="outlined"
                          label="Nhập tin nhắn"
                          value={this.state.message}
                          onChange={e => this.setState({message: e.target.value})}
                          onFocus={this.onFocus}
                        />                 
                        <button style={styles.button}>
                          <Enter />                          
                        </button>
                      </form>
                     
                   </div>
               )
             }     
            </div>
          </div>
        </div>
        
        )
    }

    renderMessage(_id, content, _created,name) {
      var temp;
      if(_id==localStorage.getItem('userID'))
      { temp = styles.currentMember }
      if(_id==this.state.choose._id)
      { temp = styles.othersMember }
      return (
        <div style={temp}  >
          <Tooltip title={_created}>
            <div>
              <div style={styles.containsMessage}>
                <div style={styles.username}>
                  {name}
                </div>

                <div style={styles.message}>{content}</div>
              </div>
            </div>
          </Tooltip>
        </div>
      );
    }
}
const mapStateToProps = (state) => ({
  chatData: state.chatData,
  userData: state.userData
})

const mapDispatchToProps = dispatch => ({
  getListChats: ()=>dispatch(getListChats()),
  getListUsers: ()=>dispatch(getListUsers()),
})

export default connect(mapStateToProps, mapDispatchToProps)(MainLayout)