import HomeButton from "@/components/homeButton";
import { Day, ForecastResponse } from "@/type/forecast";
import { getForecast } from "@/utils/getForecast";
import React from "react";

interface IDetailProps {
  params: {
    location: string;
  };
}
const Detail = async ({ params }: IDetailProps) => {
  const forecastData: ForecastResponse = await getForecast(params.location);

  return (
    <>
      <h1>{params.location}의 3일 날씨</h1>
      <ul>
        {forecastData?.forecast?.forecastday.map((item) => {
          const { date } = item;
          const { avgtemp_c } = item.day;
          return (
            <li key={date}>
              {date} / {avgtemp_c}
            </li>
          );
        })}
      </ul>
      <HomeButton />
    </>
  );
};

export default Detail;
