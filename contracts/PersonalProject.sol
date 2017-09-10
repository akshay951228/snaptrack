pragma solidity ^0.4.0;

contract PersonalProject{
    
        
        mapping(string => string) assigned;
    
    function publishAContract(string from_user,string to_user){
        
        assigned[from_user] = to_user;
    }
    
    function showUserContract(string sender) returns (string){
        
        return assigned[sender];
    }
    
}