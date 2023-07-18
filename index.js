function add () {
     let li = document.createElement("li");
     let textInput = document.getElementById("text").value
     let todoItem = document.createTextNode(textInput);
     li.appendChild(todoItem);
     if (textInput === '' ) {
        alert("You must write something!");
     }else{
        document.getElementById('todoList').appendChild(li);
     }
     document.getElementById("textInput").value = "";
     }

     const todoList = document.querySelector('ul');
  todoList.addEventListener('click', (event) => {
            event.target.remove(); 
         });