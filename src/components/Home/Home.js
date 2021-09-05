import classes from './Home.module.css';
import binary from './../../images/binary-world.png';
import tcLogoSmall from './../../images/TCLogoOnly.png';

const Home = () => {
    return ( 
        <div className={classes.Home} id="home">
            <div className={classes.Container}>
                <h1 className={classes.Hello}>Hello World!</h1>
                <h1 className={classes.Me}>Seth Bowman's Portfolio Site</h1>
            </div>
            <img className={classes.TcSmall} src={tcLogoSmall} alt="Tc Logo- Small" style={{height: '100px'}} />
            <img className={classes.Binary} src={binary} alt="Binary"/>
        </div>
     );
}
 
export default Home;