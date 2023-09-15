import site from "../../index.module.css";
import classes from "./About.module.css";
import PageHeader from "../PageHeader/PageHeader.js";
import me from "./../../images/headshot.jpg";

const About = () => {
  return (
    <div className={classes.AboutMe} id="about">
      <div className={site.Container}>
        {/* <PageHeader title={"About Me"} /> */}
        <div className={site.colMd12}>
          <h1>About Me</h1>
          <hr />
        </div>
        <div className={site.colMd6}>
          <h2>Seth Bowman</h2>
          <p>
            "I am honored to work as a software engineer instructor at TrueCoders, a well-regarded programming school in Hoover, AL.
             With formal qualifications in web development and software engineering, I am passionate about guiding and inspiring students from diverse backgrounds. 
             Witnessing their growth and accomplishments as they complete our program is incredibly fulfilling. 
             I enjoy merging creativity with programming and encourage my students to do the same. 
             TrueCoders provides a nurturing environment for both instructors and students, fostering growth and collaboration. 
             I'm thankful for the opportunity to contribute to this vibrant community and shape the future of aspiring programmers."
          </p>
        </div>
        <div className={site.colMd6}>
          <img
            className={`${classes.Me} ${site.imgFluid}`}
            src={me}
            alt="Seth"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
