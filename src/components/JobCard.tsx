import {Entry_level_Jobs}  from "@prisma/client";
import Link from "next/link";

interface JobCardProps{
    job: Entry_level_Jobs;
}

export default function JobCard({job}: JobCardProps ) {
    return(
        <div className="card w-full bg-base-200 hover:shadow-xl transition-shadow">
        <div className="card-body">
            <div className="overflow-hidden max-h-60">
            <h2 className="card-title text-4xl">
                {job.job}
            </h2><br></br>
            <p>{job.description}</p>
            <p><b>{`Location: ${job.location}`}</b></p>
            <p><b>{`Closing Date: ${job.closingDate}`}</b></p>
            </div>
            <div>
            <Link
              href={"/jobs/" + job.id}
              className="btn-primary btn w-full">
                Read More
              </Link>
              </div>
        </div>
        </div>
    
    )
}