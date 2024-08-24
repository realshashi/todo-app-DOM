let todoList = [];

function addTodo() {
    const inputValue = document.querySelector("input").value;
    if (inputValue.trim()) {
        todoList.push({
            title: inputValue
        });
        render();
        document.querySelector("input").value = ""; 
    }
}

function deleteTodo(index) {
    todoList.splice(index, 1); 
    render();
}

function todoComponent(todo, index) {
    const div = document.createElement("div");
    const h3 = document.createElement("h3");
    const dltTodo = document.createElement("button");

    h3.innerHTML = todo.title;
    dltTodo.innerHTML = "Delete";

    dltTodo.setAttribute("onClick", `deleteTodo(${index})`); 

    div.appendChild(h3);
    div.appendChild(dltTodo);

    div.setAttribute("id", "todo-" + index);

    return div;
}

function render() {
    const mainDiv = document.querySelector("#mainDiv");
    mainDiv.innerHTML = "";
    for (let i = 0; i < todoList.length; i++) {
        const element = todoComponent(todoList[i], i); 
        mainDiv.appendChild(element);
    }
}