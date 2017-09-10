import React,{Component} from 'react';
import * as firebase from 'firebase';
import {Grid} from 'semantic-ui-react';

export default class AssignedPage extends Component{

    constructor(props){
        super(props);
        this.state={
            data:null
        }
    }

    componentDidMount(){
        this.currentTask=this.props.match.params.assign;
        let user=firebase.auth().currentUser;
        firebase.database().ref(user.uid+'/assigned/'+this.currentTask).on('value',dataSnap=>{
            this.setState({data:dataSnap.val()})
        })
    }

    getImages(){
        console.log(Object.keys(this.state.data.images));
        debugger;
    }

    render(){
        let Images=this.getImages();
        return(<div>
            {this.state.data && 
                <div>
                <Grid textAlign='center'>
                
                      <Grid.Column  mobile={16} tablet={10} computer={8}>
                      <h2>{this.state.data.taskname}</h2>
                        </Grid.Column>
                      <Grid.Column  mobile={16} tablet={10} computer={8}>
                      
                      <h3>Watch the Snaps</h3>
                      </Grid.Column>
                       <Grid.Column  mobile={16} tablet={10} computer={8}>
                       
                      </Grid.Column>
                    
                      <Grid.Column  mobile={16} tablet={10} computer={8}>
                      {Images}
                      
                      </Grid.Column>
                      <Grid.Column  mobile={16} tablet={10} computer={8}>
                      
                      
                      </Grid.Column>
                      <Grid.Column  mobile={16} tablet={10} computer={8}>
                      
                      </Grid.Column>
                       </Grid>
                </div>
            }
        </div>);
    }

}