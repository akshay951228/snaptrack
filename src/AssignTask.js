import React,{Component} from 'react';
import { Form ,Button} from 'semantic-ui-react'
import * as firebase from 'firebase';
import axios from 'axios';


export default class AssignTask extends Component{

    

    handleSubmit(event){
        let user = firebase.auth().currentUser;
        let databaseRef = firebase.database().ref(user.uid+'/assigned');
        event.preventDefault();
        let targetUser= null;
        let taskname=event.target.taskname.value;
        let newKey=databaseRef.push().key;
        firebase.database().ref().orderByChild('profile/email').equalTo(event.target.email.value).once('value',data=>{
            console.log(data.val());
            targetUser=Object.keys(data.val())[0];
        })
        .then(()=>{
            
            databaseRef.child(newKey).set({taskname:taskname,to:targetUser});
        })
        .then(()=>{
            firebase.database().ref(targetUser+'/mytasks').child(newKey).update({taskname:taskname,from:user.uid});
        });
        firebase.database().ref('currentNonce').once('value',snap=>{
            this.current_nonce=snap.val();
        })
        
        let url= 'https://us-central1-bestof-78fcd.cloudfunctions.net/snapTrack';
        axios.get(url,{params:{
            taskname: taskname,
            from:user.uid,
            to:targetUser,
            current_nonce:++this.current_nonce
        }},{crossdomain:true});


    }

    render(){
        return(
            <div>
           <Form onSubmit={this.handleSubmit}>
                <Form.Group widths='equal'>
                <Form.Input name='taskname'  label='TaskName' placeholder='taskname ' />
                <Form.Input name='email' label='Email of target' placeholder='example@email.com' />
                </Form.Group>
                <Button primary>Submit</Button>
                </Form>
            </div>
        );
    }

}
