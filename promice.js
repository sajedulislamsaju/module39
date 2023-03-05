const getData = new Promise ((resolve , reject) => {
    const num = math.random()*10;
    console.log(num)
    if (num < 5){
        resolve (4859);
    }
    else{
        reject ('no data is avualable in the rejext option')
    }

})

// console.log(getData);

getData 
        .then (data => console.log(data))
        .catch (err => console.error("err", err))