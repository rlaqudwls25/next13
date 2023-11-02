import customAxios from "./customAxios";
import { METHOD } from "@/type/common";

export const getTime = async (timeZone: string) => {
  const data = await customAxios(
    METHOD.GET,
    `https://timeapi.io/api/Time/current/zone?timeZone=${timeZone}`,
    { next: { tags: ["time"] } }
  );

  return data;
};
