const ProjectListLoading = () => {
  return (
    <ul className="space-y-8">
      {Array(3)
        .fill(0)
        .map((_, index) => (
          <li key={index}>
            <div className="w-full h-24 animate-pulse bg-neutral-400" />
          </li>
        ))}
    </ul>
  );
};

export default ProjectListLoading;
