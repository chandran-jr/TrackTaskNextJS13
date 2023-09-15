"use client"
interface ToDoProps {
    id: string;
    title: string;
    complete: boolean;
    toggleTodo: (id: string, complete: boolean) => void;
}

export default function ToDoItem({id, title, complete, toggleTodo}: ToDoProps) {
    return (
        <li className="flex gap-1 items-center">
            <input id={id} type="checkbox" className="cursor-pointer peer transition ease-in-out" defaultChecked={complete} onChange={e => toggleTodo(id, e.target.checked)}/>
            <label htmlFor={id} className="peer-checked:line-through text-teal-200 cursor-pointer text-xl peer-checked:text-teal-400">{title}</label>
        </li>
    )
}