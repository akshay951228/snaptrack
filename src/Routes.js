import React,{Component} from 'react';
import {BrowserRouter,Route,Link} from 'react-router-dom';
import {Menu} from 'semantic-ui-react';
import Home from './Home';
import 'semantic-ui-css/semantic.min.css';
import * as firebase from 'firebase';
import MyTasks from './MyTasks';
import AssignTask from './AssignTask';
//import Contract from './Contract'

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


<<<<<<< HEAD
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
=======
componentDidMount(){
    firebase.auth().getRedirectResult().then(this.authRedirectSuccess).catch(this.authRedirectFail);
    
    firebase.auth().onAuthStateChanged(this.handleAuthChange);
    
}
authRedirectFail(result){
    console.log(result);
}
handleAuthChange(user){
    if(user){
        this.setState({
            loggedIn:true
        });
        firebase.database().ref(user.uid+'/profile').set({name:user.displayName,email:user.email,photo:user.photoURL});
    }
    
}
>>>>>>> b588e2f77010f6a2da41f2622f0924a8d1e2110a

    renderMyTasks(){
        return(
            <MyTasks loggedIn={this.state.loggedIn}/>
        );
    }


    handleAssignTask(props){
    return  (<AssignTask loggedInProp={this.state.loggedIn} routeProps={props}  />);
    }
    // handleContract(props){
    //     return (<Contract routeProps={props}/>);
    // }

    render(){
        return(
            <BrowserRouter>
                <div>
                <Menu>
       <Link to='/'> <Menu.Item name='SnapTrack' header>SNAPTRACK</Menu.Item></Link>
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