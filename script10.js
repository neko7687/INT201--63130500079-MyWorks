let arr = [1 , 3 , 5 , 7 , 9]

const includesOddInArr = arr.includes(3)
console.log(includesOddInArr)

let scores = [
    {subject : "Math" , score : 51},
    {subject : "Eng" , score : 65},
    {subject : "Sci" , score : 99}
]

// ------------------------------------------------------------------------------

let pass = scores.some(function(value){
        return value.score < 50;        
})

if (pass) {
    console.log("You failed");
}else{
    console.log("You pass exam")
}

//-----------------------------------------------------------------------------
//1.

const myFunc = function (instructor, ta, ...students) {

    let greeting = 'Hello';
  
    return students;
  
  };
  
  
  
  //2.
  
  function echo(text) {
  
    return text;
  
  }
  
  
  
  //3.
  
  function sayHi(greeting, name) {
  
    return `${greeting}, ${name}`;
  
  }
  
  //4.
  
const getclass = () => 'INT201'; 

console.log(getclass());