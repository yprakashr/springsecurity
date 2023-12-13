//commandline as string
var options = { program: "test1", commandline: "Hello" };
console.log(options.commandline);
//commandline as a string array
options = { program: "test1", commandline: ["Hello", "World"] };
console.log(options.commandline[0]);
console.log(options.commandline[1]);
//commandline as a function expression
options = {
    program: "test1",
    commandline: function () {
        return "**Hello World**";
    }
};
var fn = options.commandline;
console.log(fn());
