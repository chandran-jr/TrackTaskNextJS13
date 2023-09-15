import ToDoItem from "@/components/ToDoItem";
import { prisma } from "@/db";
import Link from "next/link";

function getTodos() {
  return prisma.todo.findMany()
}

async function toggleTodo(id: string, complete: boolean) {
  "use server"
  await prisma.todo.update({ where: {id}, data: {complete}})

}

export default async function Home() {

  const todos = await getTodos()
  // await prisma.todo.create({data: {title: "Buy Milk", complete: false}})

  return (
  <>
    <header className="flex justify-between items-center mb-4">
      <h1 className="text-3xl">TrackTask</h1>
      <Link className="border border-white px-2 py-1 rounded hover:bg-teal-700 transition ease-in-out " href="/new">New Task</Link>
    </header>

    <ul className="pl-4">
      {todos.map((item: any) => (
        <ToDoItem key={item.id} {...item} toggleTodo={toggleTodo}>{item.title}</ToDoItem>
      ))}
    </ul>
    
  </>
  )
}