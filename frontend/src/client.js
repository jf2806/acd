import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: "xvonrhbe",
  dataset: "production",
  useCdn: true,
});
