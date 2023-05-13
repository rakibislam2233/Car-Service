import { Link,  } from "react-router-dom";
import login from "../../../assets/assets/images/login/login.svg";
import { BsFacebook, BsGoogle, BsLinkedin } from "react-icons/bs";
const SignUp = () => {
  const handelSignUp = e =>{
    e.preventDefault()
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    createUser(email, password)
    .then(result=>{
      const user = result.user;
      updateUser(user,name)
      toast.success('User Successfully created!');
      naviget('/login')
      form.reset()
    })
    .catch(err => {
      console.log(err.message);
    })
  }
  const updateUser = (user,name,photoUrl)=>{
    updateProfile(user,{
      displayName:name,
      photoURL:photoUrl
    })
  }
    return (
        <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row gap-5 justify-between text-center">
          <div className="w-1/2">
            <img src={login} alt="" />
          </div>
         <form className="card border dark:border-gray-600  flex-shrink-0 md:w-1/2 shadow-2xl  py-2 p-2" onSubmit={handelSignUp}>
         <div>
            <h3 className="text-center text-4xl font-semibold">Sign Up</h3>
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text dark:text-white">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  className="input input-bordered dark:bg-slate-700"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text dark:text-white">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="input input-bordered dark:bg-slate-700"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text dark:text-white">PhotUrl</span>
                </label>
                <input
                  type="url"
                  name="photUrl"
                  placeholder="Enter your photo URL"
                  className="input input-bordered dark:bg-slate-700"
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
                  placeholder="Enter your password"
                  className="input input-bordered dark:bg-slate-700"
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn border-none bg-[#FF3811]">Sigin Up</button>
              </div>
              <div>
                <h3 className="">Or Sign Up with</h3>
  
                {/* <div className="flex justify-center space-x-3 py-5">
                  <button>
                    <BsFacebook className="w-6 h-6"></BsFacebook>
                  </button>
                  <button>
                    <BsGoogle className="w-6 h-6"></BsGoogle>
                  </button>
                  <button>
                    <BsLinkedin className="w-6 h-6"></BsLinkedin>
                  </button>
                </div> */}
                <h4>
                Already have an account? <Link to="/login"> Login</Link>
                </h4>
              </div>
            </div>
          </div>
         </form>
        </div>
      </div>
    );
};

export default SignUp;