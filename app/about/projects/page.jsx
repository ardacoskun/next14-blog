import { Suspense } from "react";
import ProjectList from "./components/ProjectList";
import ProjectListLoading from "./components/ProjectListLoading";

export const dynamic = "force-dynamic";

const Page = async () => {
  return (
    <div className="p-20">
      <h1 className="mb-8">Projects</h1>
      <div className="mb-8">Hello this is the list</div>
      <Suspense fallback={<ProjectListLoading />}>
        <ProjectList />
      </Suspense>
    </div>
  );
};

export default Page;
