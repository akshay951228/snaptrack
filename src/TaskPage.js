import React,{Component} from 'react';
import * as firebase from 'firebase';
import {Grid,Button,Image} from 'semantic-ui-react';
import Webcam from 'react-webcam';


export default class TaskPage extends Component{

    constructor(props){
        super(props);
        this.state={
            data:null,
            camera:false,
            screenShots:[]
        }
        this.openCamera=this.openCamera.bind(this);
        this.handleCapture=this.handleCapture.bind(this);
        this.uploadImages=this.uploadImages.bind(this);
    }

    componentDidMount(){
        this.currentTask=this.props.match.params.assign;
        let user=firebase.auth().currentUser;
        this.databaseRef=firebase.database().ref(user.uid+'/mytasks/'+this.currentTask).on('value',dataSnap=>{
            if(dataSnap.val())
                this.setState({data:dataSnap.val()});
        })
    }

    openCamera(){
        this.setState({camera:true});
    }

    setRef = (webcam) => {
        this.webcam = webcam;
    }

    handleCapture(){
        const imageSrc = this.webcam.getScreenshot();
        let screenShots=this.state.screenShots;
        screenShots.push(imageSrc);
        this.setState({
            screenShots
        });
    }

    getImages(){
        if(this.state.screenShots)
       {let allImages=this.state.screenShots.map((image)=>{
            return <div key={image}><Image src={image} style={{height:'50px',width:'50px'}}/><br /></div>
        })
        return allImages;}
    }

    uploadImages(){
        let target=this.state.data.from;
        let today= new Date();
        firebase.database().ref(target+'/assigned/'+this.currentTask+'/images/'+today).set(this.state.screenShots).then(()=>{
            this.setState({camera:false,screenShots:null});
        });
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
                      
                      <h3>Take a snap!</h3>
                      </Grid.Column>
                       <Grid.Column  mobile={16} tablet={10} computer={8}>
                      {!this.state.camera &&  <Button color='green' onClick={this.openCamera}>Start Camera</Button>}
                      </Grid.Column>
                    
                      <Grid.Column  mobile={16} tablet={10} computer={8}>
                      
                      {this.state.camera && 
                        <Webcam audio={ false } height={ 320 } width={ '100%' } ref={ this.setRef }/>
                      }
                      </Grid.Column>
                      <Grid.Column  mobile={16} tablet={10} computer={8}>
                      
                      {this.state.camera && 
                        <div>
                        <Button color='orange' onClick={this.handleCapture}>Capture</Button>
                        <Button color='green' onClick={this.uploadImages}>Send</Button>
                        </div>
                      }
                      </Grid.Column>
                      <Grid.Column  mobile={16} tablet={10} computer={8}>
                      <Grid>{Images}</Grid>
                      </Grid.Column>
                       </Grid>
                </div>
            }
        </div>);
    }

}