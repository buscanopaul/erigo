type NumbersListItemProps = {
  item: object;
};

function NumbersListItem({item}: NumbersListItemProps) {
  return (
    <div className="w-20">
      <h3 className="font-bold text-4xl mb-2">{item.number}+</h3>
      <p>{item.title}</p>
    </div>
  );
}

export default NumbersListItem;
