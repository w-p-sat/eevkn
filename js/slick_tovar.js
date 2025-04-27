// js/slick_tovar.js

window.initSlider = function () {
  if (typeof $ === 'undefined' || !$('.slider_tovar').length) {
    console.warn('jQuery або .slider_tovar не знайдені');
    return;
  }

  $('.slider_tovar').slick({
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true, // Безкінечна прокрутка
    centerMode: false, // Вимикаємо, щоб слайди не обрізалися
    variableWidth: false,
    autoplay: true,
    adaptiveHeight: true,
    speed: 2000,
    autoplaySpeed: 3000,
    dots: true,  
  });
};
export default function ProductSlider({ images }) {
  return (
    <div className="slider_tovar">
      <Slider {...settings}>
        {images.map((imgUrl, idx) => (
          <div className="slider_boxik" key={idx}>
            <img src={imgUrl} alt={`Фото ${idx + 1}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
}
