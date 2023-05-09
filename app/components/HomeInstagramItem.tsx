type HomeInstagramProps = {
  furnitureBg: string;
};

function HomeInstagramItem({furnitureBg}: HomeInstagramProps) {
  return (
    <div
      style={{'--image-url': `url(${furnitureBg})`}}
      className="mr-5 h-60 relative bg-[image:var(--image-url)] bg-center bg-no-repeat bg-cover"
    ></div>
  );
}

export default HomeInstagramItem;
