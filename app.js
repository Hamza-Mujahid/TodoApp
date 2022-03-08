const tasksMaker = document.querySelector("#taskArea");

// To create items
const addTask = () => {
    let tasks = document.querySelector("#tasks")
    let taskList = document.createElement("li");

    if (tasks.value === "") {
        // alert("Enter task to add a todo")

    } else {
        // todo text 
        taskList.innerHTML = tasks.value
        tasksMaker.appendChild(taskList);
        tasks.value = ""

        // todo delete button
        let btn = document.createElement("button");
        btn.innerHTML = "Delete";
        btn.setAttribute("class", "todobtn")
        btn.setAttribute("onclick", "deleteItem(this)")
        taskList.appendChild(btn);

        let Editbtn = document.createElement("button");
        Editbtn.innerHTML = "Edit";
        Editbtn.setAttribute("class", "todobtn");
        Editbtn.setAttribute("onclick", "editThis(this)")
        taskList.appendChild(Editbtn);

    }
}

//deleting an item from list
const deleteItem = (e) => {
    e.parentNode.remove()
}
const editThis = (e) => {

    let currentVal = e.parentNode.firstChild.nodeValue;
    let editVal = prompt("Enter Upate", currentVal)
    if(editVal === ''){
        currentVal
    }else{

        const newVale = e.parentNode.firstChild.nodeValue = editVal
    }



}

// to delete all items from list
const deleteALl = () => {
    tasksMaker.innerHTML = "";
}

