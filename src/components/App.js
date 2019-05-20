import React, { useState } from 'react'

const App = (props) => {
	const [ todos, changeTodos ] = useState([])
	const [ newTodo, setNewTodo ] = useState('')

	const addTodo = (e) => {
		console.log(todos, 'the todos')
		const toAdd = {
			task: newTodo,
			finished: false
		}
		e.preventDefault()
		setNewTodo('')
		changeTodos([ ...todos, toAdd ])
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
			</div>
		</div>
	)
}

export default App
