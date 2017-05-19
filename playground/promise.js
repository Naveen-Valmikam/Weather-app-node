var asyncAdd = (a,b)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
               if(typeof a === 'number' && typeof b === 'number'){
                   resolve(a+b);
               } else{
                   reject('Arguements must be numbers');
               }
        },1500);
    });
};

// asyncAdd(5,4).then((res)=>{
//    console.log('Result: ', res);
// },(error)=>{
//     console.log(error);
// });

asyncAdd(5,4).then((res)=>{
    console.log('Result: ',res);
    return asyncAdd(res,'21');
}).then((sum)=>{
    console.log("Sum should be 30: ",sum)
}).catch((errorMessage)=>{
    console.log(errorMessage);
});


// var somePromise = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve('It works!');
//         reject('Unable to fulfil promise');
//     },2500);    
// });

// somePromise.then((message)=>{
//     console.log('Success',message);
// },(error)=>{
//     console.log('Error: ',error);
// });