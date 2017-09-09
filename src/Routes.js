import React,{Component} from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import {Menu} from 'semantic-ui-react';
import Home from './Home';
import 'semantic-ui-css/semantic.min.css';
import * as firebase from 'firebase';


export default class Routes extends Component{

    renderHome(props){
        return(
            <Home routeProps={props} />
        );
    }

    constructor(props){
        super(props);
        this.renderHome=this.renderHome.bind(this);
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
    console.log(user);
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
            <Route path='/home' render={this.renderHome} />
                </div>
            </BrowserRouter>
        );
    }
}