import React, { useState } from 'react'

const App = (props) => {
	const [ todos, changeTodos ] = useState([])
	const [ newTodo, setNewTodo ] = useState('')

	const addTodo = (e) => {
		const toAdd = {
			task: newTodo,
			finished: false
		}
		e.preventDefault()
		setNewTodo('')
		changeTodos([ ...todos, toAdd ])
	}

	const changeFinished = (e) => {
		const newState = todos.map((todo) => {
			if (todo.task === e.target.value) {
				const bool = todo.finished
				console.log('found the right one')
				return { ...todo, finished: !bool }
			}
			return todo
		})
		console.log(newState)
		changeTodos(newState)
	}

	return (
		<div>
			<h1>Hello World!</h1>
			<div className="container">
				<form onSubmit={addTodo}>
					<div className="control">
						<input
							className="input"
							type="text"
							placeholder="Text input"
							value={newTodo}
							onChange={(e) => {
								setNewTodo(e.target.value)
							}}
						/>
					</div>
					<div className="control">
						<button className="button is-primary">Submit</button>
					</div>
				</form>

				<div>
					<ul>
						{todos.map((todo) => (
							<li key={todo.task}>
								<button
									className="tiny button is-info"
									value={todo.task}
									onClick={changeFinished}
								>
									Mark as done
								</button>
								<p>{todo.task}</p>
								<strong>Finished:</strong>
								{todo.finished + ''}
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	)
}

export default App
