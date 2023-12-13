//Multiple coloumns filtering
function myFunction() {
    let mytable=document.getElementById("ass10-table");
    let trow=mytable.getElementsByTagName("tr");
    var filter=document.getElementById("Search");

 for(var i=0;i<trow.length;i++){
  
    let td=trow[i].getElementsByTagName("td");
    for(var j=0;j<td.length;j++){


    if(td[j]){
    let textvalue=td[j].textContent || td[j].innerHTML;
    if(textvalue.toUpperCase().indexOf(filter.value.toUpperCase())>-1){
        trow[i].style.display="";
break;
      }else{
        trow[i].style.display='none';
    }}}}}
  

//**********************************single column filtering************************************
// function myFunction() {
//   let mytable=document.getElementById("ass10-table");
//   let trow=mytable.getElementsByTagName("tr");
//   var filter=document.getElementById("Search");

// for(var i=0;i<trow.length;i++){

//   let td=trow[i].getElementsByTagName("td")[0];

//   if(td){
//   let textvalue=td.textContent || td.innerHTML;
//   if(textvalue.toUpperCase().indexOf(filter.value.toUpperCase())>-1){
//       trow[i].style.display="";
//     }else{
//       trow[i].style.display='none';
//   }}}}

// **************************************double column filtering**************************************
// function myFunction() {
//   let mytable=document.getElementById("ass10-table");
//   let trow=mytable.getElementsByTagName("tr");
//   var filter=document.getElementById("Search");

// for(var i=0;i<trow.length;i++){

//   let td=trow[i].getElementsByTagName("td")[0];
//   let td1=trow[i].getElementsByTagName("td")[2];

//   if(td || td1){
//   let textvalue=td.textContent || td.innerHTML;
//   let textvalue1=td1.textContent || td1.innerHTML;
  
//   if(textvalue.toUpperCase().indexOf(filter.value.toUpperCase())>-1 || textvalue1.toUpperCase().indexOf(filter.value.toUpperCase())>-1){
//       trow[i].style.display="";
//     }else{
//       trow[i].style.display='none';
//   }}}}

  // ------------------FUNCTION TO SORT TABLE FOR STRING TYPE----------------------
  function sortTable(column) {
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("ass10-table");
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
        if (x.innerHTML > y.innerHTML) {
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
    function sortTabl(column) {
      var table, rows, switching, i, x, y, shouldSwitch;
      table = document.getElementById("ass10-table");
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
































