import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import './Login.css'
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';


export class SignUp extends React.Component{

    constructor(props){
        super(props);
        this.state ={name:"",password:"",pwconfirm:"",email:""};
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleUserEmail = this.handleUserEmail.bind(this);
        this.handleUserName = this.handleUserName.bind(this);
        this.handleUserPassword = this.handleUserPassword.bind(this);
        this.handleUserPasswordConfirm = this.handleUserPasswordConfirm.bind(this);


    }

    handleUserName(uName){
        this.setState({name: uName.target.value});
    }

    handleUserEmail(uemail){
        this.setState({email: uemail.target.value});
    }
    handleUserPassword(upass){
        this.setState({password: upass.target.value});
    }
    handleUserPasswordConfirm(upassConfirm){
        this.setState({pwconfirm: upassConfirm.target.value});
    }

    handleSubmit(){
        if (localStorage.getItem("email") !== this.state.email && localStorage.getItem("password") !== this.state.password && this.state.password === this.state.pwconfirm){
            localStorage.setItem('email', this.state.email);
            localStorage.setItem('name', this.state.name);
            localStorage.setItem('password', this.state.password);
            localStorage.setItem("isLoggedIn", true);
        }else{
            alert("El usuario ya se encuentra registrado !!")
        }
    }

    render(){
        return (
            <React.Fragment>
                <CssBaseline />

                <main className="loginBox" onSubmit={this.handleSubmit}>
                    <Paper className="paper">
                        <Avatar className="avatar">
                            <LockIcon />
                        </Avatar>
                        <Typography variant="h2">Sign Up</Typography>
                        <form className="form" >
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="name">name</InputLabel>
                                <Input
                                    id="name"
                                    name="name"
                                    autoComplete="name"
                                    value = {this.state.name}
                                    onChange = {this.handleUserName}
                                    autoFocus />
                            </FormControl>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="email">Email Address</InputLabel>
                                <Input
                                    id="email"
                                    name="email"
                                    autoComplete="email"
                                    value = {this.state.email}
                                    onChange = {this.handleUserEmail}
                                    autoFocus />
                            </FormControl>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="password">Password</InputLabel>
                                <Input
                                    name="password"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                    value = {this.state.password}
                                    onChange = {this.handleUserPassword}
                                    autoFocus

                                />
                            </FormControl>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="password">Password Confirm</InputLabel>
                                <Input
                                    name="password"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                    value = {this.state.pwconfirm}
                                    onChange = {this.handleUserPasswordConfirm}
                                    autoFocus

                                />
                            </FormControl>

                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className="signUpSubmit"
                            >
                                Login
                            </Button>
                            <br></br>
                            <br></br>
                            <div >
                                <Grid>
                                    <br></br>
                                    <Grid item xs >
                                        <Link href="/" variant="body2">
                                            {" Aleady have an account? Sign In"}
                                        </Link>
                                    </Grid>
                                </Grid>

                            </div>


                        </form>
                    </Paper>
                </main>
            </React.Fragment>
        );
    }

}

