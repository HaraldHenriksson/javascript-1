
// get references to DOM elements
const todosEl = document.querySelector('#todos');
const newTodoFormEl = document.querySelector('#new-todo-form');

// list of todos
let todos = [];

const createNewTodo = async (newTodo) => {
	const res = await fetch('http://localhost:3001/todos', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(newTodo),
	});

	// Check that everything went ok
	if (!res.ok) {
		if (!res.ok) {
			throw new Error(`Could not create todo, reason: ${res.status} ${res.statusText}`);
		}
	
		return await res.json();
	}
	const data = await res.json();
	console.log("The response data was:", data);
}

/**
 * Fetches todos from server.
 */
const fetchTodos = async () => {
	const res = await fetch('http://localhost:3001/todos');
	if (!res.ok) {
		throw new Error(`Could not fetch todos, reason: ${res.status} ${res.statusText}`);
	}

	return await res.json();
}

const getTodos = async () => {
	// Fetch todos from server
	const data = await fetchTodos();

	// Set `todos` array to the data we got from the server
	todos = data;

	// Render the todos
	renderTodos();
}

// Render todos to DOM
const renderTodos = () => {
	console.log("rendering todos...");

	const lis = todos.map(todo => {
		let cssClasses = "list-group-item";

		if (todo.completed) {
			cssClasses += " completed";   // "list-group-item completed"
		}

		return `
			<li class="${cssClasses}" data-todo-id="${todo.id}">
				${todo.title}
			</li>
		`;
	});

	todosEl.innerHTML = lis.join('');
}



const updateNewTodo = async (todoId, data) => {
	const res = await fetch(`http://localhost:3001/todos/${todoId}`, {
		method: 'PATCH',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(data),
	});

	// Check that everything went ok
	if (!res.ok) {
		if (!res.ok) {
			throw new Error(`Could not create todo, reason: ${res.status} ${res.statusText}`);
		}
	
		return await res.json();
	}
	const data = await res.json();
	console.log("The response data was:", data);
}


todosEl.addEventListener('click', async (e) => {
	
	if (e.target.tagName === "LI") {
		
		const clickedTodoId = e.target.dataset.todoId;     

		const clickedTodo = todos.find( (todo) => {
			return todo.id == clickedTodoId;
		} );
		console.log("found clicked todo", clickedTodo);

		await updateNewTodo(clickedTodo.id, {
			completed: !clickedTodo.completed
		})
		console.log("toggling todo completed");

		getTodos();
	}
});

// Create a new todo when form is submitted
newTodoFormEl.addEventListener('submit', async (e) => {
	// Prevent form from being submitted (to the server)
	e.preventDefault();

	// Create new todo
	const newTodo = {
		title: newTodoFormEl.newTodo.value,
		completed: false,
	}

	try {
		await createNewTodo(newTodo);
	} catch (e) {
		console.log(e);
	}


	// Get the new list of todos from the server
	getTodos();

	// Reset form
	newTodoFormEl.reset();
});

// Get and render todos
getTodos();
