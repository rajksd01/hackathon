import CategoriesList from "../components/CategoriesList.jsx";
import CustomerReview from "../components/CustomerReview.jsx";
import Footer from "../components/Footer.jsx";
import Header from "../components/Header.jsx";
import SingleServiceContainer from "../components/SingleServiceContainer.jsx";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Header />
      <CategoriesList name={"Home Repair Services"} />
      <CategoriesList name={"Cleaning & Pest Control"} />
      <SingleServiceContainer />
      <CategoriesList name={"AC & Appliances"} />
      <CustomerReview />

      <Footer />
    </div>
  );
}
