import { useState } from "react"
import "./App.css"
import TaskList from "./components/TaskList"
import TaskItemDto from "./Dtos/TaskItemDto"
import TaskForm from "./components/TaskForm"
import { nanoid } from "nanoid"

export default function App() {
	const [list, setList] = useState<TaskItemDto[]>([])

	function AddTaskItem(newItem: TaskItemDto) {
		newItem.id = nanoid()
		setList((current) => [...current, newItem])
	}

	function deleteTaskItem(id: String) {
		setList((current) => current.filter((item) => item.id !== id))
	}

	function updateTaskItem(updatedItem: TaskItemDto) {
		setList((current) => {
			return current.map((item) => {
				if (item.id === updatedItem.id) {
					updatedItem.editable = false
					return updatedItem
				}
				return item
			})
		})
	}

	function toggleEditable(id: String) {
		setList((current) => {
			return current.map((item) => {
				if (item.id === id) return { ...item, editable: !item.editable }
				return item
			})
		})
	}

	return (
		<>
			<h1>To-Do App</h1>
			<div className='cards'>
				<TaskList list={list} deleteTaskItem={deleteTaskItem} updateTaskItem={updateTaskItem} toggleEditable={toggleEditable} />
				<TaskForm AddTaskItem={AddTaskItem} />
			</div>
		</>
	)
}
