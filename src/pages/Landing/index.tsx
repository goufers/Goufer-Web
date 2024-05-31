import Nav from "../../components/Nav";
import Banner from "./Banner";
import Trustedby from "./Trustedby";

import NewOppurtunities from "./NewOppurtunities";

const Landing = () => {
  return (
    <div className="w-full h-auto">
      <Nav />
      <Banner />
      <NewOppurtunities />
      <Trustedby />
    </div>
  );
 
};

export default Landing;
