import NumbersList from './NumbersList';

function AboutUs() {
  return (
    <div className="px-12 py-8 flex lg:flex-row flex-col mt-10">
      <NumbersList />
      <div className="lg:w-2/5 w-full mt-10 lg:mt-0">
        <h2 className="font-bold text-5xl mb-3">About us</h2>
        <p>
          The Woodee company was founded in 2021, Initially the direction of
          activity was the manufacture of joinery. As the organization grew and
          developed, production inevitably expanded.
        </p>
      </div>
    </div>
  );
}

export default AboutUs;
