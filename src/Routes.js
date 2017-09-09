import React,{Component} from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import {Menu} from 'semantic-ui-react';
import Home from './Home';
import 'semantic-ui-css/semantic.min.css';


export default class Routes extends Component{

    renderHome(props){
        return(
            <Home routeProps={props} />
        );
    }

    render(){
        return(
            <BrowserRouter>
                <div>
                <Menu>
        <Menu.Item name='SnapTrack' header>SNAPTRACK</Menu.Item>
            </Menu>
            <Route path='/home' render={this.renderHome} />
                </div>
            </BrowserRouter>
        );
    }
}