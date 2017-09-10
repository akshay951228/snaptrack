import React,{Component} from 'react';
import {Button} from 'semantic-ui-react';

export default class Home extends Component{

    constructor(props){
        super(props);
        this.handleMyTasks=this.handleMyTasks.bind(this);
        this.handleAssignTask=this.handleAssignTask.bind(this);
        this.handleContract = this.handleContract.bind(this);
    }

    handleMyTasks(){
        this.props.routeProps.history.push('/mytasks');
    }
    handleAssignTask(){
        this.props.routeProps.history.push('/assignTask');
    }
    handleContract(){
        this.props.routeProps.history.push('/contracts');
    }

    render(){
        return(
            <div>
                <Button color='red' onClick={this.handleMyTasks}>My Tasks</Button>
                <Button color='blue' onClick={this.handleAssignTask}>Assign Task</Button>
<<<<<<< HEAD
                <Button color='orange' onClick={this.handleContract}>Contract</Button>
=======
                <Button color='orange'onClick={this.handleContract}>Contract</Button>
>>>>>>> 7f9f8a7f258579d2e38a2c6295fd6809d85ae5d2
            </div>
        );
    }
}