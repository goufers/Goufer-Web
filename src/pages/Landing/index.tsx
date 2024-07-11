import Nav from "../../components/Nav";
import Banner from "./Banner";
import Trustedby from "./Trustedby";
import NewOppurtunities from "./NewOppurtunities";
import Footer from "../../components/Footer";

const Landing = () => {
  return (
    <div className="w-full h-auto">
      <Nav />
      <Banner />
      <NewOppurtunities />
      <Trustedby />
      <Footer />
    </div>
  );
};

export default Landing;
