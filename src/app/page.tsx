import JobCard from "@/components/JobCard";
import prisma from "@/lib/prima";
import Link from "next/link";

export default async function Home() {
  const jobs = await prisma.entry_level_Jobs.findMany({
    orderBy: {id: "desc"}
  })

  return (
    <div>
      <div className="hero rounded-xl bg-base-200">
        <div className="hero-content flex-row">
          <div>
            <h1 className="text-5xl font-bold">{jobs[0].job}</h1>
            <p className="py-6">{jobs[0].description}</p>
            <Link
              href={"/jobs/" + jobs[0].id}
              className="btn-primary btn">
                Read More
              </Link>
              
          </div>
        </div>

      </div>
      <JobCard job= {jobs[0]} />
    </div>
  );
}
