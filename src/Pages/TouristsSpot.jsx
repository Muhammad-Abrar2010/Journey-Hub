import { useEffect, useState } from "react";
import { Link} from "react-router-dom";

const TouristsSpot = () => {
const [data, setData] = useState([]);

useEffect(() => {
    fetch("http://localhost:5000/TouristSpots")
      .then((res) => res.json())
      .then((data) => setData(data));
  });

  
  return (
    <div className="m-4">
      <div className="grid gap-4 lg:grid-cols-3 md:grid-cols-2">
        {data.map((tourist) => (
          <div key={tourist._id}>
            <div className="card w-auto bg-base-100 shadow-xl">
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
                    <Link
                      to={`/TouristSpot/${tourist._id}`}
                      className="btn btn-primary"
                    >
                      View Details
                    </Link>
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
