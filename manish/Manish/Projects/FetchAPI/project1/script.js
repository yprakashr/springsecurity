var table = document.getElementById("users");
var dataGlobal;
(async () => {
  const getData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    dataGlobal = data;
    return data;
  };

  let data_local = await getData();
  console.log(data_local);

  // function to load html data
  function show() {
    var tab = `<tr>
        <th>ID</th>
        <th>Name</th>
        <th>Email</th>
      </tr>`;

    // Loop to access all rows
    for (var i = 0; i < dataGlobal.length; i++) {
      tab += `<tr>
	<td>${dataGlobal[i].id} </td>
	<td>${dataGlobal[i].name}</td>
	<td>${dataGlobal[i].email}</td>	
                </tr>`;
    }

    // Setting innerHTML as tab variable
    table.innerHTML = tab;
  }

  //calling the show method
  show();
})();
