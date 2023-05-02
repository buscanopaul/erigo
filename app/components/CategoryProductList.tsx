import Slider from 'react-slick';

const DATA = [
  {
    id: '1',
    name: 'Chair Comfort',
    price: 8.5,
    category: 'Indoor Type',
    likes: 1200,
  },
  {
    id: '2',
    name: 'Chair Comfort',
    price: 8.5,
    category: 'Indoor Type',
    likes: 1200,
  },
  {
    id: '3',
    name: 'Chair Comfort',
    price: 8.5,
    category: 'Indoor Type',
    likes: 1200,
  },
  {
    id: '4',
    name: 'Chair Comfort',
    price: 8.5,
    category: 'Indoor Type',
    likes: 1200,
  },
  {
    id: '5',
    name: 'Chair Comfort',
    price: 8.5,
    category: 'Indoor Type',
    likes: 1200,
  },
  {
    id: '6',
    name: 'Chair Comfort',
    price: 8.5,
    category: 'Indoor Type',
    likes: 1200,
  },
];

function CategoryProductList() {
  const settings = {
    dots: true,
    infinite: false,
    centerPadding: '60px',
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <Slider {...settings}>
        {DATA.map((product) => (
          <div className="pr-5">
            <div className="h-[400px] bg-[url('https://assets-news.housing.com/news/wp-content/uploads/2020/09/15183141/Types-of-wood-used-for-making-furniture-in-India-FB-1200x700-compressed.jpg')] bg-cover bg-right bg-no-repeat" />
            <div className="flex items-center justify-between mt-2">
              <h2 className="font-bold">{product.name}</h2>
              <h2 className="font-bold">{product.price}</h2>
            </div>
            <div className="flex items-center justify-between">
              <h2>{product.category}</h2>
              <h2>{product.likes}</h2>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default CategoryProductList;
