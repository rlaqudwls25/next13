import { clientAxios } from "./axios";

export default async function revalidate(tag: string) {
  const { data } = await clientAxios.post("/api/revalidate?tag=" + tag, {});

  return data;
}
