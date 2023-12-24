const todoText = document.getElementById('todo-text');
const addBtn = document.getElementById('addBtn');
const todoList = document.getElementById('todo-list')
const numberOfTodos = document.getElementById('number-of-todos');

let todos = []


numberOfTodos.textContent = Number(todos.length);



function setNumberOfTodos()
{
    numberOfTodos.textContent = String(todos.length)
}

function showTodos()
{
    todoList.innerHTML = ''

    todos.map(todo =>
    {
        const newTodo = document.createElement('div')
        newTodo.className = "todo"
        const newTodoText = document.createElement('p')
        newTodoText.textContent = todo
        newTodoText.className = "todoText"
        const delButton = document.createElement('button')
        delButton.className = "delBtn"
        delButton.textContent = "X"




        delButton.onclick = () =>
        {
            const elementToBeDeleted = todos.indexOf(todo)
            todos.splice(elementToBeDeleted, 1)
            setNumberOfTodos()
            showTodos()
        }
        newTodo.append(newTodoText, delButton)
        todoList.append(newTodo)
    })
}




addBtn.onclick = (e) =>
{
    if (todoText.value != "")
    {

        todos.push(todoText.value)
        todoText.value = ""
        showTodos()
        setNumberOfTodos()
        e.preventDefault()
    }
}



window.onpageshow = () =>
{
    showTodos()
}
