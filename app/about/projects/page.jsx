import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import ProjectList from "@/components/projects/ProjectList";
import ProjectListLoading from "@/components/projects/ProjectListLoading";
import H1 from "@/components/h1";

export const metadata = {
  title: "Projects",
};

const Page = async () => {
  return (
    <div>
      <H1>Projects</H1>
      <div className="mb-8">Hello, this is the list of my repos!</div>
      <ErrorBoundary fallback={<div>Cannnot fetch projects currently</div>}>
        <Suspense fallback={<ProjectListLoading />}>
          <ProjectList />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
};

export default Page;
