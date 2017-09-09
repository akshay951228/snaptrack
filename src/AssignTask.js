import React,{Component} from 'react';
import { Form ,Button} from 'semantic-ui-react'
import * as firebase from 'firebase';


export default class AssignTask extends Component{

    

    handleSubmit(event){
        let user = firebase.auth().currentUser;
        let databaseRef = firebase.database().ref(user.uid+'/assigned');
        event.preventDefault();
        firebase.database().ref().orderByChild('profile/email').equalTo(event.target.email.value).once('value',data=>{
            console.log(data.val());
        });

        let newTask ={
            taskname:event.target.taskName.value,
            to:event.target.email.value
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
                <Form.Input name='email' label='Email of target' placeholder='example@email.com' />
                </Form.Group>
                <Button primary>Submit</Button>
                </Form>
            </div>
        );
    }

}
