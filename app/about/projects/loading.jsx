import H1 from "@/components/h1";

const Loading = () => {
  return (
    <div className="p-20">
      <H1>Projects</H1>
      <ul className="space-y-8">
        {Array(3)
          .fill(0)
          .map((_, index) => (
            <li key={index}>
              <div className="w-full h-24 animate-pulse bg-neutral-100 dark:bg-neutral-700" />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Loading;
