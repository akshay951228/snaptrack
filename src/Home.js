import React,{Component} from 'react';

export default class Home extends Component{

    render(){
        return(
            <div>
<<<<<<< HEAD
                <Button color='red' onClick={this.handleMyTasks}>My Tasks</Button>
                <Button color='blue' onClick={this.handleAssignTask}>Assign Task</Button>
<<<<<<< HEAD
                <Button color='orange' onClick={this.handleContract}>Contract</Button>
=======
                <Button color='orange'onClick={this.handleContract}>Contract</Button>
                <Button color='black' onClick={this.handleAssigned}>Assiged</Button>
>>>>>>> 2b7d302b8757db3880d2c9ab37455c239e0adecb
=======
                <h1>Welcome to SnapTrack!</h1>
>>>>>>> 099a380da46e66d7d9008c047a68c9ea67972186
            </div>
        );
    }
}