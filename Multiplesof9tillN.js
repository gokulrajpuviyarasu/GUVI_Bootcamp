// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  var str=[];
  for(var i=1;i<+userInput[0]+1;i++)
  {
      str.push(i*9);
  }
  console.log(str.join(' '));
});