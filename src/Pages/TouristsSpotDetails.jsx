import { useLoaderData, useParams } from "react-router-dom";

const TouristsSpotDetails = () => {
  const TouristSpots = useLoaderData();
  const { id } = useParams();
  const TouristSpot = TouristSpots.find(
    (TouristSpot) => TouristSpot._id === id
  );
  return (
    <div>
      <h1>{TouristSpot.id}</h1>
      <div>
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img
              src={TouristSpot.imageUrl}
              className="sm:w-auto lg:w-[75%] md:w-[50%] rounded-lg shadow-2xl"
            />
            <div>
              <h1 className="text-5xl font-bold">
                {TouristSpot.TouristsSpotName}
              </h1>
              <p className="py-6">{TouristSpot.shortDescription}</p>
              <p className="py-6">{TouristSpot.Location}</p>
              <div>
                <div className="flex gap-2">
                  <span>Country Name:</span>
                  <div className="badge badge-primary">
                    {TouristSpot.countryName}
                  </div>
                </div>
                <div className="flex gap-2">
                  <span>Seasonality:</span>
                  <div className="badge badge-primary">
                    {TouristSpot.Seasonality}
                  </div>
                </div>
                <div className="flex gap-2">
                  <span>averageCost:</span>
                  <div className="badge badge-primary">
                    {TouristSpot.averageCost}$
                  </div>
                </div>
                <div className="flex gap-2">
                  <span>Travel Time:</span>
                  <div className="badge badge-primary">
                    {TouristSpot.travelTime}days
                  </div>
                </div>

                <div className="flex gap-2">
                  <h1>Total Visitors Per Year:</h1>
                  <div className="badge badge-primary">
                    {TouristSpot.totalVisitorsPerYear}peoples
                  </div>
                </div>
              </div>{" "}
              <div className="divider divider-neutral">Author Info</div>
              <div className="lg:flex md:flex grid gap-2">
                <div className="avatar m-auto lg:m-1 md:m-1">
                  <div className="w-12 rounded-full">
                    <img src={TouristSpot.photoURL} />
                  </div>
                </div>
                <div>
                  <h1>
                    Author Name :{" "}
                    <span className="font-bold">{TouristSpot.displayName}</span>
                  </h1>
                  <h1>
                    <h1>
                      Author Email :{" "}
                      <span className="font-bold">{TouristSpot.userMail}</span>
                    </h1>
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TouristsSpotDetails;
