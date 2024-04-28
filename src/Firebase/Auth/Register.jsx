import { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../Firebase/Firebaseprovider";
import { Link } from "react-router-dom";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const handleRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const photoURL = e.target.photoURL.value;
    const displayName = e.target.displayName.value;
    console.log(email, password, photoURL, displayName);

    if (password.length < 6) {
      return toast.error("Password must be longer than 6 characters");
    } else if (!/[A-Z]/.test(password)) {
      return toast.error("Password must have at least one uppercase letter");
    } else if (!/[a-z]/.test(password)) {
      return toast.error("Password must have at least one lowercase letter");
    }
    createUser(email, password, displayName, photoURL)
      .then(() => {
        toast.success("Successfully Created Account");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register Now</h1>
            <p className="text-xl font-semibold">Already Have an Account? <span className="text-xl"><Link className="btn btn-ghost rounded" to={"/Login"}>Login</Link></span></p>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body" onSubmit={handleRegister}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="name"
                  className="input input-bordered"
                  name="displayName"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  name="email"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo Url</span>
                </label>
                <input
                  type="text"
                  placeholder="photourl"
                  className="input input-bordered"
                  name="photoURL"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  name="password"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
