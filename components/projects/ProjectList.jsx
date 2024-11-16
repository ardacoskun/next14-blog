import Card from "../Card";

const ProjectList = async () => {
  const response = await fetch(
    "http://localhost:3001/repos"
    // {cache: "no-store"}
  );
  const repos = await response.json();

  return (
    <ul className="grid grid-cols-1 gap-4 md:grid-cols-2">
      {repos.map((repo) => (
        <li key={repo.id} className="mb-4">
          <Card className="h-full font-mono">
            <div className="flex items-center justify-between mb-4">
              <div className="font-semibold">{repo.title}</div>
              <div>🌟{repo.stargazers_count}</div>
            </div>
            <div>{repo.description}</div>
          </Card>
        </li>
      ))}
    </ul>
  );
};

export default ProjectList;
