import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper';
import styled from 'styled-components';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import { useFetchOthersCoffeeQuery } from 'store/api/otherscoffee';
import Skeleton from 'components/Skeleton/Skeleton';

const CoverflowSection = () => {
  const { data, isSuccess } = useFetchOthersCoffeeQuery();

  return (
    <Container>
      <Swiper
        effect={'coverflow'}
        centeredSlides={true}
        slidesPerView={3}
        grabCursor={true}
        spaceBetween={0}
        loop={true}
        coverflowEffect={{
          rotate: 20,
          stretch: 100,
          depth: 300,
          modifier: 1,
          slideShadows: false,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="swiper-container"
      >
        {isSuccess ? (
          <>
            {data?.cardImages.map(card => (
              <SwiperSlide key={card.id}>
                <img
                  src={require(`../../../../assets/Images/${card.thumbnail}`)}
                  alt="커피 취향 인증서"
                  className="photo"
                />
              </SwiperSlide>
            ))}
          </>
        ) : (
          <>
            <SwiperSlide>
              <Skeleton style={{ width: 400, height: 300 }} animated />
            </SwiperSlide>
            <SwiperSlide>
              <Skeleton style={{ width: 400, height: 300 }} animated />
            </SwiperSlide>
            <SwiperSlide>
              <Skeleton style={{ width: 400, height: 300 }} animated />
            </SwiperSlide>
            <SwiperSlide>
              <Skeleton style={{ width: 400, height: 300 }} animated />
            </SwiperSlide>
            <SwiperSlide>
              <Skeleton style={{ width: 400, height: 300 }} animated />
            </SwiperSlide>
            <SwiperSlide>
              <Skeleton style={{ width: 400, height: 300 }} animated />
            </SwiperSlide>
            <SwiperSlide>
              <Skeleton style={{ width: 400, height: 300 }} animated />
            </SwiperSlide>
          </>
        )}
      </Swiper>
    </Container>
  );
};

export default CoverflowSection;

const Container = styled.div`
  width: 100%;
  height: 40rem;
  display: flex;
  align-items: center;

  .swiper-container {
    height: 40rem;

    .swiper-slide {
      background-position: center;
      background-size: cover;
      display: flex;
      justify-content: center;
      align-items: center;
      .photo {
        width: 40rem;
        height: 30rem;
      }
    }
  }
`;
