import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function Portfolio() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,  // Show only one image at a time
    slidesToScroll: 1,  // Scroll one image at a time
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,  // Still show one image on medium screens
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,  // Still show one image on small screens
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section id="portfolio" className="py-12 bg-gray-100 text-gray-800 text-center px-8">
      <div className="max-w-4xl mx-auto bg-white p-10 rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold mb-6">Portfolio</h2>
        <div className="border-t-4 border-red-500 w-16 mx-auto mb-8"></div>

        {/* Portfolio Slider */}
        <Slider {...settings}>
        <div>
          <a href="https://web3workstore.com/" target="_blank" rel="noopener noreferrer">
            <img src="/images/image.png" alt="Web3workstore" className="w-full rounded-lg shadow-sm" />
          </a>
        </div>
        <div>
          <a href="https://www.tbccoachinghub.com/" target="_blank" rel="noopener noreferrer">
            <img src="/images/tcb.png" alt="Tbccoachinghub" className="w-full rounded-lg shadow-sm" />
          </a>
        </div>
          <div>
            <img src="https://via.placeholder.com/300" alt="Project 3" className="w-full rounded-lg shadow-sm" />
          </div>
          <div>
            <img src="https://via.placeholder.com/300" alt="Project 4" className="w-full rounded-lg shadow-sm" />
          </div>
        </Slider>
      </div>
    </section>
  );
}
