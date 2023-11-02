import { clientAxios } from "./axios";

export const getCurrentWeather = async (location: string) => {
  try {
    const { data } = await clientAxios.get(
      `http://api.weatherapi.com/v1/current.json?key=${process.env.NEXT_PUBLIC_API_KEY}&q=${location}&aqi=no`
    );

    return data;
  } catch (error) {
    console.log("error", error);
  }
};
