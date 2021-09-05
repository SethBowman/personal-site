import classes from "./Skills.module.css";
import PageHeader from "./../PageHeader/PageHeader.js";
import codeGif from "./../../images/coding-tag-gif.gif";

const backEndSkills = 
<ul>
    <li>BACKEND</li>
    <li>C# - SQL - ASP.Net MVC</li>
</ul>

const frontEndSkills =
<ul>
    <li>FRONTEND</li>
    <li>HTML - CSS = JavaScript</li>
    <li>React.js = Node.js - Express.js</li>
</ul>

const otherSkills =
<ul>
    <li>OTHER</li>
    <li>Git - Json - XML</li>
</ul>

const allSkills = [backEndSkills, frontEndSkills, otherSkills];

const Skills = () => {
  return (
    <div className={classes.Skills}>
      <PageHeader title={"What skills do I have?"} />
      <p>
        "I've earned certification in web development and software engineering
        through TrueCoders and currently work as an instructor there. During my
        time through the course, and even still, I've created many projects.
        Below are some programming languages, frameworks, toolkits, and
        libraries that I have worked with and liked."
      </p>
      <div className={classes.CodeGif}>
          <img src={codeGif} alt="Code Gif" style={{height: '400px'}}/>
      </div>
      <div className={classes.Container}>
            {allSkills.map(skills => {
                return (
                    <div className={classes.List}>
                        {skills}
                    </div>
                )
            })}
      </div>
    </div>
  );
};

export default Skills;
