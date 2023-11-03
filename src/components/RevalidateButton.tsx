"use client";

import revalidate from "@/utils/revalidate";
import styles from "../styles/list.module.scss";

type Props = {
  tag: string;
};

export default function RevalidateButton({ tag }: Props) {
  const handleClick = async () => {
    await revalidate(tag);
  };

  return (
    <div className={styles.buttonBox}>
      <button className={styles.revalidateButton} onClick={handleClick}>
        캐시 비우기
      </button>
    </div>
  );
}
