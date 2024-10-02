import { element } from "prop-types";
import React, { useState } from "react";

function ToDoList() {
	const [tasks, setTasks] = useState(["eat breackFast", "Sleep"]);
	const [newTask, setNewTask] = useState("");

	function handleInputChange(event) {
		setNewTask(event.target.value);
	}

	function addTask() {
		if (newTask.trim() !== "") {
			setTasks((t) => [...t, newTask]);
			setNewTask("");
		}
	}

	function deleteTask(index) {
		const updateTask = tasks.filter((_, i) => i !== index);
		setTasks(updateTask);
	}
	function moveTaskUp(index) {
		if (index > 0) {
			const updateTask = [...tasks];
			[updateTask[index], updateTask[index - 1]] = [
				updateTask[index - 1],
				updateTask[index],
			];
			setTasks(updateTask);
		}
	}

	function moveTaskDown(index) {
		const updateTask = [...tasks];
			if (index < updateTask.length - 1) {
				[updateTask[index], updateTask[index + 1]] = [
					updateTask[index + 1],
					updateTask[index],
				];
				setTasks(updateTask);
			}
	}

	return (
		<div className="to-do-list">
			<h1>To Do List</h1>
			<div>
				<input
					type="text"
					placeholder="enter a task..."
					value={newTask}
					onChange={handleInputChange}
				/>
				<button className="add-button" onClick={addTask}>
					Add Task
				</button>
			</div>

			<ul>
				{tasks.map((task, index) => (
					<li key={index}>
						<span className="text">{task}</span>
						<button className="delete-button" onClick={() => deleteTask(index)}>
							Delete Task
						</button>
						<button
							className="move-button-up"
							onClick={() => moveTaskUp(index)}
						>
							Move Task Up
						</button>
						<button
							className="move-button-down"
							onClick={() => moveTaskDown(index)}
						>
							Move Task Down
						</button>
					</li>
				))}
			</ul>
		</div>
	);
}

export default ToDoList;
