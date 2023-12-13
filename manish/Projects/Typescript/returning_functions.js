//function defined
function greet() {
    //the function returns a string
    return "Hello World";
}
function caller() {
    var msg = greet(); //function greet() invoked
    console.log(msg);
}
//invoke function
caller();
