import React,{Component} from 'react';
import {Button} from 'semantic-ui-react';

export default class Home extends Component{

    constructor(props){
        super(props);
        this.handleMyTasks=this.handleMyTasks.bind(this);
    }

    handleMyTasks(){
        this.props.routeProps.history.push('/');
    }

    render(){
        console.log('into render');
        return(
            <div>
                <Button color='red' onClick={this.handleMyTasks}>My Tasks</Button>
                <Button color='blue'>Assign Task</Button>
            </div>
        );
    }
}