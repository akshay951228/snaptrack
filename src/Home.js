import React,{Component} from 'react';
import {Button} from 'semantic-ui-react';

export default class Home extends Component{

    constructor(props){
        super(props);
        this.handleMyTasks=this.handleMyTasks.bind(this);
        this.handleAssignTask=this.handleAssignTask.bind(this);
    }

    handleMyTasks(){
        this.props.routeProps.history.push('/mytasks');
    }
    handleAssignTask(){
        this.props.routeProps.history.push('/assignTask');
    }

    render(){
        console.log('into render');
        return(
            <div>
                <Button color='red' onClick={this.handleMyTasks}>My Tasks</Button>
                <Button color='blue' onClick={this.handleAssignTask}>Assign Task</Button>
            </div>
        );
    }
}