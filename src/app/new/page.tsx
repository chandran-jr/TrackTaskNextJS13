import { prisma } from "@/db";
import { redirect } from "next/navigation";
import Link from "next/link";

export default function Page() {

    async function createTask (data: FormData) {
        "use server"
        const title = data.get("title")?.valueOf()
        if(typeof title !== "string" || title.length === 0) {
            throw new Error("Invalid title")
        }

        await prisma.todo.create({ data: { title: title, complete: false }})
        redirect("/")
    }

    return (
        <>
    <header className="flex justify-between items-center mb-4">
     <Link href="/"><h1 className="text-3xl">TrackTask</h1></Link> 
    </header>
    <form action={createTask} className="flex gap-2">
        <input placeholder="Enter Task Name" type="text" className=" w-screen border border-slate-300 bg-transparent rounded px-2 py-1 outline-none focus-within:border-white" name="title" />
    </form>
    <div className="mt-5 flex justify-center">
        <Link className="border border-white px-2 py-1 rounded hover:bg-teal-700 transition ease-in-out mr-5" href="/">Cancel</Link>
        <button type="submit" className="border border-white px-2 py-1 rounded hover:bg-teal-700 transition ease-in-out">Submit</button>
    </div>
  </>
    )
    
}