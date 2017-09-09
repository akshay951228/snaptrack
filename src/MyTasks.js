import React,{Component} from 'react';
import * as firebase from 'firebase';
import {Accordion,Icon,Grid} from 'semantic-ui-react';

export default class MyTasks extends Component{

    constructor(props){
        super(props);
        this.state={
            data:null
        }
        this.getTasks=this.getTasks.bind(this);
    }

    componentDidMount(){
        let user=firebase.auth().currentUser;
        if(this.props.loggedIn)
            {
                firebase.database().ref(user.uid+'/mytasks').on('value',dataSnap=>{
                    if(dataSnap.val())
                        this.setState({data:dataSnap.val()});
                })
            }
    }

    getTasks(){
        let allTasks=[];
        allTasks=Object.keys(this.state.data).map((key)=>{
            return(
                <Accordion styled>
                <Accordion.Title>
                    <Icon name='dropdown' />
                    What is a dog?
                  </Accordion.Title>
                  <Accordion.Content>
                    <p>
                      A dog is a type of domesticated animal. Known for its loyalty and faithfulness,
                      {' '}it can be found as a welcome guest in many households across the world.
                    </p>
                  </Accordion.Content>
                </Accordion>
            );
        });
        return allTasks;
    }

    render(){
        return(
            <div>
                {!this.state.data && 
                    <Grid textAlign='center'>
                            
                        <Grid.Column   tablet={3} computer={4} >
                        </Grid.Column>
                        <Grid.Column  mobile={16} tablet={5} computer={4}>
                        <h2>No tasks yet</h2>
                        </Grid.Column>
                    </Grid>
                }
                {this.state.data && 
                    <div>
                        <Grid textAlign='center'>
                        <Grid.Column   tablet={3} computer={4} >
                        </Grid.Column>    
                        <Grid.Column  mobile={16} tablet={5} computer={4}>
                        {this.getTasks()}
                        </Grid.Column>
                        </Grid>
                    </div>
                }
            </div>
        );
    }
}