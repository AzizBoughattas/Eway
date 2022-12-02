import { Fragment } from "react";
import Footer from "./footer/Footer";
import classes from "./Home.module.css";
import MidSection from "./midsection/MidSection";
import TopSection from "./topsection/TopSection";

const MainHome = () => {
  return (
    <div className={classes.main__container}>
      <div>
      <TopSection />
      </div>
      <div>
      <MidSection />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default MainHome;
