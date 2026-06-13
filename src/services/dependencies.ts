export interface Dependency {
  projectId: string;
  dependencyType: string;
}

export async function getDependencies(projectId: string) {
  const response = await fetch(
    `https://api.modrinth.com/v2/project/${projectId}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch project");
  }

  const data = await response.json();

  return {
    id: data.id,
    title: data.title,
    dependencies: [],
  };
}
