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
   document.getElementById("textInput");
   remove()
}

function remove() {
   const lis = document.querySelectorAll('li');
   for(let li of lis) {
   li.addEventListener('click', (event) => {
      li.remove();
      move(li.innerText);
   });
   }
}

remove();

function move (completedItem) {
   let li = document.createElement("li");
   completedItem = document.createTextNode(completedItem);
   li.appendChild(completedItem);
   document.getElementById("completedList").appendChild(li);
   }

// function move(li) {
//    const todo = li;
//    const complete = document.getElementById('completedList');
//    // const element = todo.firstElementChild;
//    if(li)
//       complete.appendChild(li);
// }

// function move() {
//    let li = document.createElement("li");
//    let textInput = document.getElementById("text").value
//    let todoItem = document.createTextNode(textInput);
//    li.appendChild(todoItem);
//    if (textInput === '') {
//       alert("You must write something!");
//    } else {
//       document.getElementById('todoList').appendChild(li);
//    }
//    document.getElementById("textInput").value;
// }

function clearInput() {
   document.getElementById("text").reset();
}

