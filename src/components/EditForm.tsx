import { useState } from "react"
import TaskItemDto from "../Dtos/TaskItemDto"
import moment from "moment"

interface EditFormProps {
	item: TaskItemDto
	index: number
	updateTaskItem: (updatedItem: TaskItemDto) => void
}
export default function EditForm({ item, index, updateTaskItem }: EditFormProps) {
	const [editItem, setEditItem] = useState<TaskItemDto>(item)
	let now = new Date()

	return (
		<div key={index} className='task-card'>
			<div className='task-body'>
				<textarea
					rows={1}
					cols={10}
					placeholder='Add a title...'
					defaultValue={item.title}
					maxLength={20}
					required
					className='title'
					onChange={(e: any) => setEditItem({ ...editItem, title: e.target.value })}
				></textarea>
				<textarea
					rows={8}
					cols={10}
					placeholder='Add a description...'
					defaultValue={item.description}
					maxLength={150}
					required
					onChange={(e: any) => setEditItem({ ...editItem, description: e.target.value })}
				></textarea>
			</div>
			<div className='task-footer'>
				<input
					type='date'
					value={moment(editItem.due).format("YYYY-MM-DD")}
					defaultValue={moment(editItem.due).format("DD-MM-YYYY")}
					min={now.toJSON().slice(0, 10)}
					required
					onChange={(e: any) => setEditItem({ ...editItem, due: e.target.value })}
				/>
				<button onClick={() => updateTaskItem(editItem)}>Save</button>
			</div>
		</div>
	)
}
