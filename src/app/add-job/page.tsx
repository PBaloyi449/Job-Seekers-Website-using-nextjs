import prisma from "@/lib/prima";
import {redirect} from "next/navigation";

export const metadata = {
    title: "Add Job - Career Connect"
}

async function addJob(formData: FormData){
    "use server";

    const name = formData.get("name")?.toString();
    const company = formData.get("company")?.toString();
    const location = formData.get("location")?.toString();
    const description = formData.get("description")?.toString();
    const responsibilities = formData.get("responsibilities")?.toString();
    const requirements = formData.get("requirements")?.toString();
    //const link = formData.get("apply")?.toString();
    const date = formData.get("date")?.toString();

    if (!name || !company || !location || !description|| !responsibilities || !requirements || !date ){
        throw  Error("Missing required fields");
    }

    await prisma.entry_level_Job.create({
        data: {name, company, location, description, responsibilities, requirements, date}
    })

    redirect("/");
}

export default function addJobPage(){
    return(
        <div>
            <h1 className ="mb-3 text-lg font-bold">Add Job</h1>
            <form action={addJob}>
                <input 
                required
                name="name"
                placeholder="Name"
                className="input-bordered input mb-3 w-full">
                </input>
                <textarea 
                required
                name="description"
                placeholder="Description"
                className="textarea-bordered textarea mb-3 w-full"
                />
                <input 
                required
                name="date posted"
                placeholder="Date Posted"
                className="input-bordered input mb-3 w-full">
                </input>
                <input 
                required
                name="location"
                placeholder="Location"
                className="input-bordered input mb-3 w-full">
                </input>
                <button className="btn btn-primary btn-block" type="submit">Add Job</button>
            </form>
        </div>
    )
}
