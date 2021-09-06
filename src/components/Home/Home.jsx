import site from "../../index.module.css";
import classes from "./Home.module.css";
import binary from "./../../images/binary-world.png";
import tcLogoSmall from "./../../images/TCLogoOnly.png";

const Home = () => {
  return (
    <div className={classes.Home} id="home">
      <div className={site.Container}>
        <div className={`${site.colMd6} ${site.order1}`}>
          <h1 className={classes.Hello}>Hello World!</h1>
          <h2 className={classes.Me}>Seth Bowman's Portfolio Site</h2>
        </div>
        <div className={`${site.colMd6} ${site.order2}`}>
          <img
            className={`${site.imgFluid} ${classes.imageHeading}`}
            src={binary}
            alt="Binary"
          />
        </div>
        <div className={`${site.colMd6} ${site.order3}`}>
          <img
            className={site.imgFluid}
            src={tcLogoSmall}
            alt="Tc Logo- Small"
            style={{ height: "100px", width: "auto" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
