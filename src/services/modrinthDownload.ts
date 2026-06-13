export interface DownloadFile {
  url: string;
  filename: string;
  primary: boolean;
}

export async function getDownloadFiles(
  versionId: string
): Promise<DownloadFile[]> {
  const response = await fetch(
    `https://api.modrinth.com/v2/version/${versionId}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch download files");
  }

  const data = await response.json();

  return data.files.map((file: any) => ({
    url: file.url,
    filename: file.filename,
    primary: file.primary,
  }));
}
