import CategoryList from './CategoryList';
import CategoryProductList from './CategoryProductList';

function HomeCategories() {
  return (
    <div className="px-12 py-8">
      <div className="flex lg:items-center items-start justify-between flex-col lg:flex-row mb-5">
        <div className="lg:max-w-[300px] mb-5">
          <h2 className="text-3xl text-black font-bold text-left">
            Handcrafted With Spirit in Wood!
          </h2>
        </div>
        <CategoryList />
      </div>
      <CategoryProductList />
    </div>
  );
}

export default HomeCategories;
