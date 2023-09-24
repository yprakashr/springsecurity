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
    let promise = fetch("http://192.168.0.227:8080/appointments", {
      method: "GET",
    });
    promise
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        var tab = ``;

        // Loop to access all rows to fill loaded data
        for (var i = 0; i < data.data.length; i++) {
          tab += `<tr id="r${data.data[i].id}">
          <td>${data.data[i].id}</td>
          <td>${data.data[i].firstname}</td>
          <td>${data.data[i].lastname}</td>
          <td>${data.data[i].age}</td>
          <td>${data.data[i].phonenumber}</td>
          <td>${data.data[i].gender}</td>
          <td>${data.data[i].date}</td>
          <td>${data.data[i].time}</td>
          <td>${data.data[i].city}</td>
          <td>${data.data[i].area}</td>
          <td>${data.data[i].vaccination_status}</td>
          <td>${data.data[i].symptoms}</td>
          <td>${data.data[i].add_info}</td>
          
          <td><button id="edit-btn" onclick="editData(${data.data[i].id})">edit</button></td>
          <td><button id="delete-btn" onclick="deleteData(${data.data[i].id})">delete</button></td>
        </tr>`;
        }

        // Setting innerHTML of table-body
        table.innerHTML = tab;
      });
  }
}
