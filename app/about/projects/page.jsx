import { Suspense } from "react";
import ProjectList from "@/components/projects/ProjectList";
import ProjectListLoading from "@/components/projects/ProjectListLoading";

const Page = async () => {
  return (
    <div className="p-20">
      <h1 className="mb-8 text-xl">Projects</h1>
      <div className="mb-8">Hello, this is the list of my repos!</div>
      <Suspense fallback={<ProjectListLoading />}>
        <ProjectList />
      </Suspense>
    </div>
  );
};

export default Page;
