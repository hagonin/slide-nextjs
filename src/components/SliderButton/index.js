import Image from "next/image";
import { useSwiper } from "swiper/react";
import { icons } from "~/utilities/constants";
import styles from "./SliderButton.module.css";

export default function SliderButton({ isNextButton }) {
  const swiper = useSwiper();
  return (
    <button
      className={`${styles.slider__button} ${
        isNextButton ? styles.slider__nextButton : styles.slider__previousButton
      }`}
      type="button"
      onClick={isNextButton ? () => swiper.slideNext() : () => swiper.slidePrev()}
    >
      <Image
        src={isNextButton ? icons.rightArrow : icons.leftArrow}
        alt="arrow_icon"
        height={25}
        width={25}
      />
    </button>
  );
}
