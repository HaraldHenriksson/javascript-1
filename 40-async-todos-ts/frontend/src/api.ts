import { Itodo } from "./interface"

export const createTodo = async (newTodo: Itodo) => {
    const res = await fetch('http://localhost:3001/todos', {
      method: 'POST', 
      headers: {
        'content-Type': 'application/json',
      },
      body: JSON.stringify(newTodo),
    })

    if (!res.ok) {
      throw new Error(`${res.status} ${res.statusText}`)
    }
  
   return await res.json() as Itodo
}

export const fetchTodos = async () => {
  const res = await fetch('http://localhost:3001/todos')
  if (!res.ok) {
    throw new Error(`${res.status} ${res.statusText}`)
  }

 return await res.json() as Itodo[]
}