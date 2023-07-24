import { useEffect, useState } from "react"
import TaskItemDto from "../Dtos/TaskItemDto"
import moment from "moment"

interface TaskFormProps {
	AddTaskItem: (newItem: TaskItemDto) => any
}

export default function TaskForm({ AddTaskItem }: TaskFormProps) {
	let now = new Date()
	const [newTaskItem, setNewTaskItem] = useState<TaskItemDto>({
		id: "",
		title: "",
		description: "",
		due: new Date(moment().format("MMM DD, YYYY")),
		editable: false,
	})

	useEffect(() => {
		console.log("newTaskItem", newTaskItem)
	}, [newTaskItem])

	function handleClick() {
		AddTaskItem(newTaskItem)
		setNewTaskItem({
			id: "",
			title: "",
			description: "",
			due: new Date(),
			editable: false,
		})
	}

	return (
		<div className='task-card new'>
			<div className='task-body'>
				<textarea
					rows={8}
					cols={10}
					placeholder='Add a title...'
					defaultValue={""}
					maxLength={50}
					required
					onChange={(e: any) => setNewTaskItem({ ...newTaskItem, title: e.target.value })}
				></textarea>
				<textarea
					rows={8}
					cols={10}
					placeholder='Add a description...'
					defaultValue={""}
					maxLength={200}
					required
					onChange={(e: any) => setNewTaskItem({ ...newTaskItem, description: e.target.value })}
				></textarea>
				<div className='task-footer-editable'>
					<input
						type='date'
						value={moment(newTaskItem.due).format("YYYY-MM-DD")}
						min={now.toJSON().slice(0, 10)}
						required
						onChange={(e: any) => setNewTaskItem({ ...newTaskItem, due: e.target.value })}
					/>
					<button className='save' onClick={() => handleClick()}>
						Create
					</button>
				</div>
			</div>
		</div>
	)
}
