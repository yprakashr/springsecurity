// function to cancel
function cancelAction(id) {
  loadDataOnCancel(id);
}

// ---------------------------------------------------------------------------------

// function to load data on cancel
function loadDataOnCancel(id) {
  // getting the row of desired data to edit
  var row = document.getElementById(`r${id}`);

  // fetch api to load Row after cancel
  let promise = fetch(`http://localhost:8080/appointments/${id}`, {
    method: "GET",
  });
  promise
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      var tdata = ``;

      // loading row with updated data
      tdata = `<td>${data.data.id}</td>
        <td>${data.data.firstname}</td>
        <td>${data.data.lastname}</td>
        <td>${data.data.age}</td>
        <td>${data.data.phonenumber}</td>
        <td>${data.data.gender}</td>
        <td>${data.data.date}</td>
        <td>${data.data.time}</td>
        <td>${data.data.city}</td>
        <td>${data.data.area}</td>
        <td>${data.data.vaccination_status}</td>
        <td>${data.data.symptoms}</td>
        <td>${data.data.add_info}</td>
        <td><button id="edit-btn" onclick="editData(${data.data.id})">edit</button></td>
        <td><button id="delete-btn" onclick="deleteData(${data.data.id})">delete</button></td>`;

      // Setting innerHTML as tab variable
      row.innerHTML = tdata;
    });
}

// ---------------------------------------------------------------------------------

// function to update data into DB
function update(bodydata, id) {
  // fetch API to update data
  let promise = fetch(`http://localhost:8080/appointments/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(bodydata),
  });
  promise
    .then((response) => {
      console.log(response.status);
    })
    .then((data) => {
      // getting the row of data to be loaded after updating
      var row = document.getElementById(`r${id}`);

      // fetch api to get data by ID
      let promise = fetch(`http://localhost:8080/appointments/${id}`, {
        method: "GET",
      });
      promise
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          var tdata = ``;

          // loading row with updated data
          tdata = `<td>${data.data.id}</td>
        <td>${data.data.firstname}</td>
        <td>${data.data.lastname}</td>
        <td>${data.data.age}</td>
        <td>${data.data.phonenumber}</td>
        <td>${data.data.gender}</td>
        <td>${data.data.date}</td>
        <td>${data.data.time}</td>
        <td>${data.data.city}</td>
        <td>${data.data.area}</td>
        <td>${data.data.vaccination_status}</td>
        <td>${data.data.symptoms}</td>
        <td>${data.data.add_info}</td>
        <td><button id="edit-btn" onclick="editData(${data.data.id})">edit</button></td>
        <td><button id="delete-btn" onclick="deleteData(${data.data.id})">delete</button></td>`;

          // Setting innerHTML as tab variable
          row.innerHTML = tdata;
        });
    });
}

// ---------------------------------------------------------------------------------

// main edit form validation function
function UpdateData(id) {
  //Getting All form elements
  var Fname = document.getElementById(`fname${id}`);
  var Lname = document.getElementById(`lname${id}`);
  var Age = document.getElementById(`age${id}`);
  var Phone = document.getElementById(`phone${id}`);
  var Gender = document.getElementById(`gender${id}`);
  var Dates = document.getElementById(`date${id}`);
  var Time = document.getElementById(`time${id}`);
  var City = document.getElementById(`city${id}`);
  var Area = document.getElementById(`area${id}`);
  var Vacc = document.getElementById(`vacc${id}`);
  var Symptoms = document.getElementById(`symptoms${id}`);
  var Addinfo = document.getElementById(`info${id}`);

  // data JSON
  var FormData = {
    id: id,
    firstname: Fname.value.toString(),
    lastname: Lname.value.toString(),
    age: Age.value.toString(),
    phonenumber: Phone.value.toString(),
    gender: Gender.value.toString(),
    date: Dates.value.toString(),
    time: Time.value.toString(),
    city: City.value.toString(),
    area: Area.value.toString(),
    vaccination_status: Vacc.value.toString(),
    symptoms: Symptoms.value.toString(),
    add_info: Addinfo.value.toString(),
  };

  // initial boolean flag
  var submitValue = true;

  //Alert Function for invalid first name pattern
  if (Fname.value.length === 0) {
    alert("First name cannot be empty");
    Fname.focus();
    submitValue = false;
  }

  if (submitValue) {
    if (Fname.value.length < 3) {
      alert("First name must contain minimum 3 characters");
      Fname.focus();
      submitValue = false;
    }
  }

  if (submitValue) {
    if (!Fname.value.match(/^[a-zA-Z\s]*$/)) {
      alert("First name must contain only alphabets A-Z");
      Fname.focus();
      submitValue = false;
    }
  }

  //Alert Function for invalid last name pattern
  if (submitValue) {
    if (Lname.value.length === 0) {
      alert("Last name cannot be empty");
      Lname.focus();
      submitValue = false;
    }
  }

  if (submitValue) {
    if (Lname.value.length < 3) {
      alert("Last name must contain minimum 3 characters");
      Lname.focus();
      submitValue = false;
    }
  }

  if (submitValue) {
    if (!Lname.value.match(/^[a-zA-Z\s]*$/)) {
      alert("Last name must contain only alphabets A-Z");
      Lname.focus();
      submitValue = false;
    }
  }

  //Alert Function for invalid age pattern
  if (submitValue) {
    if (Age.value.length === 0) {
      alert("Age cannot be empty");
      Age.focus();
      submitValue = false;
    }
  }

  if (submitValue) {
    if (Number(Age.value) > 120) {
      alert("Age cannot be greater than 120");
      Age.focus();
      submitValue = false;
    }
  }

  if (submitValue) {
    if (Age.value == 0) {
      alert("Age cannot be 0");
      Age.focus();
      submitValue = false;
    }
  }

  //Alert Function for invalid phone pattern
  if (submitValue) {
    if (Phone.value.length === 0) {
      alert("Phone cannot be empty");
      Phone.focus();
      submitValue = false;
    }
  }

  if (submitValue) {
    if (Phone.value.length < 10) {
      alert("Phone cannot be less than 10 digits");
      Phone.focus();
      submitValue = false;
    }
  }

  //Alert Function for gender
  if (submitValue) {
    if (Gender.value == "") {
      alert("Please enter gender");
      submitValue = false;
    }
  }

  //Alert Function for date
  if (submitValue) {
    if (Dates.value == "") {
      alert("Please enter date");
      Dates.focus();
      submitValue = false;
    }
  }

  //Alert Function for time
  if (submitValue) {
    if (Time.value == "") {
      alert("Please enter time");
      Time.focus();
      submitValue = false;
    }
  }

  //Alert Function for city
  if (submitValue) {
    if (City.value == "") {
      alert("Please enter city");
      City.focus();
      submitValue = false;
    }
  }

  //Alert Function for city
  if (submitValue) {
    if (Area.value == "") {
      alert("Please enter area");
      Area.focus();
      submitValue = false;
    }
  }

  //Alert Function for vaccination
  if (submitValue) {
    if (Vacc.value == "") {
      alert("Please enter vaccination status");
      submitValue = false;
    }
  }

  //Alert Function for Symptoms
  if (submitValue) {
    if (Symptoms.value == "") {
      alert("Please enter Symptoms");
      submitValue = false;
    }
  }

  //Alert Function for Symptoms
  if (submitValue) {
    if (Addinfo.value == "") {
      alert("Please enter additional info");
      submitValue = false;
    }
  }

  //Function to submitting form with enetered data
  if (submitValue) {
    update(FormData, id);
  }

  // returning false to prevent page from loading on form submission
  return false;
}
