import React,{Component} from 'react';
import * as firebase from 'firebase';
import {Grid,Image} from 'semantic-ui-react';
var Carousel=require('react-responsive-carousel').Carousel;

export default class AssignedPage extends Component{

    constructor(props){
        super(props);
        this.state={
            data:null
        }
       // this.getImages=this.getImages.bind(this);
    }

    componentDidMount(){
        this.currentTask=this.props.match.params.key;
        let user=firebase.auth().currentUser;
        firebase.database().ref(user.uid+'/assigned/'+this.currentTask).on('value',dataSnap=>{
            console.log(user.uid);
            console.log(this.currentTask);
            console.log(dataSnap.val());
            this.setState({data:dataSnap.val()})
        })
        
    }

    getImages(){
        if(this.state.data){
            return Object.keys(this.state.data.images).map((day)=>{
                return Object.keys(this.state.data.images[day]).map((image)=>{
                    return <div>
                            <img src={this.state.data.images[day][image]}/>
                            <p className="legend">{day}</p>
                            </div>
                });
                  
            })
        }
    }

    render(){
       let Images= this.getImages();
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
                   <Carousel showArrows={true} > {this.state.data.images && Images}</Carousel>
                      
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