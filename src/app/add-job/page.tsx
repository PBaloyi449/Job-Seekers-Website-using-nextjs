import prisma from "@/lib/prima";
import {redirect} from "next/navigation";

export const metadata = {
    title: "Add Job - Career Connect"
}

async function addJob(formData: FormData){
    "use server";

    const job = formData.get("job")?.toString();
    const company = formData.get("company")?.toString();
    const location = formData.get("location")?.toString();
    const description = formData.get("description")?.toString();
    const responsibilities = formData.get("responsibilities")?.toString();
    const requirements = formData.get("requirements")?.toString();
    const link = formData.get("apply")?.toString();
    const closingDate = formData.get("closingDate")?.toString();
   

    if (!job || !company || !location || !description|| !responsibilities || !requirements || !closingDate || !link ){
        throw  Error("Missing required fields");
    }

    await prisma.entry_level_Jobs.create({
        data: {company,description,location,requirements,responsibilities,closingDate,job,link}
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
