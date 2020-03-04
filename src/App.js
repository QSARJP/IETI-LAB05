import React from 'react';
import './App.css';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import {Login} from './components/Login';
import {MainView} from './components/MainView';
import {TodoApp} from "./components/TodoApp";
import {SignUp} from "./components/SignUp"


class App extends React.Component {

  constructor(props) {
      const isLoggedIn = localStorage.getItem("isLoggedIn") == "true" ;
      super(props);
      const LoginView = () => (
          <div>
              {isLoggedIn ? <MainView/> : <Login/>}
          </div>
          
      );
    
      const Main = () => (
          <div>
              {isLoggedIn ? <MainView/> : <Login/>}
          </div>
      );
      const Task = () => (
          <div>
              {isLoggedIn ? <TodoApp/> : <Login/>}
          </div>
      );
      const SignUpView = () => (
          <div>
              {isLoggedIn ? <MainView/> : <SignUp/>}
          </div>
      );
      this.state = {loginView: LoginView,main: Main,task: Task ,signUp:SignUpView}


  }


  render() {
      const { loginView, signUp, main, task, updateProfile} = this.state;
      
      return (
          <div>
            <Router>
              <Switch>
                <Route exact path="/Main" component={main}/>
                <Route exact path="/" component={loginView}/>
                <Route exact path="/task" component={task}/>
                <Route exact path="/signUp" component={signUp}/>
                <Route exact path="/update-profile" component={updateProfile}/>
              </Switch>
          </Router>
          </div>
          
      );
  }

  
}

export default App;