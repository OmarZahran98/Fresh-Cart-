import React, { useRef } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { Link, useNavigate } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMoneyBillWave,
  faCircleInfo,
  faCreditCard,
  faArrowRightLong,
  faChevronLeft,
  faLock,
  faReceipt,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import { CartContext } from "../../Context/CartContext";
import { useContext } from "react";
import { createOrder } from "../../Services/Payment-Service";
import { toast } from "react-toastify";

export default function Checkout() {
  const { CartInfo } = useContext(CartContext);
  const navigate = useNavigate();
  const formRef = useRef(null);

  const validationSchema = yup.object({
    shippingAddress: yup.object({
      details: yup.string().required("Address is required"),
      phone: yup
        .string()
        .required("Phone is required")
        .matches(/^(\+2)?01[0125][0-9]{8}$/, "Phone number is invalid"),
      city: yup.string().required("City is required"),
    }),
  });

  async function HandleCreatingOrders(values) {
    try {
      const cartId = CartInfo?._id || CartInfo?.data?._id;
      if (!cartId) {
        toast.error("Cart not found");
        return;
      }

      const response = await createOrder({
        paymentMethod: values.paymentmethod,
        cartId,
        shippingAddress: values.shippingAddress,
      });

      if (response?.success) {
        if (values.paymentmethod === "cod") {
          toast.success("Order placed successfully!");
          navigate("/orders");
        } else if (response.data?.session?.url) {
          window.location.href = response.data.session.url;
        }
      } else {
        toast.error(response?.message || "Failed to create order");
      }
    } catch (error) {
      toast.error("An error occurred while placing order");
      console.error(error);
    }
  }

  const formik = useFormik({
    initialValues: {
      shippingAddress: {
        details: "",
        phone: "",
        city: "",
      },
      paymentmethod: "online",
    },
    validationSchema,
    onSubmit: HandleCreatingOrders,
  });

  const handleFormSubmit = () => {
    formik.handleSubmit();
  };

  // Get cart data from context
  const products = CartInfo?.products || CartInfo?.data?.products || [];
  const totalCartPrice =
    CartInfo?.totalCartPrice || CartInfo?.data?.totalCartPrice || 0;
  const numOfCartItems =
    CartInfo?.numOfCartItems || CartInfo?.data?.numOfCartItems || 0;
  const shippingCost = 70;
  const tax = Math.round(totalCartPrice * 0.14);
  const total = totalCartPrice + shippingCost + tax;

  return (
    <section>
      <div className="container max-w-6xl py-6 mx-auto space-y-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="gap-4">
            <div className="flex items-center gap-3">
              <span className="bg-linear-to-br from-primary-600 to-primary-700 text-white w-12 h-12 rounded-xl flex items-center justify-center shadow-lg shadow-primary-600/20">
                <FontAwesomeIcon className="text-3xl" icon={faReceipt} />
              </span>
              <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
                Complete Your Order
              </h1>
            </div>
            <p class="text-gray-500 mt-2">
              Review your items and complete your purchase
            </p>
          </div>

          <Link
            to={"/cart"}
            className="text-primary-600 hover:text-primary-700 font-medium flex items-center gap-2 px-4 py-2 rounded-lg transition-all"
          >
            <FontAwesomeIcon icon={faArrowLeft} />
            Back to Cart
          </Link>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Left Column: Form */}
          <form
            ref={formRef}
            className="payment-method lg:col-span-8"
            onSubmit={formik.handleSubmit}
          >
            {/* Payment Method Section */}
            <div className="payment-options bg-white shadow-sm p-6 rounded-lg mb-6">
              <h2 className="text-xl font-semibold mb-6">Payment Method</h2>

              {/* Cash on Delivery Option */}
              <div>
                <label
                  htmlFor="cod"
                  className={`flex gap-4 items-start border transition-colors duration-300 p-4 rounded-lg cursor-pointer ${
                    formik.values.paymentmethod === "cod"
                      ? "border-green-500 bg-green-50"
                      : "border-gray-200 hover:border-primary-600"
                  }`}
                >
                  <input
                    type="radio"
                    name="payment-method"
                    value="cod"
                    id="cod"
                    onChange={(e) => {
                      formik.setFieldValue("paymentmethod", e.target.value);
                    }}
                    checked={formik.values.paymentmethod === "cod"}
                    className="size-4 mt-1"
                  />
                  <div className="flex-1">
                    <div className="w-full flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div
                          className={`w-12 h-12 rounded-full flex items-center justify-center ${
                            formik.values.paymentmethod === "cod"
                              ? "bg-green-100"
                              : "bg-gray-100"
                          }`}
                        >
                          <FontAwesomeIcon
                            icon={faMoneyBillWave}
                            className={`text-xl ${
                              formik.values.paymentmethod === "cod"
                                ? "text-green-600"
                                : "text-primary-600"
                            }`}
                          />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">
                            Cash on Delivery
                          </h3>
                          <p className="text-gray-500 text-sm">
                            Pay when your order arrives at your doorstep
                          </p>
                        </div>
                      </div>
                      <span className="text-green-600 font-medium bg-green-100 px-3 py-1 rounded-full text-sm">
                        Free
                      </span>
                    </div>

                    {formik.values.paymentmethod === "cod" && (
                      <div className="mt-4 ml-16">
                        <div className="bg-green-100 border border-green-200 p-4 rounded-lg">
                          <div className="flex items-start gap-3">
                            <FontAwesomeIcon
                              icon={faCircleInfo}
                              className="text-green-600 mt-0.5"
                            />
                            <div>
                              <p className="text-sm font-medium text-green-800">
                                Delivery Information
                              </p>
                              <p className="text-sm text-green-700 mt-1">
                                Please keep exact change ready for hassle-free
                                delivery. Our delivery partner will collect the
                                payment upon arrival.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </label>
              </div>

              {/* Online Payment Option */}
              <label
                htmlFor="online"
                className={`mt-5 flex gap-4 items-start border transition-colors duration-300 p-4 rounded-lg cursor-pointer ${
                  formik.values.paymentmethod === "online"
                    ? "border-blue-500 bg-blue-50"
                    : "border-gray-200 hover:border-primary-600"
                }`}
              >
                <input
                  type="radio"
                  name="payment-method"
                  value="online"
                  id="online"
                  onChange={(e) => {
                    formik.setFieldValue("paymentmethod", e.target.value);
                  }}
                  checked={formik.values.paymentmethod === "online"}
                  className="size-4 mt-1"
                />
                <div className="flex-1">
                  <div className="w-full flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-12 h-12 rounded-full flex items-center justify-center ${
                          formik.values.paymentmethod === "online"
                            ? "bg-blue-100"
                            : "bg-gray-100"
                        }`}
                      >
                        <FontAwesomeIcon
                          icon={faCreditCard}
                          className={`text-xl ${
                            formik.values.paymentmethod === "online"
                              ? "text-blue-600"
                              : "text-primary-600"
                          }`}
                        />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">
                          Online Payment
                        </h3>
                        <p className="text-gray-500 text-sm">
                          Pay securely with card or digital wallet
                        </p>
                      </div>
                    </div>
                    <span className="text-blue-600 font-medium bg-blue-100 px-3 py-1 rounded-full text-sm">
                      Recommended
                    </span>
                  </div>

                  {formik.values.paymentmethod === "online" && (
                    <div className="mt-4 ml-16">
                      <div className="bg-blue-100 border border-blue-200 p-4 rounded-lg">
                        <div className="flex items-start gap-3">
                          <FontAwesomeIcon
                            icon={faCircleInfo}
                            className="text-blue-600 mt-0.5"
                          />
                          <div>
                            <p className="text-sm font-medium text-blue-800">
                              Secure Payment
                            </p>
                            <p className="text-sm text-blue-700 mt-1">
                              You will be redirected to secure payment gateway
                              to complete your transaction
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </label>
            </div>

            {/* Shipping Address Section */}
            <div className="shipping-address bg-white shadow-sm p-6 rounded-lg">
              <h2 className="text-xl font-semibold mb-4">Shipping Address</h2>

              <div className="address flex flex-col gap-2">
                <label htmlFor="addressDetails" className="text-sm">
                  Address Details *
                </label>
                <textarea
                  id="addressDetails"
                  name="shippingAddress.details"
                  placeholder="Enter Your Full Address Details"
                  className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                  value={formik.values.shippingAddress.details}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.shippingAddress?.details &&
                  formik.errors.shippingAddress?.details && (
                    <p className="text-red-500 text-sm mt-1">
                      {formik.errors.shippingAddress.details}
                    </p>
                  )}
              </div>

              <div className="mt-3 flex gap-3 *:grow">
                <div className="phone flex flex-col gap-2">
                  <label htmlFor="phone" className="text-sm">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="shippingAddress.phone"
                    placeholder="01097514862"
                    className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                    value={formik.values.shippingAddress.phone}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.shippingAddress?.phone &&
                    formik.errors.shippingAddress?.phone && (
                      <p className="text-red-500 text-sm mt-1">
                        {formik.errors.shippingAddress.phone}
                      </p>
                    )}
                </div>

                <div className="city flex flex-col gap-2">
                  <label htmlFor="city" className="text-sm">
                    City *
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="shippingAddress.city"
                    placeholder="Sadat City"
                    className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                    value={formik.values.shippingAddress.city}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.shippingAddress?.city &&
                    formik.errors.shippingAddress?.city && (
                      <p className="text-red-500 text-sm mt-1">
                        {formik.errors.shippingAddress.city}
                      </p>
                    )}
                </div>
              </div>
            </div>
          </form>

          {/* Right Column: Order Summary */}
          <div className="order-summary lg:col-span-4">
            <div className="sticky top-10 bg-white shadow-sm rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4">Order Summary</h2>

              <div className="cart-items border-b border-gray-500/20 pb-3">
                {products.length > 0 ? (
                  products.map((product) => (
                    <div
                      key={product.id}
                      className="text-sm item flex gap-2 items-center mb-3"
                    >
                      <img
                        src={
                          product.product?.imageCover ||
                          product.imageCover ||
                          "https://ecommerce.routemisr.com/Route-Academy-products/1680400287654-cover.jpeg"
                        }
                        alt={product.product?.name || "Product"}
                        className="size-12 object-cover rounded-lg"
                      />
                      <div>
                        <h3 className="font-semibold">
                          {product.product?.name || "Product"}
                        </h3>
                        <span className="text-xs text-gray-500">
                          Qty: {product.count}
                        </span>
                      </div>
                      <span className="ms-auto">
                        {product.price * (product.count || 1)} EGP
                      </span>
                    </div>
                  ))
                ) : (
                  <div className="text-sm text-gray-500 text-center py-4">
                    No items in cart
                  </div>
                )}
              </div>

              <ul className="py-3 space-y-3 *:flex *:justify-between *:items-center">
                <li>
                  <span>Subtotal</span>
                  <span>{totalCartPrice} EGP</span>
                </li>
                <li>
                  <span>Delivery</span>
                  <span>{shippingCost} EGP</span>
                </li>
                <li>
                  <span>Tax (14%)</span>
                  <span>{tax} EGP</span>
                </li>
                <li className="font-semibold border-t border-gray-500/20 pt-3">
                  <span>Total</span>
                  <span>{total} EGP</span>
                </li>
              </ul>

              {/* Submit Buttons in Right Column */}
              <div className="btn-group mt-6">
                <button
                  type="button"
                  onClick={handleFormSubmit}
                  className="btn font-normal py-3 bg-primary-600 text-white flex justify-center gap-2 items-center w-full rounded-md hover:bg-primary-700 transition"
                >
                  <span>Proceed to Payment</span>
                  <FontAwesomeIcon icon={faArrowRightLong} />
                </button>
                <Link
                  to="/cart"
                  className="my-3 btn font-normal py-3 bg-white border border-gray-500/30 text-gray-600 flex justify-center gap-2 items-center w-full rounded-md hover:bg-gray-50 transition"
                >
                  <FontAwesomeIcon icon={faChevronLeft} />
                  <span>Previous Step</span>
                </Link>
              </div>

              <div className="mt-4">
                <h3 className="mb-2 font-semibold">Secure Checkout</h3>
                <p className="text-sm space-x-1 flex items-center">
                  <FontAwesomeIcon icon={faLock} className="text-primary-600" />
                  <span className="text-gray-500">
                    Your payment information is secure
                  </span>
                </p>
                <div className="flex items-center mt-4 space-x-2"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
