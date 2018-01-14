import React from 'react';

import { List } from 'semantic-ui-react';
import Todo from './Todo';

const TodoList = ({todos, edit, remove, editing}) => {
	const todoList = todos.map((todo, index) => {
		return (
			<Todo
				key={index}
				index={index}
				todo={todo}
				edit={edit}
				remove={remove}
				editing={editing}
			/>
		);
	});

	return (
		<List divided className="todoList-container">
			{todoList}
		</List>
	);
};

export default TodoList;