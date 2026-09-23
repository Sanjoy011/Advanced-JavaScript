const checkme = (name,address) => {
    document.querySelector("h1").innerHTML = `My name is ${name} and i am commeing form ${address}`;
}

setTimeout(checkme,3000,"Sourav","Kolkata");

