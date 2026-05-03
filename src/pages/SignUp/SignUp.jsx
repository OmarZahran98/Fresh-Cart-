import {
  faShieldHalved,
  faStar,
  faTruckFast,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Review from "../../assets/Images/review-author.webp";
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { Await, Link, useNavigate } from "react-router";
import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";
import { toast } from "react-toastify";
import { useState } from "react";
import { CONFIG_API } from "../../config";
import { dataOfsignUp } from "../../Services/services";

export default function SignUp() {
const[isExist,setIsExist] = useState(null)

 const navigate = useNavigate()


  const passwordRegex =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/;
  const phoneRegex =
    /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
  const validationSchema = yup.object({
    name: yup.string().required("name is required*"),
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
    phone: yup
      .string()
      .required("phone number is required*")
      .matches(phoneRegex, "phone number is invalid*"),
    rePassword: yup
      .string()
      .required("confirm password is required*")
      .oneOf([yup.ref("password")], "passwords should be the same*"),
    terms: yup
      .boolean()
      .oneOf([true], "you must agree the terms and privacy policy"),
  });

  async function handleSignUp(values) {
    
    try {
    
      const response = await dataOfsignUp(values)
     
     if (response.success) {
      toast.success("Your Account has been Created");
       setTimeout(()=>{
         navigate("/Login")
       }, 3000)
      
     }
      
    } catch (error) {
      
      setIsExist(error.message)
      
    }
 
     
  
  }


  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      rePassword: "",
      phone: "",
      terms: false,
    },
    validationSchema,
    onSubmit: handleSignUp,
  });

  return (
    <>
      <main className="py-11 flex justify-center items-center h-full">
        <div className="container gap-12 grid lg:grid-cols-2 ">
          {/* Left Side */}
          <div className="space-y-9 py-10">
            <div>
              <h2 className="text-4xl font-bold">
                Welcome to <span className="text-primary-500">FreshCart</span>
              </h2>
              <p className="text-lg mt-2">
                Join thousands of happy customers who enjoy fresh groceries
                delivered right to their doorstep
              </p>
            </div>

            <ul className=" space-y-5 *:flex *:items-center *:gap-3 mt-6">
              <li>
                <div className="size-12 rounded-full bg-primary-200 text-primary-600 flex justify-center items-center text-xl">
                  <FontAwesomeIcon icon={faStar} />
                </div>
                <div>
                  <h4 className="font-semibold">Premium Quality</h4>
                  <p className="text-gray-500">
                    Premium quality products sourced from trusted suppliers.
                  </p>
                </div>
              </li>

              <li>
                <div className="size-12 rounded-full bg-primary-200 text-primary-600 flex justify-center items-center text-xl">
                  <FontAwesomeIcon icon={faTruckFast} />
                </div>
                <div>
                  <h4 className="font-semibold">Fast Delivery</h4>
                  <p className="text-gray-500">
                    Same-day delivery available in most areas
                  </p>
                </div>
              </li>

              <li>
                <div className="size-12 rounded-full bg-primary-200 text-primary-600 flex justify-center items-center text-xl">
                  <FontAwesomeIcon icon={faShieldHalved} />
                </div>
                <div>
                  <h4 className="font-semibold">Secure Shopping</h4>
                  <p className="text-gray-500">
                    Your data and payments are completely secure
                  </p>
                </div>
              </li>
            </ul>

            <div className="Testominial p-6 shadow-md rounded-xl">
              <div className="flex items-center gap-3">
                <img src={Review} className="size-12 rounded-full" alt="" />
                <div>
                  <h3>Sarah Johnson</h3>
                  <div>
                    <FontAwesomeIcon
                      icon={faStar}
                      className="text-yellow-400"
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      className="text-yellow-400"
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      className="text-yellow-400"
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      className="text-yellow-400"
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      className="text-yellow-400"
                    />
                  </div>
                </div>
              </div>

              <blockquote className="text-gray-700 italic">
                "FreshCart has transformed my shopping experience. The quality
                of the products is outstanding, and the delivery is always on
                time. Highly recommend!"
              </blockquote>
            </div>
          </div>

          {/* Right Side */}

          <div className="shadow-xl rounded-xl p-10 space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold">Create Your Account</h2>
              <p className="mt-2">Start your fresh journey with us today</p>
            </div>

            <div className="flex gap-2 *:flex *:items-center *:w-full *:gap-2 *:justify-center">
              <button className="px-4 py-2 rounded-lg bg-transparent border border-gray-400/40 hover:bg-gray-100 transition-colors duration-200">
                <FontAwesomeIcon icon={faGoogle} className="text-red-500" />
                <span>Google</span>
              </button>

              <button className="px-4 py-2 rounded-lg bg-transparent border border-gray-400/40 hover:bg-gray-100 transition-colors duration-200">
                <FontAwesomeIcon icon={faFacebook} className="text-blue-500" />
                <span>Facebook</span>
              </button>
            </div>

            <div className="relative w-full border-t border-gray-300 my-6">
              <span className="absolute left-1/2 -translate-x-1/2 -top-3 bg-white px-4 text-gray-500">
                {" "}
                or
              </span>
            </div>

            <form className="space-y-7" onSubmit={formik.handleSubmit}>
              <div className="flex flex-col gap-1">
                <label htmlFor="name">Name</label>
                <input
                  className="FormControl"
                  type="text"
                  id="name"
                  placeholder="Ali"
                  name="name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.name && formik.errors.name && (
                  <p className="text-red-500">{formik.errors.name}</p>
                )}
              </div>

              <div className="flex flex-col gap-1">
                <label htmlFor="email">Email</label>
                <input
                  className="FormControl"
                  type="email"
                  id="email"
                  placeholder="ali@example.com"
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.email && formik.errors.email && (
                  <p className="text-red-500">{formik.errors.email}</p>
                )}

              { isExist && <p className="text-red-500">{isExist}</p>}
              </div>

              <div className="flex flex-col gap-1">
                <label htmlFor="password">Password</label>
                <input
                  className="FormControl"
                  type="password"
                  id="password"
                  placeholder="create a strong password"
                  name="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />

                <div className="passwordStrength flex items-center">
                  <div className="bar rounded-xl overflow-hidden w-full h-1 bg-gray-500">
                    <div className="w-1/4 bg-red-500 h-full"></div>
                  </div>
                  <span>Weak</span>
                </div>
                {formik.touched.password && formik.errors.password ? (
                  <p className="text-red-500">{formik.errors.password}</p>
                ) : (
                  <p className="text-sm -mt-2">
                    Must be at least 8 characters with numbers and symbols
                  </p>
                )}
              </div>

              <div className="flex flex-col gap-1">
                <label htmlFor="rePassword">Confirm Password</label>
                <input
                  className="FormControl"
                  type="password"
                  id="rePassword"
                  placeholder="confirm your password"
                  name="rePassword"
                  value={formik.values.rePassword}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.rePassword && formik.errors.rePassword && (
                  <p className="text-red-500">{formik.errors.rePassword}</p>
                )}
              </div>

              <div className="flex flex-col gap-1">
                <label htmlFor="phone">Phone Number</label>
                <input
                  className="FormControl"
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="+2 234 567 8900"
                  value={formik.values.phone}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.phone && formik.errors.phone && (
                  <p className="text-red-500">{formik.errors.phone}</p>
                )}
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <input
                    className="accent-primary-600 size-4"
                    type="checkbox"
                    id="terms"
                    name="terms"
                    value={formik.values.terms}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />

                  <label htmlFor="terms">
                    I agree to the{" "}
                    <Link to={"/terms"} className="text-primary-500 underline">
                      Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link
                      to={"/privacy-policy"}
                      className="text-primary-500 underline"
                    >
                      Privacy Policy
                    </Link>{" "}
                    *
                  </label>
                </div>
                {formik.touched.terms && formik.errors.terms && (
                  <p className="text-red-500">{formik.errors.terms}</p>
                )}
              </div>

              <button
                className="w-full flex justify-center items-center gap-2 px-4 py-2 rounded-lg text-white border bg-primary-600 border-gray-400/40 hover:bg-primary-700 transition-colors duration-200"
                type="submit"
              >
                <FontAwesomeIcon icon={faUserPlus} />
                <span>Create My Account</span>
              </button>
            </form>
            <p className="text-center pt-8 border-t border-gray-300/50 ">
              Already have an account?{" "}
              <Link to={"/Login"} className="text-primary-500 underline">
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
