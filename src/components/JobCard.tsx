import {Entry_level_Jobs}  from "@prisma/client";
import Link from "next/link";

interface JobCardProps{
    job: Entry_level_Jobs;
}

export default function JobCard({job}: JobCardProps ) {
    return(
        <Link
        href={"/jobs/" + job.id}
        className="card w-full bg-base-100 hover:shadow-xl transition-shadow">
        <div className="card-body">
            <h2 className="card-title">
                {job.job}
            </h2>
            <p>{job.description}</p>
            <p><b>{`Location: ${job.location}`}</b></p>
            <p><b>{`Closing Date: ${job.closingDate}`}</b></p>
        </div>
        </Link>
    
    )
}