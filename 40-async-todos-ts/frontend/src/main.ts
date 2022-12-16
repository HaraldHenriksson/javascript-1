import 'bootstrap/dist/css/bootstrap.css'
import './style.css'
import { createTodo, fetchTodos } from './api'
import { Itodo } from './interface'

let todos: Itodo[] = []

const getTodos = async () => {

  todos = await fetchTodos()

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

const updateTodo = async (todoId: number, data: object) => {
  const res = await fetch(`http://localhost:3001/todos/${todoId}`, {//added todoID.id
      method: 'PATCH',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(data),
  })
 if (!res.ok) {
  throw new Error(`Could not update todos, reason: ${res.status}${res.statusText}`)
 } 
  return await res.json()
}

document.querySelector('#todos')?.addEventListener('click', async (e) => {
  e.preventDefault

    const target = e.target as HTMLUListElement

    if(target.tagName === "LI") {
      const todoId: number = Number(target.dataset.setId)

      const foundTodo: any = todos.find( (todo) => {
        console.log(todo.id)
        return todo.id === todoId
      })

      await updateTodo(foundTodo.id as number,{completed: !foundTodo.completed})
     // console.log(foundTodo)
      

      
    }
})

document.querySelector('#new-todo-form')?.addEventListener('submit', async e => {
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

 await createTodo(newTodo)

  getTodos()
})

getTodos()