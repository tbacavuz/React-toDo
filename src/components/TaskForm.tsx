import { useState } from "react"
import TaskItemDto from "../Dtos/TaskItemDto"
import moment from "moment"

interface TaskFormProps {
	AddTaskItem: (newItem: TaskItemDto) => any
}

export default function TaskForm({ AddTaskItem }: TaskFormProps) {
	let now = new Date()
	const emptyTaskItem: TaskItemDto = {
		id: "",
		title: "",
		description: "",
		due: new Date(moment().format("MMM DD, YYYY")),
		editable: false,
	}
	const [newTaskItem, setNewTaskItem] = useState<TaskItemDto>(emptyTaskItem)

	function handleClick() {
		if (newTaskItem.title === "" || newTaskItem.description === "") {
			alert("Missing data")
			return
		}
		AddTaskItem(newTaskItem)
		setNewTaskItem(emptyTaskItem)
	}

	return (
		<div className='task-card new'>
			<div className='task-body'>
				<textarea
					rows={1}
					cols={10}
					placeholder='Add a title...'
					defaultValue={""}
					value={newTaskItem.title}
					maxLength={20}
					required
					className='title'
					onChange={(e: any) => setNewTaskItem({ ...newTaskItem, title: e.target.value })}
				></textarea>
				<textarea
					rows={8}
					cols={10}
					placeholder='Add a description...'
					defaultValue={""}
					value={newTaskItem.description}
					maxLength={150}
					required
					onChange={(e: any) => setNewTaskItem({ ...newTaskItem, description: e.target.value })}
				></textarea>
			</div>
			<div className='task-footer'>
				<input
					type='date'
					value={moment(newTaskItem.due).format("YYYY-MM-DD")}
					min={now.toJSON().slice(0, 10)}
					required
					onChange={(e: any) => setNewTaskItem({ ...newTaskItem, due: e.target.value })}
				/>
				<button onClick={() => handleClick()}>Create</button>
			</div>
		</div>
	)
}
