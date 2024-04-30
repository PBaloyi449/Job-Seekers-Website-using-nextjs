import prisma from "@/lib/prisma";
import {redirect} from "next/navigation";

export const metadata = {
    title: "Add Job - Employment Echo"
}

async function addJob(formData: FormData){
    "use server";

    const job = formData.get("job")?.toString();
    const company = formData.get("company")?.toString();
    const location = formData.get("location")?.toString();
    const description = formData.get("description")?.toString();
    const responsibilities = formData.get("responsibilities")?.toString();
    const requirements = formData.get("requirements")?.toString();
    const link = formData.get("link")?.toString();
    const closingDate = formData.get("closingDate")?.toString();
    
    console.log("job: " +job )
    console.log("company: " +company)
    console.log(`location: ${location}`)
    console.log(`description: ${description}`)
    console.log(`responsibilities: ${responsibilities}`)
    console.log(`requirements: ${requirements}`)
    console.log(`link: ${link}`)
    console.log(`closingDate: ${closingDate}`)

    if (!job || !company || !location || !closingDate|| !description || !responsibilities || !requirements || !link ){
        throw  Error("Missing required fields");
    }

    await prisma.entry_level_Jobs.create({
        data: {company, description, location,requirements,responsibilities,closingDate,job,link}
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
                name="job"
                placeholder="Job Title"
                className="input-bordered input mb-3 w-full">
                </input>
                <input 
                required
                name="company"
                placeholder="Company"
                className="input-bordered input mb-3 w-full">
                </input>
                <input 
                required
                name="location"
                placeholder="Location"
                className="input-bordered input mb-3 w-full">
                </input>
                <input 
                required
                name="closingDate"
                placeholder="Closing Date"
                className="input-bordered input mb-3 w-full">
                </input>
                <textarea 
                required
                name="description"
                placeholder="Description"
                className="textarea-bordered textarea mb-3 w-full"
                />
                <textarea 
                required
                name="responsibilities"
                placeholder="Responsibilities"
                className="textarea-bordered textarea mb-3 w-full"
                />
                <textarea 
                required
                name="requirements"
                placeholder="Requirements"
                className="textarea-bordered textarea mb-3 w-full"
                />
                <input 
                required
                name="link"
                placeholder="How to apply"
                className="input-bordered input mb-3 w-full">
                </input>
                <button className="btn btn-primary btn-block" type="submit">Add Job</button>
            </form>
        </div>
    )
}
