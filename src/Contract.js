import React,{Component} from 'react';
import PersonalProject from '../build/contracts/PersonalProject.json'
import getWeb3 from './utils/getWeb3'

export default class Contract extends Component{
    constructor(props) {
        super(props)
    
        this.state = {
          web3: null,
          data:null
        }
      }
      componentWillMount() {
        // Get network provider and web3 instance.
        // See utils/getWeb3 for more info.
    
        getWeb3
        .then(results => {
          this.setState({
            web3: results.web3
          })
          
          // Instantiate contract once web3 provided.
          this.instantiateContract()
        })
        .catch(() => {
          console.log('Error finding web3.')
        })
      }
      
      instantiateContract() {
       
    
        const contract = require('truffle-contract')
        const personalProject = contract(PersonalProject);
        personalProject.setProvider(this.state.web3.currentProvider);
            
            var contractInstance;
        
            // Get accounts.
            this.state.web3.eth.getAccounts((error, accounts) => {
                
                personalProject.deployed().then((instance) => {
                    contractInstance = instance;
                return contractInstance.publishAContract('akshay','kumar', {from: accounts[0]})
              }).then((result) => {
                console.log(result);
                return contractInstance.showUserContract.call('akshay',accounts[0])
              }).then((result) => {
                // Update state with the result.
                debugger;
                return this.setState({ data: result })
              })
            })
          }
    
    render(){
      
        return(
            <div>
                {this.state.data}
                </div>
        );
    }
}