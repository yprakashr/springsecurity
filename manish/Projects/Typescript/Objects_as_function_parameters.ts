var person = {
  fName: "man",
  lName: "mac",
};

var disp = function (obj: { fName: string; lName: string }) {
  console.log("fName is: " + obj.fName);
  console.log("lName is: " + obj.lName);
};

disp(person);
