import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const TouristsSpot = () => {
  const [data, setData] = useState([]);
  // const [sortBy, setSortBy] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/TouristSpots")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  const handleSort = (sortBy) => {
    console.log("Sorting by:", sortBy);
    let sortedData = [...data];
    if (sortBy === "asc") {
      sortedData.sort((a, b) => a.averageCost - b.averageCost);
    } else if (sortBy === "desc") {
      sortedData.sort((a, b) => b.averageCost - a.averageCost);
    }
    setData(sortedData);
  };

  return (
    <div className="m-4">
      <select
        onChange={(e) => handleSort(e.target.value)}
        className="select select-ghost w-full max-w-xs m-4"
      >
        <option value="">Sort by Average Cost</option>
        <option value="asc">Lowest to Highest</option>
        <option value="desc">Highest to Lowest</option>
      </select>

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
