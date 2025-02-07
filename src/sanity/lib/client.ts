import { createClient } from '@sanity/client';


// import { apiVersion, dataset, projectId,token } from '../env'

  export const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "wnhduqcu",
    dataset: "production",
    useCdn: false,
    apiVersion: "2024-02-06",
    token: process.env.NEXT_PUBLIC_SANITY_API_TOKEN,
  });
  