import moment from "moment"
import TaskItemDto from "../Dtos/TaskItemDto"
import "./TaskCard.css"

interface TaskCardProps {
	item: TaskItemDto
	index: number
	deleteTaskItem: (id: String) => void
	toggleEditable: (id: String) => void
}

export default function TaskCard({ item, index, deleteTaskItem, toggleEditable }: TaskCardProps) {
	return (
		<div key={index} className='task-card'>
			<div className='task-body'>
				<h4 className='title'>{item.title}</h4>
				<p>{item.description}</p>
			</div>
			<div className='task-footer'>
				<p>Due: {moment(item.due).format("DD-MM-YYYY")}</p>
				<div className='buttons'>
					<button onClick={() => toggleEditable(item.id)}>Edit</button>
					<button onClick={() => deleteTaskItem(item.id)}>Delete</button>
				</div>
			</div>
		</div>
	)
}
