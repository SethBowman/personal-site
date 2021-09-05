import { FaGithub, FaFacebookSquare, FaLinkedin, FaPlaystation } from "react-icons/fa";

const handleURL = (url) => {
    return () => window.open(url, "_blank")
}

const Contact = () => {
    return ( 
        <div>
            <FaGithub color='#0094c8' size='30px' style={{padding: '1%'}} onClick={handleURL('https://github.com/SethBowman')} />
            <FaFacebookSquare color='#0094c8' size='30px' style={{padding: '1%'}} onClick={handleURL('https://www.facebook.com/OGsethbowman/')} />
            <FaLinkedin color='#0094c8' size='30px' style={{padding: '1%'}} onClick={handleURL('https://www.linkedin.com/in/seth-bowman-358863211/')} />
            <FaPlaystation color='#0094c8' size='30px' style={{padding: '1%'}} onClick={handleURL('https://psnprofiles.com/Captn-Kold')} />
            
        </div>
     );
}
 
export default Contact;
<div>
    <h1>Contact</h1>
</div>