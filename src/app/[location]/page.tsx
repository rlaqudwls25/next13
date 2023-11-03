import HomeButton from "@/components/homeButton";
import { Day, ForecastResponse } from "@/type/forecast";
import { getForecast } from "@/utils/getForecast";
import React from "react";

interface IDetailProps {
  params: {
    location: string;
  };
  searchParams: {
    name: string;
  };
}

export const generateMetadata = ({ searchParams }: IDetailProps) => {
  return {
    title: `날씨 앱 - ${searchParams.name}`,
    description: `${searchParams.name} 날씨를 알려드립니다.`,
  };
};

const Detail = async ({ params, searchParams }: IDetailProps) => {
  const name = searchParams.name;
  const forecastData: ForecastResponse = await getForecast(params.location);

  return (
    <>
      <h1>{name}의 3일 날씨</h1>
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
