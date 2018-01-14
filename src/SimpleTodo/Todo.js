import React from 'react';

import { List, Button, Icon, Popup, Select } from 'semantic-ui-react';

const Todo = ({index, todo, edit, remove, editing}) => {
	return (
		<List.Item
			className="todo-container"
			key={index}
		>
			<span className="todo-number">
				{`${index + 1}.`}
			</span>

			<span>
				{todo}
			</span>
		
			<div className="todo-buttons">
				<Popup
					trigger={
						<Button
							primary
							disabled={editing}
							onClick={() => edit(index)}
							icon="edit"
							title="asdf"
						/>
					}
					content="Edit"
				/>
				
				<Popup
					trigger={
						<Button
							secondary
							disabled={editing}
							onClick={() => remove(index)}
							icon="trash outline"
						/>
					}
					content="Remove"
				/>
			</div>
		</List.Item>
	);
};

export default Todo;