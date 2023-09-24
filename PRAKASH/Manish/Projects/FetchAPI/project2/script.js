var table = document.getElementById("users");

let promise = fetch("https://jsonplaceholder.typicode.com/users");
promise
  .then((response) => {
    console.log(response.status);
    console.log(response.ok);
    return response.json();
  })
  .then((data) => {
    var tab = `<tr>
        <th>ID</th>
        <th>Name</th>
        <th>Email</th>
      </tr>`;

    // Loop to access all rows
    for (var i = 0; i < data.length; i++) {
      tab += `<tr>
	<td>${data[i].id} </td>
	<td>${data[i].name}</td>
	<td>${data[i].email}</td>	
                </tr>`;
    }

    // Setting innerHTML as tab variable
    table.innerHTML = tab;
  });
