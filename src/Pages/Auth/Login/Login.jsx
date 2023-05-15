import { Link, useLocation, useNavigate } from "react-router-dom";
import login from "../../../assets/assets/images/login/login.svg";
import { UserContext } from "../../../Context/AuthProvider/AuthProvider";
import { useContext } from "react";
import Swal from "sweetalert2";
const Login = () => {
  const { signIn } = useContext(UserContext);
  const naviget = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const handelLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    signIn(email, password)
      .then((result) => {
        const user = result.user;
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Login Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        const loggedUser = {
          email: user.email,
        };
        fetch(`https://car-service-server-side.vercel.app/jwt`,{
          method: "POST",
          headers:{'content-type': 'application/json'},
          body: JSON.stringify(loggedUser)
        })
        .then((res) => res.json())
        .then(data => {
          localStorage.setItem('carServiceToken',data.token);
        })
        naviget(from,{replace:true});
        form.reset();
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row gap-5 justify-between text-center">
        <div className="w-1/2">
          <img className="w-full" src={login} alt="" />
        </div>
        <div className="card border dark:border-gray-600  flex-shrink-0 md:w-1/2 shadow-2xl  p-2">
          <h3 className="text-center text-4xl font-semibold ">Login</h3>
          <form onSubmit={handelLogin}>
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text dark:text-white">Email</span>
                </label>
                <input
                  type="text"
                  name="email"
                  placeholder="email"
                  className="input input-bordered dark:bg-gray-700"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text dark:text-white">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered dark:bg-gray-700"
                  required
                />
                <label className="label">
                  <h3>Forgoten </h3>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn border-none bg-[#FF3811]">Login</button>
              </div>
              <div>
                <h3 className="">Or Sign In with</h3>
                <h4>
                  Have an account? <Link to="/signUp">Sign Up</Link>
                </h4>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
