import React, { Component } from 'react'
import { connect } from "react-redux";
import {login, handeError as handeErrorLogin} from '../../actions/signIn-actions'
import {signup, handeError as handeErrorSignup} from '../../actions/signUp-actions'
import Alert from '../../components/Alert'

import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Fab from '@material-ui/core/Fab';

import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Visibility from '@material-ui/icons/Visibility';
import Share from '@material-ui/icons/Share';
import Group from '@material-ui/icons/Group';
import Chat from '@material-ui/icons/Chat';

let styles = {

    containers: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: 400,
    },

    button:{
        fontSize: '40px',
    },
    rightpage:{
        display:"inline-block",
        backgroundColor: "#e6f7ff",
        height: "calc(100vh)",
        width: "calc(50vw)",
        verticalAlign: "top",
    },
      
    leftpage:{
        position: 'relative',
        display:"inline-block",
        backgroundColor: "#fcfcfc",
        height: "calc(100vh)",
        width: "50vw",
        verticalAlign: "top",
    },
    above:{
        textAlign:'center' ,
        marginTop: 100,
    },
    login: {
        // margin: "10px 30px",
        margin: "0 10px",
        color:"#ffffff",
        backgroundColor:'#2765aa',
        width : 200,
        fontSize: 20,
        fontWeight: 'bold',
    },

    logins: {
        margin: 'auto',
        color:"#2765aa",
        backgroundColor:'#ffffff',
        width : '25vw',
        fontSize: 20,
        fontWeight: 'bold',
        display: "block",
    },

    register: {
        margin: "0 10px",
        margin: 'auto',
        color:"#2765aa",
        backgroundColor:'#ffffff',
        width : 200,
        fontSize: 20,
        fontWeight: 'bold',
    },

    registers: {
        // top: 100,
        // margin: "10px 30px",
        margin: 'auto',
        color:"#ffffff",
        backgroundColor:'#2765aa',
        width : '25vw',
        fontSize: 20,
        fontWeight: 'bold',
        display: "block",
    },

    textfield: {
        margin: "10px 30px",
        backgroundColor: '#ffffff',
        width:"15vw"

    },

    textwhile :{
        color:'#2765aa'
    },
    textwhiles :{
        color:'#fcfcfc'
    },
}

class Login extends Component {
    state = {
        tab: 1,
        username: "",
        phonenumber: "",
        password: "",
        password1: "",
        showPassword: false,
    }

    handleChange = prop => event => {
        this.setState({ [prop]: event.target.value });
    };
    handleClickShowPassword = () => {
        this.setState(state => ({ showPassword: !state.showPassword }));
    };


    onClickSignin = () => {
        let {username, password} = this.state

        if (!username) {
            return alert("Hãy nhập tên đăng nhập.")
        }

        if (!password) {
            return alert("Hãy nhập mật khẩu.")
        }

        this.props.login(username, password)
    }

    onClickSignup = () => {
        let {username, password, password1, phonenumber} = this.state
        if (!phonenumber) {
            return alert("Hãy nhập số điện thoại.")
        }

        if (!username) {
            return alert("Hãy nhập tên đăng nhập.")
        }

        if (!password) {
            return alert("Hãy nhập mật khẩu.")
        }

        if (password !== password1) {
            return alert("Mật khẩu nhập lại không trùng")
        }

        this.props.signup(username, password, phonenumber)
    }
    componentWillMount() {
        if(localStorage.getItem('userToken')){
            this.props.history.push('/app')
    }}


