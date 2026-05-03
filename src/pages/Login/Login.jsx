import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import {
  faClock,
  faEnvelope,
  faEye,
  faEyeSlash,
  faLock,
  faShieldHalved,
  faStar,
  faTruck,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useFormik } from "formik";
import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { toast } from "react-toastify";
import * as yup from "yup";
import { dataOfLogin } from "../../Services/services";
import { AuthContext } from "../../Context/AuthContext";

export default function Login() {
  const location = useLocation();
  const from = location.state?.from || "/";
  const { setIsAuthenticated } = useContext(AuthContext);
  const [isShowen, setisShowen] = useState(false);
  const [isIncorrect, setisIncorrect] = useState("");
  const navigate = useNavigate();

  function ToggleShowen() {
    setisShowen(!isShowen);
  }

  function handleChange(e) {
    setisIncorrect("");
    formik.handleChange(e);
  }

  const passwordRegex =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/;

  const validationSchema = yup.object({
    email: yup
      .string()
      .required("email is required*")
      .email("email is invalid*"),
    password: yup
      .string()
      .required("password is required*")
      .matches(
        passwordRegex,
        "password should be at least eight characters, at least one upper case English letter, one lower case English letter, one number and one special character",
      ),
  });

  async function handleLogin(values) {
    try {
      const response = await dataOfLogin(values);

      if (response.success) {
        toast.success("Welcome Back");
        localStorage.setItem("IsToken", response.data.token);
        setIsAuthenticated(true);
        setTimeout(() => {
          navigate(from, { replace: true });
        }, 3000);
      }
    } catch (error) {
      setisIncorrect(error.message);
    }
  }

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      keepMeSigned: false,
    },
    validationSchema,
    onSubmit: handleLogin,
  });

  return (
    <>
      <div className="container mx-auto px-4 py-12" id="login-section">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left Side - Image/Branding */}
          <div className="hidden lg:block">
            <div className="text-center space-y-6">
              <img
                className="w-full h-96 object-cover rounded-2xl shadow-lg"
                src="https://storage.googleapis.com/uxpilot-auth.appspot.com/2e5810ff3e-e750761ebcd4ae5907db.png"
                alt="fresh vegetables and fruits shopping cart illustration, modern clean style, green theme"
              />

              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-gray-800">
                  FreshCart - Your One-Stop Shop for Fresh Products
                </h2>

                <p className="text-lg text-gray-600">
                  Join thousands of happy customers who trust FreshCart for
                  their daily grocery needs
                </p>

                <div className="flex items-center justify-center space-x-8 text-sm text-gray-500">
                  <div className="flex items-center">
                    <FontAwesomeIcon
                      icon={faTruck}
                      className="text-primary-600 mr-2"
                    />
                    Free Delivery
                  </div>

                  <div className="flex items-center">
                    <FontAwesomeIcon
                      icon={faShieldHalved}
                      className="text-primary-600 mr-2"
                    />
                    Secure Payment
                  </div>

                  <div className="flex items-center">
                    <FontAwesomeIcon
                      icon={faClock}
                      className="text-primary-600 mr-2"
                    />
                    Fast Support
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="">
            <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
              {/* Header Section */}
              <div className="text-center mb-8">
                <div className="flex items-center justify-center mb-4">
                  <span className="text-3xl font-bold text-primary-600">
                    Fresh<span className="text-gray-800">Cart</span>
                  </span>
                </div>
                <h1 className="text-2xl font-bold text-gray-800 mb-2">
                  Welcome Back!
                </h1>
                <p className="text-gray-600">
                  Sign in to continue your fresh shopping experience
                </p>
              </div>

              {/* Social Login Buttons */}
              <div className="space-y-3 mb-6">
                <button className="w-full flex items-center justify-center gap-3 py-3 px-4 border-2 border-gray-200 rounded-xl hover:bg-gray-50 transition-colors">
                  <FontAwesomeIcon icon={faGoogle} className="text-red-500" />
                  <span className="font-medium text-gray-700">
                    Continue with Google
                  </span>
                </button>

                <button className="w-full flex items-center justify-center gap-3 py-3 px-4 border-2 border-gray-200 rounded-xl hover:bg-gray-50 transition-colors">
                  <FontAwesomeIcon
                    icon={faFacebook}
                    className="text-blue-500"
                  />
                  <span className="font-medium text-gray-700">
                    Continue with Facebook
                  </span>
                </button>
              </div>

              {/* Divider */}
              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-200" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-white text-gray-500 font-medium">
                    OR CONTINUE WITH EMAIL
                  </span>
                </div>
              </div>

              {/* Credentials Form */}
              <form className="space-y-6" onSubmit={formik.handleSubmit}>
                {/* Email Field */}
                <div>
                  <label
                    className="block text-sm font-semibold text-gray-700 mb-2"
                    htmlFor="email"
                  >
                    Email Address
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      className="w-full px-4 py-3 pl-12 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-primary-600"
                      placeholder="Enter your email"
                      name="email"
                      id="email"
                      value={formik.values.email}
                      onChange={handleChange}
                      onBlur={formik.handleBlur}
                    />
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                    />
                  </div>
                  {formik.touched.email && formik.errors.email && (
                    <p className="text-red-500 text-sm mt-1">
                      {formik.errors.email}
                    </p>
                  )}
                </div>

                {/* Password Field */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label
                      className="block text-sm font-semibold text-gray-700"
                      htmlFor="password"
                    >
                      Password
                    </label>
                    <Link
                      to={""}
                      className="text-sm text-primary-600 hover:text-primary-700 cursor-pointer font-medium"
                    >
                      Forgot Password?
                    </Link>
                  </div>
                  <div className="relative">
                    <input
                      type={isShowen ? "text" : "password"}
                      className="w-full px-4 py-3 pl-12 pr-12 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-primary-600"
                      placeholder="Enter your password"
                      name="password"
                      id="password"
                      value={formik.values.password}
                      onChange={handleChange}
                      onBlur={formik.handleBlur}
                    />
                    <FontAwesomeIcon
                      icon={faLock}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                    />
                    <button
                      onClick={ToggleShowen}
                      type="button"
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      {isShowen ? (
                        <FontAwesomeIcon icon={faEyeSlash} />
                      ) : (
                        <FontAwesomeIcon icon={faEye} />
                      )}
                    </button>
                  </div>
                  {formik.touched.password && formik.errors.password && (
                    <p className="text-red-500 text-sm mt-1">
                      *{formik.errors.password}
                    </p>
                  )}

                  {isIncorrect && (
                    <p className="text-red-500 text-sm mt-1">*{isIncorrect}</p>
                  )}
                </div>

                {/* Remember Me */}
                <div className="flex items-center justify-between">
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      className="h-4 w-4 text-primary-600 border-2 border-gray-300 rounded focus:ring-primary-500"
                    />
                    <span className="ml-3 text-sm text-gray-700">
                      Keep me signed in
                    </span>
                  </label>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-linear-to-r from-primary-600 to-primary-700 text-white py-3 px-4 rounded-xl hover:opacity-90 transition-opacity font-bold mt-4"
                >
                  Sign In
                </button>
              </form>

              {/* Footer Link */}
              <div className="text-center mt-8 pt-6 border-t border-gray-100">
                <p className="text-gray-600">
                  New to FreshCart?{" "}
                  <Link
                    to={"/SignUp"}
                    className="text-primary-600 hover:text-primary-700 font-semibold cursor-pointer"
                  >
                    Create an account
                  </Link>
                </p>
              </div>

              {/* Trust Badges */}
              <div className="flex items-center justify-center space-x-6 mt-6 text-xs text-gray-500">
                <div className="flex items-center">
                  <FontAwesomeIcon icon={faLock} className="mr-1" />
                  SSL Secured
                </div>
                <div className="flex items-center">
                  <FontAwesomeIcon icon={faUsers} className="mr-1" />
                  50K+ Users
                </div>
                <div className="flex items-center">
                  <FontAwesomeIcon icon={faStar} className="mr-1" />
                  4.9 Rating
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
