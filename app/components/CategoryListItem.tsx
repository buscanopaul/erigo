type CategoryProps = {
  category: object;
};

function CategoryListItem({category}: CategoryProps) {
  return (
    <div className="relative ">
      <button className="border border-black px-8 py-1.5 rounded-full text-black hover:bg-black hover:text-white transition">
        {category.name}
      </button>
    </div>
  );
}

export default CategoryListItem;
