console.log(1);
console.log(2);
doSomeThing();
console.log(4);
console.log(5);
console.log(6);
console.log(7);
console.log(8);


function doSomeThing (){
    console.log(3)
}



fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))