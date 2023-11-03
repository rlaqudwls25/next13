import Link from "next/link";
import style from "../styles/list.module.scss";
import { getCurrentWeather } from "@/utils/getCurrentWeather";
import { WeatherResponse } from "@/type/location";
import { getTime } from "@/utils/getTime";
import { TimeResponse } from "@/type/time";
import RevalidateButton from "@/components/RevalidateButton";
import { setDateToSecond } from "@/utils/date";

const Home = async () => {
  const weatherData: WeatherResponse = await getCurrentWeather("seoul");
  const time: TimeResponse = await getTime(weatherData.location.tz_id);

  return (
    <section className={style.weatherContainer}>
      <div className={style.weatherWrapper}>
        <h1>날씨</h1>
        <h3>{setDateToSecond(time.dateTime)}</h3>
        <ul className={style.list}>
          <li>
            <Link href="/seoul?name=서울">서울</Link>
            <span>{weatherData.current.condition.text}</span>
          </li>
          <li>
            <Link href="/nyc?name=뉴옥">뉴옥</Link>
            <span>{weatherData.current.condition.text}</span>
          </li>
          <li>
            <Link href="/london?name=런던">런던</Link>
            <span>{weatherData.current.condition.text}</span>
          </li>
        </ul>
        <RevalidateButton tag={"time"} />
      </div>
    </section>
  );
};

export default Home;
