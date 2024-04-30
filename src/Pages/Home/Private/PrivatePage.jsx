import { useContext } from "react";
import { AuthContext } from "../../Firebase/Firebaseprovider";
import { Link } from "react-router-dom";

const PrivatePage = ({ children }) => {
  const { user } = useContext(AuthContext);
  if (user) {
    return children;
  } else {
    return (
      <div className="flex justify-center m-4">
        {" "}
        <div className="card w-96 bg-neutral text-neutral-content">
          <div className="card-body items-center text-center">
            <h2 className="card-title">⚠Protected Content ⚠</h2>
            <p>You must Sign In or Sign Up to view this</p>
            <div className="card-actions justify-end">
              <Link to={"/Register"} className="btn btn-primary">
                Sign Up
              </Link>
              <Link to={"/Login"} className="btn btn-secondary">
                Sign In
              </Link>
            </div>
          </div>
        </div>{" "}
      </div>
    );
  }
};

export default PrivatePage;
