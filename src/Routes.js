import React,{Component} from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import {Menu} from 'semantic-ui-react';
import Home from './Home';
import 'semantic-ui-css/semantic.min.css';
import * as firebase from 'firebase';
import MyTasks from './MyTasks';
import AssignTask from './AssignTask';


export default class Routes extends Component{

    renderHome(props){
        return(
            <Home routeProps={props} />
        );
    }

    constructor(props){
        super(props);
        this.state={
            loggedIn:false
        }
        this.renderHome=this.renderHome.bind(this);
        this.handleAuthChange=this.handleAuthChange.bind(this);
        this.renderMyTasks=this.renderMyTasks.bind(this);
        this.handleAssignTask = this.handleAssignTask.bind(this);
        this.handleAuthChange = this.handleAuthChange.bind(this);
        this.state ={
            loggedIn : false
        };
}


handleGoogleLogin(){
    let provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithRedirect(provider);
}


componentDidMount(){
    firebase.auth().getRedirectResult().then(this.authRedirectSuccess).catch(this.authRedirectFail);
    
    firebase.auth().onAuthStateChanged(this.handleAuthChange);
    
}
authRedirectSuccess(result){
    console.log(result);
}
authRedirectFail(result){
    console.log(result);
}
handleAuthChange(user){
    if(user)
    this.setState({
        loggedIn:true
    });
}

renderMyTasks(){
    return(
        <MyTasks loggedIn={this.state.loggedIn}/>
    );
}


handleAssignTask(props){
return  (<AssignTask loggedInProp={this.state.loggedIn} routeProps={props}  />);
}

    render(){
        return(
            <BrowserRouter>
                <div>
                <Menu>
        <Menu.Item name='SnapTrack' header>SNAPTRACK</Menu.Item>
        <Menu.Menu position='right'>
            
          <Menu.Item name='signup'  onClick={this.handleGoogleLogin}>Google</Menu.Item>
          </Menu.Menu>
            </Menu>
            <Route exact path='/' render={this.renderHome} />
            <Route path='/MyTasks' render={this.renderMyTasks}/>
            <Route path='/assignTask' render={this.handleAssignTask} />
                </div>
            </BrowserRouter>
        );
    }
}