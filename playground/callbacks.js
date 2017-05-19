// sync callback function

var getUser = (id,callback)=>{
    var user ={
        id: 31,
        name:"Naveen"
    };
    
    //callback(user);
};

getUser(31,(user)=>{
    console.log(user);
});