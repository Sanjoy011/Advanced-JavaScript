let myPromise = new Promise((resolve,rejected) => {
    let sucess = false;

    if(sucess){
        resolve("Sir,Your Problem is Resolved");
    }else{
        rejected("Sorry! Sir, Your Applications is rejected");
    }
});

myPromise
    .then((result) => {
        console.log("Resolve: ",result);
    })
    .catch((error) => {
        console.log("Cancle: ",error);
    })
    .finally(() => {
        console.log("Your Applications is granted!");
    });