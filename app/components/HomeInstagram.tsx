import Slider from 'react-slick';
import HomeInstagramItem from './HomeInstagramItem';
import NextArrow from './NExtArrow';
import PrevArrow from './PrevArrow';

const DATA = [
  {
    id: '1',
    imageURL:
      'https://housing.com/news/wp-content/uploads/2022/11/living-room-furniture-design-compressed-1.jpg',
  },
  {
    id: '2',
    imageURL:
      'https://www.ikea.com/ph/en/images/products/gursken-bedroom-furniture-set-of-3-light-beige__1063816_ph182868_s5.jpg?f=s',
  },
  {
    id: '3',
    imageURL:
      'https://www.universalfurniture.com/images/pages/home/2022/U030501_RM.jpg?v=fcYu7oTsSUAyVfxWs5MbR2L0Jpeg0JzIiZ4Eaa_BqPw',
  },
  {
    id: '4',
    imageURL:
      'https://www.ikea.com/ph/en/images/products/hauga-bedroom-furniture-set-of-4-lofallet-beige-white__1101338_pe866602_s5.jpg?f=s',
  },
  {
    id: '5',
    imageURL:
      'https://housing.com/news/wp-content/uploads/2022/11/Popular-wooden-furniture-design-for-home-and-types-of-wood.jpg',
  },
  {
    id: '6',
    imageURL:
      'https://www.themanual.com/wp-content/uploads/sites/9/2021/04/best-affordable-high-quality-furniture.jpg?fit=800%2C800&p=1',
  },
  {
    id: '7',
    imageURL:
      'https://www.bassettfurniture.com/blog/images/6W26-0859-Fusion-SP19.jpg',
  },
  {
    id: '8',
    imageURL:
      'https://www.westelm.co.uk/site/WE/Site%20Content/03.07.23/Furniture_Supercat/030623_UK_Furniture_Supercat_D-min.jpg',
  },
  {
    id: '9',
    imageURL:
      'https://www.furnituresourcephils.com/wp-content/uploads/2022/06/Workspaces-min.jpg',
  },
  {
    id: '10',
    imageURL:
      'https://www.cielo.co.za/img/cms/Blog%20images/Reclaimed%20Wood/natural%20wooden%20bedroom.png',
  },
];

function HomeInstagram() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3,
    initialSlide: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 3,
        },
      },
    ],
  };

  return (
    <div className="relative pl-12 py-8 my-20">
      <div className="inset-x-[606px] absolute z-10 bg-white w-[259px] h-[240px] p-7 flex flex-col justify-center">
        <h2 className="text-black text-2xl font-semibold">@Erigo</h2>
        <p className="text-gray-500 text-sm py-3">
          immerse yourself in the magnifia esthetics of our interiors and feel
          the whole atmosphere of our future.
        </p>
        <p className="text-black underline text-xs">GO TO INSTAGRAM</p>
      </div>
      <Slider {...settings}>
        {DATA.map((furniture) => (
          <HomeInstagramItem
            key={furniture.id}
            furnitureBg={furniture.imageURL}
          />
        ))}
      </Slider>
    </div>
  );
}

export default HomeInstagram;
