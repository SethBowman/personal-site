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
            "I am thrilled to be a software engineer instructor at TrueCoders, a renowned programming school located in Hoover, AL. With formal accreditations in web development and software engineering, I have found my passion in guiding and inspiring students from various walks of life. It brings me great satisfaction to witness their remarkable journeys and accomplishments as they complete our comprehensive program.
            Working with students across the country has been an incredibly rewarding experience. Every day, I have the privilege of witnessing their growth and witnessing the potential they unlock during their time with us. It is truly inspiring to see their skills and confidence develop as they dive into the world of programming.
            One of the aspects I cherish most about being a software engineer instructor is the chance to merge my artistic inclinations with the technical aspects of programming. I view coding as a form of artistry, allowing me to bring concepts to life and create functional, elegant solutions. This blending of art and technology enables me to approach programming from a unique perspective and instill a sense of creativity in my students.
            Being part of the TrueCoders community fills me with gratitude. It is a nurturing environment that fosters growth, collaboration, and continuous learning. The passion and dedication exhibited by both the instructors and students are truly remarkable. I am thankful for the opportunity to contribute to this vibrant community and play a role in shaping the future of aspiring programmers."
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
