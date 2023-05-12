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
        color: '#707A58',
      }}
    />
  );
}

export default NextArrow;
