// function to edit data
function editData(id) {
  // getting the table row of desired data to edit
  var tRow = document.getElementById(`r${id}`);

  // changing the table data inner html to Input feilds on click with ID
  tRow.innerHTML = `<td>${id}</td>
  <td><input type="text" name="" class="edit-input" id="fname${id}" placeholder="" /></td>
  <td><input type="text" name="" class="edit-input" id="lname${id}" placeholder="" /></td>
  <td><input type="text" name="" class="edit-input" id="age${id}" placeholder="" /></td>
  <td><input type="text" name="" class="edit-input" id="phone${id}" placeholder="" /></td>
  <td><input type="text" name="" class="edit-input" id="gender${id}" placeholder="" /></td>
  <td><input type="text" name="" class="edit-input" id="date${id}" placeholder="" /></td>
  <td><input type="text" name="" class="edit-input" id="time${id}" placeholder="" /></td>
  <td><input type="text" name="" class="edit-input" id="city${id}" placeholder="" /></td>
  <td><input type="text" name="" class="edit-input" id="area${id}" placeholder="" /></td>
  <td><input type="text" name="" class="edit-input" id="vacc${id}" placeholder="" /></td>
  <td><input type="text" name="" class="edit-input" id="symptoms${id}" placeholder="" /></td>
  <td><input type="text" name="" class="edit-input" id="info${id}" placeholder="" /></td>
  <td><button id="update-btn" onclick="return UpdateData(${id})">Update</button></td>
  <td><button id="cancel-btn" onclick="cancelAction(${id})">Cancel</button></td>`;

  // fetch API to get data by desired ID
  let promise = fetch(`http://192.168.0.227:8080/appointments/${id}`, {
    method: "GET",
  });

  promise
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      // loading the existing data into input feilds after click
      var Fname1 = document.getElementById(`fname${id}`);
      var Lname1 = document.getElementById(`lname${id}`);
      var Age1 = document.getElementById(`age${id}`);
      var Phone1 = document.getElementById(`phone${id}`);
      var Gender1 = document.getElementById(`gender${id}`);
      var Dates1 = document.getElementById(`date${id}`);
      var Time1 = document.getElementById(`time${id}`);
      var City1 = document.getElementById(`city${id}`);
      var Area1 = document.getElementById(`area${id}`);
      var Vacc1 = document.getElementById(`vacc${id}`);
      var Symptoms1 = document.getElementById(`symptoms${id}`);
      var Addinfo1 = document.getElementById(`info${id}`);
      Fname1.value = data.data.firstname;
      Lname1.value = data.data.lastname;
      Age1.value = data.data.age;
      Phone1.value = data.data.phonenumber;
      Gender1.value = data.data.gender;
      Dates1.value = data.data.date;
      Time1.value = data.data.time;
      City1.value = data.data.city;
      Area1.value = data.data.area;
      Vacc1.value = data.data.vaccination_status;
      Symptoms1.value = data.data.symptoms;
      Addinfo1.value = data.data.add_info;
    });
}
