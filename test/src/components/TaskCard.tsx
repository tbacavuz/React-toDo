import moment from "moment"
import TaskItemDto from "../Dtos/TaskItemDto"

interface TaskCardProps {
	item: TaskItemDto
	index: number
	deleteTaskItem: (id: String) => void
	toggleEditable: (id: String) => void
}

export default function TaskCard({ item, index, deleteTaskItem, toggleEditable }: TaskCardProps) {
	return (
		<div key={index} className='task-card'>
			<span>{item.id}</span>
			<div className='task-body'>
				<h4 className='title'>{item.title}</h4>
				<p className='description'>{item.description}</p>
			</div>
			<div className='task-footer'>
				<p>Due: {moment(item.due).format("DD-MM-YYYY")}</p>
				<div className='buttons'>
					<button className='edit-btn' onClick={() => toggleEditable(item.id)}>
						Edit
					</button>
					<button className='delete-btn' onClick={() => deleteTaskItem(item.id)}>
						Delete
					</button>
				</div>
			</div>
		</div>
	)
}
