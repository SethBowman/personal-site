import classes from './About.module.css';
import PageHeader from './../PageHeader/PageHeader.js';
import me from './../../images/headshot.jpg'

const About = () => {
    return ( 
        <div className={classes.AboutMe}>
            <PageHeader title={'About Me'} />
            <div className={classes.Container}>
                <div className={classes.Text}>
                    <h2>Seth Bowman</h2>
                    <p>
                        I am a certified web developer/software engineer working as a teaching assistant for a company called 'TrueCoders' based out of Hoover, AL.
                        Prior to this role, I completed two boot camps with TrueCoders, where I honed my programming skills. Ideally, I would like to continue to specialize in web development.                        
                    </p>
                    <div className={classes.Photo}>
                    <img className={classes.Me} src={me} alt="Seth" />
                    </div>
                </div>

            </div>            
        </div>
     );
}
 
export default About;