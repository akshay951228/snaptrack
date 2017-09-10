import React,{Component} from 'react';
import {BrowserRouter,Route,Link} from 'react-router-dom';
import {Menu} from 'semantic-ui-react';
import Home from './Home';
import 'semantic-ui-css/semantic.min.css';
import * as firebase from 'firebase';
import MyTasks from './MyTasks';
import AssignTask from './AssignTask';
import Contract from './Contract';
import TaskPage from './TaskPage';
import GivenTasks from './GivenTasks';
import AssignedPage from './AssignedPage';

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
        this.renderGivenTasks=this.renderGivenTasks.bind(this);
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

    handleAuthChange(user){
        if(user)
        this.setState({
            loggedIn:true,
            currentUser:user
        });
        console.log('user came in')
    }

    renderMyTasks(props){
        return(
            <MyTasks loggedIn={this.state.loggedIn} currentUser={this.state.user} routeProps={props}/>
        );
    }


    handleAssignTask(props){
    return  (<AssignTask loggedInProp={this.state.loggedIn} routeProps={props}  />);
    }
    handleContract(props){
        return <Contract routeProps={props}/>;
    }

    renderGivenTasks(props){
        return(<GivenTasks routeProps={props} loggedIn={this.state.loggedIn} />);
    }

    render(){
        return(
            <BrowserRouter>
                <div>
                <Menu>
       <Link to='/'> <Menu.Item name='SnapTrack' header>SNAPTRACK</Menu.Item></Link>
       <Link to='/mytasks'><Menu.Item name='mytasks' header>My tasks</Menu.Item></Link>
       <Link to='/assigntask'><Menu.Item name='AssignTask' header>Assign Tasks</Menu.Item></Link>
       <Link to='/giventasks'><Menu.Item name='GivenTasks' header>Given Tasks</Menu.Item></Link>
       <Link to='/contracts'><Menu.Item name='Contracts' header>Contracts</Menu.Item></Link>
        <Menu.Menu position='right'>
            
          <Menu.Item name='signup'  onClick={this.handleGoogleLogin}>Google</Menu.Item>
          </Menu.Menu>
            </Menu>
            <Route exact path='/' render={this.renderHome} />
            <Route path='/MyTasks' render={this.renderMyTasks}/>
            <Route path='/assignTask' render={this.handleAssignTask} />
            <Route path='/contracts' render={this.handleContract}/>
            <Route path='/taskpage/:assign' component={TaskPage}/>
            <Route path='/giventasks' render={this.renderGivenTasks}/>
            <Route path='/assignedpage/:key' component={AssignedPage}/>
                </div>
            </BrowserRouter>
        );
    }
}