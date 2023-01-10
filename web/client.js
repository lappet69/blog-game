import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: "mj436m8n", // you can find this in sanity.json
  dataset: "production", // or the name you chose in step 1
  useCdn: true, // `false` if you want to ensure fresh data
  apiVersion: "2023-01-09",
});
