function HomeHeader() {
  return (
    <div className="relative px-12 py-8">
      <div className="flex flex-col lg:flex-row items-center bg-white">
        <div className="lg:w-1/2 w-full mb-5">
          <h1 className="text-7xl font-bold text-[#707A59]">Made Locally</h1>
          <h1 className="text-7xl font-bold text-[#707A59]">Since 1987</h1>
        </div>
        <div className="lg:w-1/2 w-full">
          <p className="text-black">
            Italian Quality Furniture from the company "SOFL" is living rooms,
            bedrooms, children's and hallways, as well as upholstered furniture,
            italian quality furniture is bright design, high quality and it's
            functionality!
          </p>
        </div>
      </div>
      <div className="flex-col lg:flex-row flex gap-5 overflow-hidden">
        <div className="h-[500px] w-full lg:w-1/3 bg-black bg-[url('https://www.bria.com.ph/wp-content/uploads/2022/07/Wooden-Furniture-Pieces.png')] bg-cover bg-right bg-no-repeat" />
        <div className="h-[500px] w-full lg:w-1/3 bg-black bg-[url('https://assets-news.housing.com/news/wp-content/uploads/2020/09/15183141/Types-of-wood-used-for-making-furniture-in-India-FB-1200x700-compressed.jpg')] bg-cover bg-left bg-no-repeat" />
        <div className="h-[500px] w-full lg:w-1/3 bg-black bg-[url('https://classic.cdn.media.amplience.net/i/fv/bentley-duplex-light-wood-hero')] bg-cover bg-right bg-no-repeat" />
      </div>
    </div>
  );
}

export default HomeHeader;
