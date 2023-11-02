import { clientAxios } from "./axios";

export const getForecast = async (location: string) => {
  console.log("location", location);
  try {
    const { data } = await clientAxios.get(
      `http://api.weatherapi.com/v1/forecast.json?key=${process.env.NEXT_PUBLIC_API_KEY}&q=${location}&days=1&aqi=no&alerts=no`
    );

    return data;
  } catch (error) {
    console.log("error", error);
  }
};
