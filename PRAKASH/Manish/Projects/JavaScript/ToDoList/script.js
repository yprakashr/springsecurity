var text_input = document.getElementById("input");
var submitBtn = document.getElementById("addNote");
var toDoList = document.getElementById("toDoList");

console.log(toDoList.childElementCount);
if (toDoList.childElementCount < 1) {
  toDoList.style.border = "none";
} else {
  toDoList.style.border = "2px solid cornflowerblue";
}

// setting onclick event for add button
submitBtn.setAttribute("onclick", "addList()");

// initilaizing count of list and button values to 1
var listCount = 0;
var delCount = 0;

// function to add list items
function addList() {
  console.log(toDoList.childElementCount);
  if (toDoList.childElementCount === 0) {
    toDoList.style.border = "none";
  } else {
    toDoList.style.border = "2px solid cornflowerblue";
  }

  toDoList.innerHTML += `<div style="padding: 10px;" id="li${listCount}">${listCount}. ${text_input.value} <button id="done-btn" style="
  background-color: cornflowerblue;
  border: none;
  padding: 10px;
  border-radius: 10px;
  font-size: 15px;
  margin-left:20px;
  color:white;
" id="del${delCount}" onclick="delList(this.id)">Done</button><br><br><hr></div>`;
  text_input.value = "";
  listCount++;
  delCount++;
}

// function to delete list items
function delList(test) {
  document.getElementById(test).parentElement.remove();
}
