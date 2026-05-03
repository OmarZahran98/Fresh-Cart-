import { Outlet } from "react-router";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import Section from "../section/Section";

export default function Layout() {
  return (
    <>
    <Navbar/>
    <Outlet/>
    <Section/>
    <Footer/>
    </>
  )
}
