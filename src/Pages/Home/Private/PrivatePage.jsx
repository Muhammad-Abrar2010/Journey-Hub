import { useContext, useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../../../Firebase/Firebaseprovider";
import { MoonLoader } from "react-spinners";


const PrivatePage = ({ children }) => {
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // If user is already logged in, set loading to false immediately
    if (user) {
      setLoading(false);
    } else {
      // If user is not logged in, wait for a short delay before setting loading to false
      const delay = setTimeout(() => {
        setLoading(false);
      }, 1000); // Adjust delay time as needed

      // Cleanup function to clear the timeout
      return () => clearTimeout(delay);
    }
  }, [user]);

  if (loading) {
    // Render a loading indicator while checking authentication status
    return <MoonLoader/>;
  }

  if (user) {
    // If user is authenticated, render the children
    return children;
  } else {
    // If user is not authenticated, navigate to the login page
    return <Navigate to={"/Login"} />;
  }
};

export default PrivatePage;
