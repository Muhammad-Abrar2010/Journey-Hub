import { useLoaderData, useParams } from "react-router-dom";

const TouristsSpotDetails = () => {
  const TouristSpots = useLoaderData();
  const { id } = useParams();
  const TouristSpot = TouristSpots.find(
    (TouristSpot) => TouristSpot._id === id
  );
  console.log(TouristSpot.countryName);
  return (
    <div>
      <h1>{TouristSpot.id}</h1>
      <div>
      <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src={TouristSpot.imageUrl} className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">{TouristSpot.TouristsSpotName}</h1>
      <p className="py-6">{TouristSpot.shortDescription}</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
      </div>
    </div>
  );
};

export default TouristsSpotDetails;
