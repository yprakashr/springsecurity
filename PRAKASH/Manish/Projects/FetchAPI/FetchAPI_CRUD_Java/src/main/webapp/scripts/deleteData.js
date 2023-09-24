// function to delete the data
function deleteData(id) {
  // fetch API to delete data by ID
  let promise = fetch(`http://192.168.0.225:8081/deleteAppointments/${id}`, {
    method: "DELETE",
  });
  promise
    .then((response) => {
      console.log(response.status);
      console.log("deleted entry for id: " + id);
    })
    .then((data) => {
      var table = document.getElementById("myTable");

      // fetch api to load table after deleting entry ------------
      let promise = fetch("http://192.168.0.225:8081/AllAppointments", {
        method: "GET",
      });
      promise
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          var tab = ``;

          // loading data into each table cell after deleting -----------
          for (var i = 0; i < data.length; i++) {
            tab += `<tr>
          <td>${data[i].id}</td>
          <td>${data[i].firstname}</td>
          <td>${data[i].lastname}</td>
          <td>${data[i].age}</td>
          <td>${data[i].phonenumber}</td>
          <td>${data[i].gender}</td>
          <td>${data[i].date}</td>
          <td>${data[i].time}</td>
          <td>${data[i].city}</td>
          <td>${data[i].area}</td>
          <td>${data[i].vaccination_status}</td>
          <td>${data[i].symptoms}</td>
          <td>${data[i].add_info}</td>
          <td><button id="edit-btn">edit</button></td>
		      <td><button id="delete-btn" onclick="deleteData(${data[i].id})">delete</button></td>
        </tr>`;
          }

          // Setting innerHTML of table-body
          table.innerHTML = tab;
        });
    });
}
