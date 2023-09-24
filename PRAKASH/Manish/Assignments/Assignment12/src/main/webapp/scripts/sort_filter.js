// function to filter table on search
$(document).ready(function () {
  $("#search").on("keyup", function () {
    var value = $(this).val().toLowerCase();
    $("#myTable tr").filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
    });
  });
});

// function to sort on selection of dropdown option
function func() {
  var sort = document.getElementById("sort");

  //condition to sort string type columns
  if (
    sort.value == 1 ||
    sort.value == 2 ||
    sort.value == 5 ||
    sort.value == 6 ||
    sort.value == 7 ||
    sort.value == 8 ||
    sort.value == 9 ||
    sort.value == 10 ||
    sort.value == 11 ||
    sort.value == 12
  ) {
    sortTable(sort.value);
  }

  //condition to sort number type columns
  else {
    sortTableNum(sort.value);
  }
}

// ------------------FUNCTION TO SORT TABLE FOR STRING TYPE----------------------
function sortTable(column) {
  var table, rows, switching, i, x, y, shouldSwitch;
  table = document.getElementById("myTab");
  switching = true;

  //looping till no switching has been done:
  while (switching) {
    //start by saying: no switching is done:
    switching = false;
    rows = table.rows;

    //Loop through all table rows expect <TH>
    for (i = 1; i < rows.length - 1; i++) {
      //start by saying there should be no switching:
      shouldSwitch = false;

      // comparing two subsequent rows
      x = rows[i].getElementsByTagName("TD")[column];
      y = rows[i + 1].getElementsByTagName("TD")[column];

      //check if the two rows should switch place:
      if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
        //if so, mark as a switch and break the loop:
        shouldSwitch = true;
        break;
      }
    }

    //If a switch has been marked, make the switch and mark that a switch has been done:
    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
}

// ------------------FUNCTION TO SORT TABLE FOR NUMBER TYPE----------------------
function sortTableNum(column) {
  var table, rows, switching, i, x, y, shouldSwitch;
  table = document.getElementById("myTab");
  switching = true;

  //looping till no switching has been done:
  while (switching) {
    //start by saying: no switching is done:
    switching = false;
    rows = table.rows;

    //Loop through all table rows except <H>
    for (i = 1; i < rows.length - 1; i++) {
      //start by saying there should be no switching:
      shouldSwitch = false;

      // comparing two subsequent rows
      x = rows[i].getElementsByTagName("TD")[column];
      y = rows[i + 1].getElementsByTagName("TD")[column];

      //condition to switch rows
      if (Number(x.innerHTML) > Number(y.innerHTML)) {
        //if so, mark as a switch and break the loop:
        shouldSwitch = true;
        break;
      }
    }

    //If a switch has been marked, make the switch and mark that a switch has been done:
    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
}