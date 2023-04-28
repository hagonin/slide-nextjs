import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCreative, Autoplay } from "swiper";
import Image from "next/image";
import "swiper/css";
import "swiper/css/effect-creative";
import "swiper/css/autoplay";
import styles from "./Banner.module.css";
import SliderButton from "~/components/SliderButton";

export default function Banner({slides}) {

	const handleSlideChange = (swiper) => {
		const activeSlide = swiper.slides[swiper.realIndex];
			const caption = activeSlide.querySelector(`.${styles.banner__caption}`);
		const title = activeSlide.querySelector(`.${styles.banner__captionText}`);
			caption.classList.add(styles.banner__captionAnimated);
		title.classList.remove(styles.captionTextOut);
		};

		const handleSlideNext = (swiper) => {
			const activeSlide = swiper.slides[swiper.realIndex];
			const caption = activeSlide.querySelector(`.${styles.banner__caption}`);
			const title = activeSlide.querySelector(`.${styles.banner__captionText}`);
			caption.classList.remove(styles.banner__captionAnimated);
			title.classList.add(styles.captionTextOut);
		};

	const handleSlidePrev = (swiper) => {
			const activeSlide = swiper.slides[swiper.realIndex];
			const caption = activeSlide.querySelector(`.${styles.banner__caption}`);
			const title = activeSlide.querySelector(`.${styles.banner__captionText}`);
			caption.classList.remove(styles.banner__captionAnimated);
			title.classList.add(styles.captionTextOut);
		};

	return (
			<section className={styles.banner}>
				<div className={styles.banner__wrapper}>
					<Swiper
						direction="vertical"
						loop={true}
						allowTouchMove={false}
						effect="creative"
						creativeEffect={{
							prev: {
								shadow: true,
								translate: [0, '-20%', -1],
							},
							next: {
								translate: [0, '100%', 0],
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
								<div className={`${styles.banner__item}`}>
									<Image src={slide.image} alt={slide.title} fill priority />
									<div className={`${styles.banner__caption}`}>
										<div className={`${styles.banner__captionText}`}>
											<h2>{slide.title}</h2>
											<a href={slide.url}>view project</a>
										</div>
									</div>
								</div>
							</SwiperSlide>
						))}
						<SliderButton />
						<SliderButton isNextButton />
					</Swiper>
				</div>
			</section>
		)
}
