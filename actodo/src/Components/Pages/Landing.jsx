import Header from "../Header";
import Card from "../Card";
import Todocontainer from "../Todocontainer";
import { useLocation } from "react-router-dom";

function Landing() {
  const data = useLocation(); // Get location state

  return (
    <div className="bg-black p-16">
      <div className="bg-white p-10 border rounded-md">
        {/* HEADER */}
        <Header username={data.state?.user} /> {/* Pass the correct prop */}

        {/* Card */}
        <div className="flex justify-between gap-6 my-5 flex-wrap">
          <Card bgcolor={"#a78bfa"} title={"23°C"} subtitle={"Chennai"} />
          <Card bgcolor={"#f59e0b"} title={"March 11"} subtitle={"11:11:11"} />
          <Card bgcolor={"#f87171"} title={"Build Using"} subtitle={"React"} />
        </div>

        {/* Todo Container */}
        <Todocontainer />
      </div>
    </div>
  );
}

export default Landing;
