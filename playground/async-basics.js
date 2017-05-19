console.log('Starting app');

setTimeout(()=>{
    console.log('Inside a call back')
},50);

setTimeout(() => {
    console.log('Inside 2nd call back')
},0);

console.log('Finishing app');