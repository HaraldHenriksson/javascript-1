import 'bootstrap/dist/css/bootstrap.css'
import './style.css'

interface Itodo {
  id?: number,
  title: string,
  completed: boolean,
}

let todos: Itodo[] = []

const fetchTodos = async () => {
  const res = await fetch('http://localhost:3001/todos')
  if (!res.ok) {
    throw new Error(`${res.status} ${res.statusText}`)
  }

 //const data = await res.json() as Itodo[]

 return await res.json() as Itodo[]
}

const getTodos = async () => {

  todos = await fetchTodos()
  console.log(todos)

  renderTodos()
}

const renderTodos = () => {

  document.querySelector('#todos')!.innerHTML = todos
  .filter(todo => !todo.completed)
  .map(todo => `<li class="list-group-item">${todo.title}`)
  .join('')

  document.querySelector('#completed-todos')!.innerHTML = todos
  .filter(todo => todo.completed)
  .map(todo => `<li class="list-group-item">${todo.title}`)
  .join('')
}

document.querySelector('#new-todo-form')?.addEventListener('submit', e => {
  e.preventDefault

  const newTodoTitle = document.querySelector<HTMLInputElement>('#newTodo')?.value
  if(!newTodoTitle) {
    alert("That's not a todo")
    return
  }

  const newTodo: Itodo = {
    title: newTodoTitle,
    completed: false,
  }
  getTodos()
})

getTodos()