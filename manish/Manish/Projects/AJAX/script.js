var tbody = document.getElementById("tbody");

var xhr = new XMLHttpRequest();
xhr.open("GET", "http://192.168.0.225:8081/AllAppointments", true);
xhr.send(null);
xhr.onreadystatechange = function () {
  if (xhr.readyState == XMLHttpRequest.DONE) {
    var data = JSON.parse(xhr.responseText);
    var tab = "";
    if (this.readyState == 4 && this.status == 200) {
      for (var i = 0; i < data.length; i++) {
        tab = `<tr>
              <td>${data[i].id}</td>
              <td>${data[i].firstname}</td>
              <td>${data[i].lastname}</td>
              <td>${data[i].gender}</td>
              <td>${data[i].age}</td>
            </tr>`;

        tbody.innerHTML += tab;
      }
    }
  }
};
