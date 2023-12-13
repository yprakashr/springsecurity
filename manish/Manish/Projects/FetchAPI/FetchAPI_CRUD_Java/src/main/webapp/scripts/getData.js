// getting the session ID
var sessionID = sessionStorage.getItem("session");

// getting account tag element
var element = document.getElementById("acc-name");

// sessing the session name as account name
element.innerHTML = sessionID;

// fetch api to load data from DB into table
function getData1() {
  // condition to prevent to access page if no account logged in
  if (
    sessionID == null ||
    sessionID == "null" ||
    sessionID == undefined ||
    sessionID == ""
  ) {
    // if no account logged in, then redirecting to homepage
    location.replace("homepage");
  }

  // if account is logged in, then loading appointments data
  else {
    //getting table-body element
    var table = document.getElementById("myTable");

    // fetch API to get data
    let promise = fetch("http://192.168.0.225:8081/AllAppointments", {
      method: "GET",
    });
    promise
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        var tab = ``;

        // Loop to access all rows to fill loaded data
        for (var i = 0; i < data.length; i++) {
          tab += `<tr id="r${data[i].id}">
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
          
          <td><button id="edit-btn" onclick="editData(${data[i].id})">edit</button></td>
          <td><button id="delete-btn" onclick="deleteData(${data[i].id})">delete</button></td>
        </tr>`;
        }

        // Setting innerHTML of table-body
        table.innerHTML = tab;
      });
  }
}
