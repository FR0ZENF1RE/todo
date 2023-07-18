function add() {
   let li = document.createElement("li");
   let textInput = document.getElementById("text").value
   let todoItem = document.createTextNode(textInput);
   li.appendChild(todoItem);
   if (textInput === '') {
      alert("You must write something!");
   } else {
      document.getElementById('todoList').appendChild(li);
   }
   document.getElementById("textInput").value = "";
}

// const appendCompleted = document.getElementById('todoList');
// todoList.addEventListener('click', (event) => {
//    event.target.appendChild("#completedList")
// });

const todoList = document.getElementById('todoList');
todoList.addEventListener('click', (event) => {
   event.target.remove();
});


function move() {
   let li = document.createElement("li");
   let textInput = document.getElementById("text").value
   let todoItem = document.createTextNode(textInput);
   li.appendChild(todoItem);
   if (textInput === '') {
      alert("You must write something!");
   } else {
      document.getElementById('todoList').appendChild(li);
   }
   document.getElementById("textInput").value = "";
}


function clearInput() {
   document.getElementById("text").reset();
}

