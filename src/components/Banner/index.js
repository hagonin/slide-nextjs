import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCreative, Autoplay } from "swiper";
import Image from "next/image";
import "swiper/css";
import "swiper/css/effect-creative";
import "swiper/css/autoplay";
import { slides } from "~/api";
import styles from "./Banner.module.css";
import SliderButton from "~/components/SliderButton";

export default function Banner() {
  const handleSlideChange = (swiper) => {
    console.log(swiper);
    const activeSlide = swiper.slides[swiper.activeIndex];
    const caption = activeSlide.querySelector(".banner__caption");
    const title = activeSlide.querySelector(".banner__captionText");
    caption.classList.add("animated");
    title.classList.remove("caption-out");
  };

  const handleSlideNext = (swiper) => {
    const activeSlide = swiper.slides[swiper.activeIndex];
    // const bannerItem = activeSlide.querySelector(".banner__item");
    // console.log(bannerItem);

    const title = activeSlide.querySelector(".banner__captionText");
    title.classList.add("caption-out");
  };

  const handleSlidePrev = (swiper) => {
    const activeSlide = swiper.slides[swiper.activeIndex];
    const title = activeSlide.querySelector(".banner__captionText");
    title.classList.add("caption-out");
  };

  return (
    <section className={styles.banner__wrapper}>
      <div className={styles.banner}>
        <Swiper
          direction="vertical"
          loop={true}
          allowTouchMove={false}
          effect="creative"
          creativeEffect={{
            prev: {
              shadow: true,
              translate: [0, "-20%", -1],
            },
            next: {
              translate: [0, "100%", 0],
            },
          }}
          onSlideChange={handleSlideChange}
          onSlideNextTransitionStart={handleSlideNext}
          onSlidePrevTransitionStart={handleSlidePrev}
          autoplay={{ delay: 4000 }}
          modules={[EffectCreative, Autoplay]}
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className={`banner__item ${styles.banner__item}`}>
                <Image src={slide.image} alt={slide.title} fill priority />
                <div className={`banner__caption ${styles.banner__caption}`}>
                  <div
                    className={`banner__captionText ${styles.banner__captionText}`}
                  >
                    <h2>{slide.title}</h2>
                    <a href={slide.url}>view project</a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
          <SliderButton />
          <SliderButton isRight />
        </Swiper>
      </div>
    </section>
  );
}
