import { Day, ForecastResponse } from "@/type/forecast";
import { getForecast } from "@/utils/getForecast";
import React from "react";
import styles from "../../styles/detail.module.scss";
import HomeButton from "@/components/HomeButton";
import { setDate } from "@/utils/date";

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
    <section className={styles.detailContaier}>
      <h1>{name}의 3일 날씨</h1>
      <ul>
        {forecastData?.forecast?.forecastday.map((item) => {
          const { date } = item;
          const { avgtemp_c } = item.day;
          return (
            <li key={date}>
              <span>{setDate(date)}</span>
              <span>
                {avgtemp_c}
                {"`c"}
              </span>
            </li>
          );
        })}
      </ul>
      <HomeButton />
    </section>
  );
};

export default Detail;
