// function name (name){
// 	return name + " is happy";
// }

// debugger;
// let me = name("allan");
// console.log(me)

// closeure 

// So in this example, we need to remember that a function
// has access to variables that 
// are defined in its calling context. 
// The formal name of this phenomenon is the lexical scope.

// 1: let val1 = 2
// 2: function multiplyThis(n) {
// 3:   let ret = n * val1
// 4:   return ret
// 5: }
// 6: let multiplied = multiplyThis(6)
// 7: console.log('example of scope:', multiplied)

// function can return anything

//  Whenever you declare a new function 
//  and assign it to a variable, you store the 
//  function definition, as well as a closure.

//  The closure contains all the variables that are 
//  in scope at the time of creation of the 
//  function. It is analogous to a backpack. 

//  A function definition comes with a little backpack. 
//  And in its pack it stores all the variables 
//  that were in scope at the time that the function definition was created.




function makeCounter() {
  let count = 0;

  return function() {
    return count++;
  };
}

let counter = makeCounter();
let counter2 = makeCounter();



