import React,{Component} from 'react';

export default class TaskPage extends Component{

    componentDidMount(){
        console.log(this.props.match.params.assign);
    }
    
    render(){
        debugger;
        return(<div>wait...</div>);
    }

}