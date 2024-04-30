import { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../Firebase/Firebaseprovider";

const AddTouristsSpot = () => {
  const { user } = useContext(AuthContext);

  const handleAddSpot = (e) => {
    e.preventDefault();
    const imageUrl = e.target.imageUrl.value;
    const TouristsSpotName = e.target.TouristsSpotName.value;
    const countryName = e.target.countryName.value;
    const Location = e.target.Location.value;
    const shortDescription = e.target.shortDescription.value;
    const averageCost = e.target.averageCost.value;
    const Seasonality = e.target.Seasonality.value;
    const travelTime = e.target.averageCost.value;
    const totalVisitorsPerYear = e.target.totalVisitorsPerYear.value;

    const displayName = user.displayName;
    const userMail = user.email||"not available";
    const photoURL = user.photoURL||user.displayName;

    const newTouristSpot = {
      imageUrl,
      TouristsSpotName,
      countryName,
      Location,
      shortDescription,
      averageCost,
      Seasonality,
      travelTime,
      totalVisitorsPerYear,
      displayName,
      userMail,
      photoURL
    };

    if (countryName === "Select Country") {
      toast.error("Please Select a country");
      return;
    }

    if (Seasonality === "Select Seasonality") {
      toast.error("Please Select Seasonality");
      return;
    }

    fetch("http://localhost:5000/TouristSpots",{
      method:"POST",
      headers:{
        "content-type":"application/json"
      },
      body: JSON.stringify(newTouristSpot)
    })
      .then((res) => res.json())
      .then((data) => {console.log(data);toast.success("successfully added new tourists Spot")});
  };
  return (
    <div className="m-auto p-auto w-full sm:w-1/2 mb-8 sm:mb-0">
      <h1 className="text-2xl font-extrabold text-center m-4 p-4">
        Add Tourists Spot
      </h1>
      <div>
        <form action="" className="grid gap-2" onSubmit={handleAddSpot}>
          <div className="flex">
            <input 
              className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:outline-none"
              placeholder="Image URL"
              type="text"
              name="imageUrl"
              required
            />

            <input
              className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:outline-none"
              placeholder="Tourists Spot Name"
              type="text"
              name="TouristsSpotName"
              required
            />
          </div>
          <div className="flex gap-2">
            <input
              className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:outline-none"
              placeholder="Location"
              type="text"
              name="Location"
              required
            />
            <select
              className="select select-bordered w-full max-w-xs"
              name="countryName"
              defaultValue="Select Country"
            >
              <option value="Select Country">Select Country</option>
              <option value="Bangladesh">Bangladesh</option>
              <option value="Thailand">Thailand</option>
              <option value="Indonesia">Indonesia</option>
              <option value="Malaysia">Malaysia</option>
              <option value="Vietnam">Vietnam</option>
              <option value="Cambodia">Cambodia</option>
            </select>
          </div>
          <input
            className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:outline-none "
            placeholder="Short Description
            "
            type="text"
            name="shortDescription"
            required
          />
          <div className="flex gap-2">
            <input
              className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:outline-none "
              placeholder="Average Cost
            "
              type="text"
              name="averageCost"
              required
            />

            <select
              className="select select-bordered w-full max-w-xs"
              name="Seasonality"
              defaultValue="Select Seasonality"
            >
              <option value="Select Seasonality">Select Seasonality</option>
              <option value="Summer">Summer</option>
              <option value="RainySeason">Rainy Season</option>
              <option value="Autumn">Autumn</option>
              <option value="LateAutumn">Late Autumn</option>
              <option value="Winter">Winter</option>
              <option value="Spring">Spring</option>
            </select>
          </div>

          <div className="flex gap-2">
            <input
              className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:outline-none "
              placeholder="Travel Time
            "
              type="text"
              name="travelTime"
              required
            />

            <input
              className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:outline-none "
              placeholder="Total Visitors Per Year
            "
              type="text"
              name="totalVisitorsPerYear"
              required
            />
          </div>
          <button type="submit" className="btn btn-success">
            Add
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddTouristsSpot;
