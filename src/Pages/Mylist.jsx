// // import { useState, useEffect, useContext } from "react";
// // import { AuthContext } from "../Firebase/Firebaseprovider";
// // import Swal from "sweetalert2";
// // import { Link } from "react-router-dom";
// // import ClipLoader from "react-spinners/ClipLoader";


// // const Mylist = () => {
// //   const { user } = useContext(AuthContext);

// //   const [data, setData] = useState([]);
// //   const [filteredSpots, setFilteredSpots] = useState([]);

// //   useEffect(() => {
// //     fetch("http://localhost:5000/TouristSpots")
// //       .then((res) => res.json())
// //       .then((data) => setData(data));
// //   }, []);

// //   useEffect(() => {
// //     if (user) {
// //       const filtered = data.filter(
// //         (tourist) => tourist.userMail === user.email
// //       );
// //       setFilteredSpots(filtered);
// //     } else {
// //       setFilteredSpots([]);
// //     }
// //   }, [user, data]);

// //   return (
// //     <div className="m-4">
// //       <h2>My Tourist Spots</h2>
// //       <table className="table table-striped">
// //         <thead>
// //           <tr>
// //             <th>Name</th>
// //             <th>Description</th>
// //             <th>Actions</th>
// //           </tr>
// //         </thead>
// //         <tbody>
// //          {filteredSpots.map((tourist) => (
// //             <tr key={tourist._id}>
// //               <td>{tourist.TouristsSpotName}</td>
// //               <td>{tourist.shortDescription}</td>
// //               <td>
// //                 <div className="flex gap-2">
// //                   <Link className="btn btn-neutral" to={`/UpdateTouristsSpot/${tourist._id}`}>Update</Link>
// //                   <button
// //                     className="btn btn-primary"
// //                     onClick={() => {
// //                       Swal.fire({
// //                         title: "Are you sure?",
// //                         text: "You won't be able to revert this!",
// //                         icon: "warning",
// //                         showCancelButton: true,
// //                         confirmButtonColor: "#3085d6",
// //                         cancelButtonColor: "#d33",
// //                         confirmButtonText: "Yes, delete it!",
// //                       }).then((result) => {
// //                         if (result.isConfirmed) {
// //                           fetch(
// //                             `http://localhost:5000/TouristSpots/${tourist._id}`,
// //                             {
// //                               method: "DELETE",
// //                             }
// //                           )
// //                             .then((res) => res.json())
// //                             .then((data) => {
// //                               console.log(data);

// //                               window.location.reload();

// //                               if (data.deletedCount > 0)
// //                                 Swal.fire({
// //                                   title: "Deleted!",
// //                                   text: "Your TouristSpot has been deleted.",
// //                                   icon: "success",
// //                                 });
// //                             });
// //                         }
// //                       });
// //                     }}
// //                   >
// //                     Delete
// //                   </button>
// //                 </div>
// //               </td>
// //             </tr>
// //           ))}
// //         </tbody>
// //       </table>
// //     </div>
// //   );
// // };

// // export default Mylist;


import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../Firebase/Firebaseprovider";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";

const Mylist = () => {
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(true); // State for loading indicator
  const [data, setData] = useState([]);
  const [filteredSpots, setFilteredSpots] = useState([]);

  useEffect(() => {
    // Simulate a loading delay of 3 seconds
    const delay = setTimeout(() => {
      fetch("http://localhost:5000/TouristSpots")
        .then((res) => res.json())
        .then((data) => {
          setData(data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
          setLoading(false); 
        });
    }, 500);

    return () => clearTimeout(delay);
  }, []);

  useEffect(() => {
    if (user) {
      const filtered = data.filter(
        (tourist) => tourist.userMail === user.email
      );
      setFilteredSpots(filtered);
    } else {
      setFilteredSpots([]);
    }
  }, [user, data]);

  return (
    <div className="m-4">
      <h2>My Tourist Spots</h2>
      {loading ? ( 
        <ClipLoader color={"#123abc"} loading={loading} size={50} />
      ) : (
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredSpots.map((tourist) => (
              <tr key={tourist._id}>
                <td>{tourist.TouristsSpotName}</td>
                <td>{tourist.shortDescription}</td>
                <td>
                  <div className="flex gap-2">
                    <Link
                      className="btn btn-neutral"
                      to={`/UpdateTouristsSpot/${tourist._id}`}
                    >
                      Update
                    </Link>
                    <button
                      className="btn btn-primary"
                      onClick={() => {
                        Swal.fire({
                          title: "Are you sure?",
                          text: "You won't be able to revert this!",
                          icon: "warning",
                          showCancelButton: true,
                          confirmButtonColor: "#3085d6",
                          cancelButtonColor: "#d33",
                          confirmButtonText: "Yes, delete it!",
                        }).then((result) => {
                          if (result.isConfirmed) {
                            fetch(
                              `http://localhost:5000/TouristSpots/${tourist._id}`,
                              {
                                method: "DELETE",
                              }
                            )
                              .then((res) => res.json())
                              .then((data) => {
                                console.log(data);

                                window.location.reload();

                                if (data.deletedCount > 0)
                                  Swal.fire({
                                    title: "Deleted!",
                                    text: "Your TouristSpot has been deleted.",
                                    icon: "success",
                                  });
                              });
                          }
                        });
                      }}
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Mylist;


