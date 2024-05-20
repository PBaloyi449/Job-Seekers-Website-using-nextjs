import JobCard from "@/components/JobCard";
import PaginationBar from "@/components/Pagination";
import prisma from "@/lib/prisma";
import Link from "next/link";
import AdBanner from "@/components/AdBanner";

interface HomeProps{
  searchParams: {page: string}
}


export default async function Home({
  searchParams: { page = "1" },
}: HomeProps) {
  const currentPage = parseInt(page);

  const pageSize = 6
  const heroItemCount = 1

  const totalItemCount = await prisma.entry_level_Jobs.count();

  const totalPages = Math.ceil((totalItemCount - heroItemCount) / pageSize)

  const jobs = await prisma.entry_level_Jobs.findMany({
    orderBy: {id: "desc"},
    skip: (currentPage - 1) * pageSize + (currentPage === 1 ? 0: heroItemCount),
    take: pageSize + (currentPage === 1 ? heroItemCount: 0),
  })

  return (
    <div className="flex flex-col items-center">
      <AdBanner dataAdFormat="auto" dataFullWidthResponsive={true} dataAdSlot="9928664512"/>
      {currentPage === 1 &&
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
  }
      <div className="my-4 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3 overflow-hidden">
      <AdBanner dataAdFormat="auto" dataFullWidthResponsive={true} dataAdSlot="9928664512"/>
        {(currentPage === 1 ? jobs.slice(1): jobs).map(job =>
          <JobCard job={job} key={job.id} />
        )}
      </div>
      

    {totalPages > 1 && (  
      <PaginationBar currentPage={currentPage} totalPages={totalPages} />
    )}
    </div>
  );
}
