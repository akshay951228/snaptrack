import React,{Component} from 'react';
import { Form ,Button} from 'semantic-ui-react'
import * as firebase from 'firebase';


export default class AssignTask extends Component{

    

    handleSubmit(event){
        let user = firebase.auth().currentUser;
        let databaseRef = firebase.database().ref(user.uid+'/assigned');
        event.preventDefault();
        let newTask ={
            taskname:event.target.taskName.value
        };
        let newKey=databaseRef.push().key;
        databaseRef.child(newKey).set(newTask);

    }

    render(){
        return(
            <div>
           <Form onSubmit={this.handleSubmit}>
                <Form.Group widths='equal'>
                <Form.Input name='taskName'  label='TaskName' placeholder='taskname ' />
                <Form.Input name='user' label='User' placeholder='username' />
                </Form.Group>
                <Button primary>Submit</Button>
                </Form>
            </div>
        );
    }

}
