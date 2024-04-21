import JobCard from "@/components/JobCard";
import PaginationBar from "@/components/Pagination";
import prisma from "@/lib/prima";
import Link from "next/link";

export default async function Home() {
  const jobs = await prisma.entry_level_Jobs.findMany({
    orderBy: {id: "desc"}
  })

  return (
    <div className="flex flex-col items-center">
      <div className="hero rounded-xl bg-base-200">
        <div className="hero-content flex-row">
          <div>
            <h1 className="text-5xl font-bold">{jobs[0].job}</h1>
            <p className="py-2">{jobs[0].description}</p>
            <p><b>{`Location: ${jobs[0].location}`}</b></p>
            <p><b>{`Closing Date:${jobs[0].closingDate}`}</b></p>

            <Link
              href={"/jobs/" + jobs[0].id}
              className="btn-primary btn my-4">
                Read More
              </Link>
              
          </div>
        </div>

      </div>
      <div className="my-4" gap-4>
        {jobs.slice(1).map(job =>
          <JobCard job={job} key={job.id} />
        )}
      </div>
      
      <PaginationBar currentPage={3} totalPages={99} />
    </div>
  );
}
