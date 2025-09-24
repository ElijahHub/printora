if (!process.env.GOOGLE_CLIENT_ID || !process.env.STRAPI_API_TOKEN) {
  throw new Error("Missing GOOGLE_CLIENT_ID");
}

export const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID!;
export const STRAPI_API_TOKEN = process.env.STRAPI_API_TOKEN!;