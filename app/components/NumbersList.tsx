import NumbersListItem from './NumbersListItem';

const DATA = [
  {
    id: '1',
    number: 800,
    title: 'Project Finished',
  },
  {
    id: '2',
    number: 200,
    title: 'Unique assortment',
  },
  {
    id: '3',
    number: 30,
    title: 'Across the country',
  },
];

function NumbersList() {
  return (
    <div className="lg:w-3/5 w-full lg:flex-row flex-col flex lg:gap-24 gap-14 items-start justify-start mt-8">
      {DATA.map((number) => (
        <NumbersListItem item={number} />
      ))}
    </div>
  );
}

export default NumbersList;
