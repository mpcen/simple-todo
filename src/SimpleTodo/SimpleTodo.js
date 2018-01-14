import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import './style.css';

import { Input, Button } from 'semantic-ui-react';
import TodoList from './TodoList';

class SimpleTodo extends Component {
	constructor(props) {
		super(props);

		this.state = {
			text: '',
			todos: [
				'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
				'Aliquam tincidunt mauris eu risus.',
				'Vestibulum auctor dapibus neque.',
				'Nunc dignissim risus id metus.'
			]
		}

		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleRemove = this.handleRemove.bind(this);
		this.handleEdit = this.handleEdit.bind(this);
	}

	handleInputChange(event) {
		this.setState({
			text: event.target.value
		});
	}

	handleEdit(index) {
		let nodeToEdit = this.state.todos.find((todo, todoIndex) => {
			return index === todoIndex;
		});

		let filteredNodes = this.state.todos.filter((todo, todoIndex) => {
			return todoIndex !== index;
		});

		this.setState({
			text: nodeToEdit,
			todos: filteredNodes,
			editing: true
		});
	}

	handleRemove(index) {
		let filteredTodos = this.state.todos.filter((todo, todoIndex) => {
			return index !== todoIndex;
		});

		this.setState({
			todos: filteredTodos
		});
	}

	handleSubmit(event) {
		event.preventDefault();

		if(!this.state.text) {
			return this.setState({
				error: true
			});
		}

		this.setState({
			todos: [...this.state.todos, this.state.text],
			text: '',
			editing: false,
			error: false
		});
	}

	render() {		
		return (
			<div>
				<h1>Simple To Do</h1>

				<div>
					<form className="form-container" onSubmit={this.handleSubmit}>
						<Input
							type="text"
							error={this.state.error}
							placeholder={`Try "Write a book"`}
							value={this.state.text}
							onChange={this.handleInputChange}
						/>

						<Button type="submit">
							Add
						</Button>
					</form>

					<TodoList
						todos={this.state.todos}
						edit={this.handleEdit}
						remove={this.handleRemove}
						editing={this.state.editing}
					/>
				</div>
			</div>
		);
	}
};

export default SimpleTodo;