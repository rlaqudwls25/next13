import Link from "next/link";
import style from "../styles/list.module.scss";
import { getCurrentWeather } from "@/utils/getCurrentWeather";
import { WeatherResponse } from "@/type/location";
import { getTime } from "@/utils/getTime";
import { TimeResponse } from "@/type/time";
import RevalidateButton from "@/components/RevalidateButton";

const Home = async () => {
  const waetherData: WeatherResponse = await getCurrentWeather("seoul");
  const time: TimeResponse = await getTime(waetherData.location.tz_id);

  return (
    <>
      <h1>날씨</h1>
      <h3>{time.dateTime}</h3>
      <ul className={style.list}>
        <li>
          <Link href="/seoul?name=서울">서울</Link>
          <span>{waetherData.current.condition.text}</span>
        </li>
        <li>
          <Link href="/nyc?name=뉴옥">뉴옥</Link>
        </li>
        <li>
          <Link href="/london?name=런던">런던</Link>
        </li>
      </ul>
      <RevalidateButton tag={"time"} />
    </>
  );
};

export default Home;