    render() {
        // if( this.state.tab===2)
        //     this.setState({tab: 1})

        // let token = localStorage.getItem('userToken')
        // if(token=!'')
        // {      this.props.history.push('/app') }

        if(this.props.loginData.loginSuccessfull)
        this.props.history.push("/app")
        
        return (
            <div>
            
                <div style={styles.leftpage} class="imagebackgroud">
                    <div style={styles.containers}>
                        <h1 style={styles.textwhile} > <Group style={styles.button}/> Join with us </h1>
                        <h1 style={styles.textwhiles} > <Chat style={styles.button}/> Join the conversation with friends </h1>
                        <h1 style={styles.textwhiles} > <Share style={styles.button}/> Share everything</h1>
                    </div>
                </div>
                
                <div style={styles.rightpage}>
                    <div style={styles.above}> 
                        <Fab  variant="extended" aria-label="Delete" style={styles.login} onClick={()=>this.setState({tab: 2})} >
                            Đăng nhập
                        </Fab>
                        <Fab variant="extended" aria-label="Delete" style={styles.register} onClick={()=>this.setState({tab: 3})} >
                            Đăng ký
                        </Fab>
                    </div> 
                    {
                        this.state.tab === 1 && (
                            <div  class="imagesss"> </div>
                        )
                    }
                    {
                        this.state.tab === 2 && (
                            <div>
                                <div style={styles.containers}> 
                                    <TextField
                                        style={styles.textfield}
                                        id="outlined-adornment-username"
                                        variant="outlined"
                                        label="Tên đăng nhập"
                                        value={this.state.username}
                                        onChange={this.handleChange('username')}  
                                    />

                                    <TextField
                                        style={styles.textfield}
                                        id="outlined-adornment-password"
                                        variant="outlined"
                                        type={this.state.showPassword ? 'text' : 'password'}
                                        label="Mật khẩu"
                                        value={this.state.password}
                                        onChange={this.handleChange('password')}
                                        InputProps={{
                                            endAdornment: (
                                            <InputAdornment position="end">
                                                <IconButton
                                                aria-label="Toggle password visibility"
                                                onClick={this.handleClickShowPassword}
                                                >
                                                {this.state.showPassword ? <VisibilityOff /> : <Visibility />}
                                                </IconButton>
                                            </InputAdornment>
                                            ),
                                        }}
                                        />
                                </div>
                                <Fab variant="extended"
                                    aria-label="Delete"
                                    style={styles.logins}  
                                    onClick={this.onClickSignin}
                                    disabled={this.props.loginData.startLogin}
                                >
                                    Đăng nhập
                                </Fab>
                           </div>
                        )
                    }
                    {
                        this.state.tab === 3 && (
                            <div>
                                <div style={styles.containers} > 
                                    <TextField
                                    style={styles.textfield}
                                    id="outlined-adornment-phonenumber"
                                    variant="outlined"
                                    label="Số điện thoại"
                                    value={this.state.phonenumber}
                                    onChange={this.handleChange('phonenumber')}  
                                    />

                                    <TextField
                                    style={styles.textfield}
                                    id="outlined-adornment-username"
                                    variant="outlined"
                                    label="Tên đăng nhập"
                                    value={this.state.username}
                                    onChange={this.handleChange('username')}  
                                    />

                                    <TextField
                                    style={styles.textfield}
                                    id="outlined-adornment-password"
                                    variant="outlined"
                                    type={this.state.showPassword ? 'text' : 'password'}
                                    label="Mật khẩu"
                                    value={this.state.password}
                                    onChange={this.handleChange('password')}
                                    InputProps={{
                                        endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton
                                            aria-label="Toggle password visibility"
                                            onClick={this.handleClickShowPassword}
                                            >
                                            {this.state.showPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                        ),
                                    }}
                                    />

                                    <TextField
                                    style={styles.textfield}
                                    id="outlined-adornment-password1"
                                    variant="outlined"
                                    type={this.state.showPassword ? 'text' : 'password'}
                                    label="Nhập lại mật khẩu"
                                    value={this.state.password1}
                                    onChange={this.handleChange('password1')}
                                    InputProps={{
                                        endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton
                                            aria-label="Toggle password visibility"
                                            onClick={this.handleClickShowPassword}
                                            >
                                            {this.state.showPassword1 ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                        ),
                                    }}
                                    />
                                </div>
                                <Fab variant="extended"
                                    aria-label="Delete" 
                                    style={styles.registers} 
                                    onClick={this.onClickSignup}
                                    disabled={this.props.signupData.startSignup }
                                >
                                    Đăng ký
                                </Fab>
                            </div>
                        )
                    }
                    {
                        !!this.props.loginData.error && (
                            <Alert title="Error" onClose={this.props.handeErrorLogin}>{this.props.loginData.error}</Alert>
                        )
                    }
                    {
                        !!this.props.signupData.error && (
                            <Alert title="Error" onClose={this.props.handeErrorSignup}>{this.props.signupData.error.toString()}</Alert>
                        )
                    }
                    {
                        this.props.signupData.signupSuccessfull && (
                            <Alert title="Successfull" onClose={this.props.handeErrorSignup}> Đăng ký thàng công!!! </Alert>
                        )
                    }
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    loginData: state.loginData,
    signupData: state.signupData,
})

const mapDispatchToProps = dispatch => ({
    login: (username, password)=>dispatch(login(username, password)),
    signup: (username, password, full_name)=>dispatch(signup(username, password, full_name)),
    handeErrorLogin: ()=>dispatch(handeErrorLogin()),
    handeErrorSignup: ()=>dispatch(handeErrorSignup()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)