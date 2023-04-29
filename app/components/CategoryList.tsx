import CategoryListItem from './CategoryListItem';

const CATEGORIES = [
  {
    id: '1',
    name: 'Desk',
  },
  {
    id: '2',
    name: 'Chair',
  },
  {
    id: '3',
    name: 'Box-Wear',
  },
  {
    id: '4',
    name: 'Designing Tables',
  },
  {
    id: '5',
    name: 'Sleeve',
  },
];

function CategoryList() {
  return (
    <div className="flex gap-3 flex-wrap">
      {CATEGORIES.map((category) => (
        <CategoryListItem category={category} />
      ))}
    </div>
  );
}

export default CategoryList;
