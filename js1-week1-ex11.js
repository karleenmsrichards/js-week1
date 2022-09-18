//Exercise 3 Functions
// printMessage was called 2 times
// getMessage was called once
// The parameter name for printMessage is "x"
// The parameter name for getMessage is "name"

// The parameter name that is better is "x" and not "name" since there is no need to specify the data type for parameters in JavaScript function definitions.
// As it does not perform type checking based on passed in JavaScript function.
// It is best to specify the data type in the name of the function rather than the parameter.

//5.  When printMessage is called the return value is Hello, nice to meet you + x.

function printMessage(x) {
  console.log("Hello, nice to meet you " + x);
}

printMessage("Mitch");

printMessage("August");


//f. Hello, nice to meet you Ali

function getMessage(name) {
  return "Hello, nice to meet you " + name;
}

const messageForAli = getMessage("Ali");

console.log(messageForAli);

//g. curiousMessage will evaluate to  Hello, nice to meet you 42;


const curiousMessage = getMessage(42);

console.log(curiousMessage);
