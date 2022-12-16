import 'bootstrap/dist/css/bootstrap.css'
import './style.css'


const todosList = document.querySelector('#todos')!
const newTodoForm = document.querySelector('#new-todo-form')!

type Todo = {
  id: number,
  title: string,
  completed: boolean,
}

const json = localStorage.getItem('todos') ?? '[]';

const todos: Todo[] = JSON.parse(json)

const renderTodos = () => {
  todosList.innerHTML = '';

 // const listitems = todos.map(todo => `<li class="list-group-item">${todo}</li>`)

 // const output = todos.map(todo => `<li class="list-group-item">${todo}</li>`).join('');

 //CLEAN SHORT WAY
  todosList.innerHTML = todos
      .map(todo => 
          `<li class="list-group-item ${todo.completed ? 'completed': ''}" data-todo-id="${todo.id}">
                ${todo.title}
            </li>`
            )
            .join('');
}

const saveTodos = () => {

  const json = JSON.stringify(todos)

  localStorage.setItem('todos', json)
}

newTodoForm.addEventListener('submit', e => {
e.preventDefault()

const newTodoTitle = document.querySelector<HTMLInputElement>('#new-todo-title')?.value || '';
if (newTodoTitle.length < 3) {
  alert("Too short todo");
  return
}

const todoIds = todos.map(todo => todo.id)
const maxId = Math.max(0, ...todoIds)

const newTodo: Todo = {
  id: maxId +1,
  title: newTodoTitle,
  completed: false,
 }
 todos.push(newTodo)

 saveTodos();

document.querySelector<HTMLInputElement>('#new-todo-title')!.value = '';

renderTodos();
})

todosList.addEventListener('click', e => {
  const target = (e.target as HTMLElement)

  if (target.tagName === "LI") {
    const todoId = Number(target.dataset.todoId)

   const foundTodo = todos.find(todo => todo.id === todoId)

    if (foundTodo) {
      foundTodo.completed = !foundTodo.completed

      saveTodos();
    }

    renderTodos();
  }
})

renderTodos();