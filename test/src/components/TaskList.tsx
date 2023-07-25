import { useEffect } from "react"
import TaskItemDto from "../Dtos/TaskItemDto"
import EditForm from "./EditForm"
import TaskCard from "./TaskCard"

interface TaskListProps {
	list: TaskItemDto[]
	deleteTaskItem: (id: String) => void
	updateTaskItem: (updatedItem: TaskItemDto) => void
	toggleEditable: (id: String) => void
}

export default function TaskList({ list, deleteTaskItem, updateTaskItem, toggleEditable }: TaskListProps) {
	return (
        <>
			{list.map((item, index) =>
				item.editable 
                ? <EditForm item={item} index={index} updateTaskItem={updateTaskItem} />
				: <TaskCard item={item} index={index} deleteTaskItem={deleteTaskItem} toggleEditable={toggleEditable} />
			)}
		</>
	)
}
