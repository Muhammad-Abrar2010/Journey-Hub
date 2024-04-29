import { useLoaderData } from "react-router-dom";

const TouristsSpot = () => {
  const tourists = useLoaderData();
  return (
    <div className="m-4 p-8">
      <div className="grid gap-8 lg:grid-cols-3 md:grid-cols-2">
        {tourists.map((tourist) => (
          <div key={tourist._id}>
            <div className="card w-96 bg-base-100 shadow-xl">
              <figure>
                <img src={tourist.imageUrl} alt={tourist.TouristsSpotName} />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{tourist.TouristsSpotName}</h2>
                <p>{tourist.shortDescription}</p>
                <div className="card-actions justify-end">
                  <div className="badge">Auther:</div>
                  <div className="badge badge-outline">
                    {tourist.displayName}
                  </div>
                </div>
                <div>
                  <div>
                    <button className="btn btn-primary">View Details</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TouristsSpot;
