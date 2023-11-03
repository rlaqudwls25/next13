import { format } from "date-fns";

export const setDateToSecond = (date: string) => {
  return format(new Date(date), "yyyy년 MM월 dd일 HH시 mm분 ss초");
};

export const setDate = (date: string) => {
  return format(new Date(date), "yyyy년 MM월 dd일");
};
