import {Image} from '@shopify/hydrogen';
import {Link} from './Link';

const DATA = [
  {
    id: '1',
    name: 'Desk',
    description: 'Design for Dream-Filled Sleep',
    image: {
      url: 'https://ph-live-01.slatic.net/p/f7933c82748cbc8d3ab183581719ce53.png',
    },
  },
  {
    id: '2',
    name: 'Chair',
    description: 'Stylishly Studios Seating',
    image: {
      url: 'https://cf.shopee.ph/file/28148577b97e2e156b4c1b17ef7ba964',
    },
  },
  {
    id: '3',
    name: 'Bed',
    description: 'Factory Inspired Illumination',
    image: {
      url: 'https://i.pinimg.com/736x/b2/7f/8d/b27f8d1808edd8dc276cc9fedc021f96--spare-bedroom-decor-bedroom-bed-design.jpg',
    },
  },
  {
    id: '4',
    name: 'Sofa',
    description: 'Design for Dream-Filled Sleep',
    image: {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC2nK927ZlLaSQxJ7uNhDa_k7TZMdXTp1bwYyZw-Hm2ZSng-JsE2ledNgG996tcSghUr0&usqp=CAU',
    },
  },
];

function Categories() {
  return (
    <div className="px-12 my-10 md:flex-row flex-col items-start flex justify-between gap-8 md:flex-wrap">
      {DATA.map((category) => (
        <div className="flex-row flex gap-5">
          <Link to="/products">
            <Image
              width={50}
              height={50}
              data={category.image}
              className="object-cover object-center w-24 h-24 border md:w-24 md:h-24 rounded-full"
              alt={category.name}
            />
          </Link>
          <div className="w-40">
            <Link to="/products">
              <h4 className="text-black">{category.name}</h4>
            </Link>
            <p className="text-gray-400">{category.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Categories;
