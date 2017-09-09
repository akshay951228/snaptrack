import React,{Component} from 'react';
import {BrowserRouter,Route,Link} from 'react-router-dom';
import {Menu} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';


export default class Routes extends Component{
    render(){
        return(
            <BrowserRouter>
                <div>
                <Menu>
        <Menu.Item name='SnapTrack' header>SNAPTRACK</Menu.Item>
            </Menu>
                </div>
            </BrowserRouter>
        );
    }
}