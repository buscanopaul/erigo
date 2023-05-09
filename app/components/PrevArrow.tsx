function PrevArrow(props) {
  const {className, style, onClick} = props;
  return (
    <div
      className={className}
      onClick={onClick}
      style={{
        ...style,
        display: 'block',
      }}
    />
  );
}

export default PrevArrow;
