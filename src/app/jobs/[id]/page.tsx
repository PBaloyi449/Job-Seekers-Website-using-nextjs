import prisma from "@/lib/prima"
import { notFound } from "next/navigation"
import Link from "next/link";
import type { Metadata } from "next";
import { cache} from "react";

interface JobPageProps{
    params: {
        id: string
    }
}

const getJob = cache(async (id: string) => {
    const job = await prisma.entry_level_Jobs.findUnique({where:{id}})
    if(!job) notFound();
    return job;
})

export async function generateMetadata(
    {params: {id}} : JobPageProps
): Promise<Metadata> {
    const job = await getJob(id); 

    return {
        title: job.job + " - Career Connect",
        description: job.description, 
    }
}

export default async function JobPage(
    {params: {id}} : JobPageProps
){
    const job = await getJob(id);
    

    return(
        <div>
            <div>
                <h1 className="text-4xl font-bold">{job.job}</h1>
                <p>{`Company: ${job.company}`}</p>
                <p>{`Location: ${job.location}`}</p>
                <p>{`Closing Date: ${job.closingDate}`}</p><br></br>
            </div>
            <div>
                <h3 className="text-2xl font-bold">Description</h3>
                <p>{job.description}</p><br></br>
                <h3 className="text-2xl font-bold">Responsibilities</h3>
                <p>{job.responsibilities}</p><br></br>
                <h3 className="text-2xl font-bold">Requirements</h3>
                <p>{job.requirements}</p><br></br>
            </div>
            <Link
            href={job.link} target="_blank"
            className="btn-primary btn"> Apply
            </Link>
        </div>
    )
}
