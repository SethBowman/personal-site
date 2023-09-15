import classes from "./Skills.module.css";
import site from "../../index.module.css";
import PageHeader from "./../PageHeader/PageHeader.js";
import codeGif from "./../../images/coding-tag-gif.gif";

const listTitleStyle = { fontWeight: 900, color: '#0094c8', marginBottom: '8px'}

const backEndSkills = 
<ul>
    <li style={listTitleStyle}>BACKEND</li>
    <li>C# - MySql - ASP.NET Core MVC</li>
</ul>

const frontEndSkills =
<ul>
    <li style={listTitleStyle}>FRONTEND</li>
    <li>HTML - CSS - JavaScript - JSON</li>    
</ul>

const otherSkills =
<ul>
    <li style={listTitleStyle}>OTHER</li>
    <li>Git - Razor Pages</li>
</ul>

const allSkills = [backEndSkills, frontEndSkills, otherSkills];

const Skills = () => {
  return (
    <div className={classes.Skills} id="skills">
      <div className={`${site.Container} ${site.flexColumn}`}>
        <h1>Projects</h1>
        <hr/>
      {/* <PageHeader title={"What skills do I have?"} /> */}
      
      <ul className={classes.projects}>
        <li><a href="https://github.com/SethBowman/VideoGameMVC"target="_blank" className={classes.projectAnchor}>Video Game MVC App</a> <p className={classes.project}>An application that stores video games into a MySql database using ASP.NET Core MVC design pattern, includes Dapper and MySQL.Data NuGet packages.</p></li>
        <li><a href="https://github.com/SethBowman/NuclearWorld" target="_blank" className={classes.projectAnchor}>Nuclear World</a> <p className={classes.project}>A text-based adventure game created using a basic Console Application. This was created for fun and is intented to have a nostalgic old school text game feel to it.</p></li>
      </ul>

      <div className={classes.CodeGif}>
          <img src={codeGif} alt="Code Gif" className={`${site.imgFluid} ${classes.codeGif}`}/>
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
    </div>
  );
};

export default Skills;
