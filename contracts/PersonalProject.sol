pragma solidity ^0.4.0;

contract PersonalProject{
    
        struct Project{
          string to;
        }
        mapping(string => Project) assigned;
    
    function publishAContract(string from_user,string to_user){
        
        assigned[from_user] = Project(to_user);
    }
    
    function showUserContract(string sender) returns (string){
        
        return assigned[sender].to;
    }
    
}