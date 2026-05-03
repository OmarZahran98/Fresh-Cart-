import { createBrowserRouter, RouterProvider } from "react-router";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import Cart from "./pages/Cart/Cart";
import Brands from "./pages/Brands/Brands";
import Categories from "./pages/Categories/Categories";
import Checkout from "./pages/Checkout/Checkout";
import ForgetPassword from "./pages/ForgetPassword/ForgetPassword";
import Notfound from "./pages/Notfound/Notfound";
import Orders from "./pages/Orders/Orders";
import VerifyEmail from "./pages/VerifyEmail/VerifyEmail";
import WishList from "./pages/WishList/WishList";
import { ToastContainer } from "react-toastify";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import ProductsProvider from "./Context/ProductContest";
import ContactUs from "./pages/ContactUs/ContactUs";
import Shop from "./pages/Shop/Shop";
import AuthProvider from "./Context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import CartProvider from "./Context/CartContext";
import WishlistProvider from "./Context/WishlistContext";


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "signup",
          element: <SignUp />,
        },
        {
          path: "cart",
          element: <ProtectedRoute>
            <Cart />
          </ProtectedRoute>,
        },
        {
          path: "brands",
          element: <Brands />,
        },
        {
          path: "categories",
          element: <Categories />,
        },
        {
          path: "checkout",
          element: <ProtectedRoute>
            <Checkout />
          </ProtectedRoute>,
        },
        {
          path: "forgetpassword",
          element: <ForgetPassword />,
        },
        {
          path: "*",
          element: <Notfound />,
        },
        {
          path: "orders",
          element: <Orders />,
        },
        {
          path: "productdetails/:id",
          element: <ProductDetails />,
        },
        {
          path: "verifyemail",
          element: <VerifyEmail />,
        },
        {
          path: "wishlist",
          element: <ProtectedRoute>
            <WishList />
          </ProtectedRoute>,
        },
        {
          path: "contactus",
          element: <ContactUs />,
        },
        {
          path: "shop",
          element: <Shop />,
        },
      ],
    },
  ]);

  return (
    <>
      <AuthProvider>
        <CartProvider>
          <WishlistProvider>
            <ProductsProvider>
              <RouterProvider router={router} />
              <ToastContainer
                position="top-right"
                autoClose={3000}
                closeButton={false}
                closeOnClick={true}
              />
            </ProductsProvider>
          </WishlistProvider>
        </CartProvider>
      </AuthProvider>
    </>
  );
}

export default App;
