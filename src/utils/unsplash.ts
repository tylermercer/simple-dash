import { createApi } from "unsplash-js";

const unsplash = createApi({
    accessKey: import.meta.env.UNSPLASH_ACCESS_KEY ?? "",
  });

export default unsplash;