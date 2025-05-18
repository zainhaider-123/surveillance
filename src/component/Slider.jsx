import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Slider = () => {

  const images = [
    '/assets/project/Hardware.jpg',
    '/assets/project/pcb.jpg'
  ];



  return (
<div className="w-full max-w-5xl mx-auto py-10">
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          className="rounded-2xl overflow-hidden shadow-lg"
        >
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <img
                src={img}
                alt={`Slide ${index}`}
                className="w-full h-[60vh] object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
  )
}

export default Slider