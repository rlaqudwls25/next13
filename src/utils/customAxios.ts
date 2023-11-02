import { METHOD } from "@/type/common";
import axios from "axios";

const customAxios = async (
  method: METHOD,
  url: string,
  ...rest: { [key: string]: any }[]
) => {
  const response = await axios[method](url, ...rest);

  return response.data;
};

export default customAxios;
