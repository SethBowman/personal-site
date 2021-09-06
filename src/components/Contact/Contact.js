import { FaGithub, FaFacebookSquare, FaLinkedin, FaPlaystation } from "react-icons/fa";
import classes from './Contact.module.css';

const handleURL = (url) => {
    return () => window.open(url, "_blank")
}


const Contact = () => {
    return ( 
        <div className={classes.Contact} id="contact">
            <div className={classes.Icons}>
            <FaGithub color='#0094c8' size='50px' style={{padding: '1%'}} onClick={handleURL('https://github.com/SethBowman')} />
            <FaLinkedin color='#0094c8' size='50px' style={{padding: '1%'}} onClick={handleURL('https://www.linkedin.com/in/seth-bowman-358863211/')} />
            <FaFacebookSquare color='#0094c8' size='50px' style={{padding: '1%'}} onClick={handleURL('https://www.facebook.com/OGsethbowman/')} />
            <FaPlaystation color='#0094c8' size='50px' style={{padding: '1%'}} onClick={handleURL('https://psnprofiles.com/Captn-Kold')} />          
            </div>
        </div>
     );
}
 
export default Contact;
