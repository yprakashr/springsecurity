var city = document.getElementById("city");
var area = document.getElementById("area");

//function to fetch cities list
let promise1 = fetch(
  "https://raw.githubusercontent.com/nshntarora/Indian-Cities-JSON/master/cities.json"
);
promise1
  .then((response) => {
    return response.json();
  })
  .then((data1) => {
    // Loop to load city options
    for (var i = 0; i < data1.length; i++) {
      var option = document.createElement("option");
      option.text = data1[i].name;
      option.value = data1[i].name;
      city.add(option);
    }
  });

//function to fetch areas list
let promise2 = fetch("../jsons/areas.json");
promise2
  .then((response) => {
    return response.json();
  })
  .then((data2) => {
    // Loop to load area options
    for (var i = 0; i < data2.length; i++) {
      var option = document.createElement("option");
      option.text = data2[i].name;
      option.value = data2[i].name;
      area.add(option);
    }
  });
