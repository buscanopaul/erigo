import Slider from 'react-slick';

const DATA = [
  {
    id: '1',
    name: 'Chair Comfort',
    price: 8.5,
    category: 'Indoor Type',
    likes: 1200,
    imageURL:
      'https://www.next.co.uk/nxtcms/resource/blob/5489338/758225c48c0db35da723075526be2aa2/chair-data.jpg',
  },
  {
    id: '2',
    name: 'Chair Comfort',
    price: 8.5,
    category: 'Indoor Type',
    likes: 1200,
    imageURL:
      'https://hips.hearstapps.com/hmg-prod/images/posters-in-cozy-apartment-interior-royalty-free-image-943910360-1534189931.jpg',
  },
  {
    id: '3',
    name: 'Chair Comfort',
    price: 8.5,
    category: 'Indoor Type',
    likes: 1200,
    imageURL:
      'https://www.caseys.ie/media/9e/30/31/1677251612/Garden%2023%20website%20banner%20size-02.png',
  },
  {
    id: '4',
    name: 'Chair Comfort',
    price: 8.5,
    category: 'Indoor Type',
    likes: 1200,
    imageURL:
      'https://cdn.shopify.com/s/files/1/0503/0074/7976/files/Armchair_1800x.jpg?v=1613539657',
  },
  {
    id: '5',
    name: 'Chair Comfort',
    price: 8.5,
    category: 'Indoor Type',
    likes: 1200,
    imageURL:
      'https://www.coloradostyle.com/cid1244/css/1353/images/accent-chairs-312x274.jpg',
  },
  {
    id: '6',
    name: 'Chair Comfort',
    price: 8.5,
    category: 'Indoor Type',
    likes: 1200,
    imageURL:
      'https://assets-news.housing.com/news/wp-content/uploads/2020/09/15183141/Types-of-wood-used-for-making-furniture-in-India-FB-1200x700-compressed.jpg',
  },
];

function CategoryProductList() {
  var settings = {
    infinite: false,
    centerPadding: '60px',
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
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
            <div
              style={{'--image-url': `url(${product.imageURL})`}}
              className="h-[400px] bg-[image:var(--image-url)] bg-cover bg-right bg-no-repeat"
            />
            <div className="flex items-center justify-between mt-2 text-black">
              <h2 className="font-bold">{product.name}</h2>
              <h2 className="font-bold">{product.price}</h2>
            </div>
            <div className="flex items-center justify-between text-black">
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
