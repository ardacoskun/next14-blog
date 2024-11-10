const ProjectList = async () => {
  const response = await fetch("http://localhost:3001/repos", {
    // next: { revalidate: 3600 },
    cache: "no-store",
  });
  const repos = await response.json();

  return (
    <ul>
      {repos?.map((item) => (
        <li key={item.id} className="mb-4">
          <div>{item.title}</div>
          <div>{item.description}</div>
          <div>{item.stargazers_count}</div>
        </li>
      ))}
    </ul>
  );
};

export default ProjectList;
