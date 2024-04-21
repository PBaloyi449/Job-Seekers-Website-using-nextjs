import prisma from "@/lib/prima"
import { notFound } from "next/navigation"

interface JobPageProps{
    params: {
        id: string
    }
}

export default async function JobPage(
    {params: {id}} : JobPageProps
){
    const job = await prisma.entry_level_Jobs.findUnique({where:{id}})
    if(!job) notFound();

    return(
        <div className="flex flex-col lg:flex-row">
            <div>
                <h1 className="text-5xl font-bold">{job.job}</h1>
                <p>{`Company: ${job.company}`}</p>
                <p>{`Location: ${job.location}`}</p>
                <p>{`Closing Date: ${job.closingDate}`}</p>

            </div>
        </div>
    )
}
