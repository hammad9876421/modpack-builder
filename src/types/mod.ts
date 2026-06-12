export interface Mod {
  id: string;
  slug: string;
  project_type: string;

  title: string;
  description: string;
  body?: string;

  author: string;

  icon_url: string;

  downloads: number;
  follows: number;

  categories: string[];

  client_side: "required" | "optional" | "unsupported" | "unknown";
  server_side: "required" | "optional" | "unsupported" | "unknown";

  latest_version: string;

  date_created: string;
  date_modified: string;

  versions?: string[];
  loaders?: string[];
}

export interface SearchResponse {
  hits: Mod[];
  offset: number;
  limit: number;
  total_hits: number;
}
