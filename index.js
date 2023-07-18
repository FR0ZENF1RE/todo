
document.getElementById('addItem').onclick = function() {
    let newItem = prompt('Please Enter Your New To Do Item!');
    document.getElementById('todoList').innerText = newItem;
}