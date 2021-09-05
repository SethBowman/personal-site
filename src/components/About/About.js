import classes from "./About.module.css";
import PageHeader from "./../PageHeader/PageHeader.js";
import me from "./../../images/headshot.jpg";

const About = () => {
  return (
    <div className={classes.AboutMe} id="about">
      <PageHeader title={"About Me"} />
      <div className={classes.Box}>
        <div className={classes.Text}>
          <h2>Seth Bowman</h2>
          <p>
            "I am a proud member of TrueCoders, a programming school based out
            of Hoover, AL where I work as a teaching assistant with formal
            accreditations in web development and software engineering. I feel I
            am an artist at heart, so a career path like programming was perfect
            for me. I have worked with many different students from all walks of
            life across the country and I truly enjoy seeing how far they go
            after they complete the course with us."
          </p>
        </div>
        <div className={classes.Photo}>
          <img className={classes.Me} src={me} alt="Seth" />
        </div>
      </div>
    </div>
  );
};

export default About;
