function NextArrow(props) {
  const {className, style, onClick} = props;
  return (
    <div
      className={className}
      onClick={onClick}
      style={{
        ...style,
        display: 'block',
        right: 50,
      }}
    />
  );
}

export default NextArrow;
