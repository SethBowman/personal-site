import classes from './Home.module.css';
import binary from './../../images/binary-world.png';
import tcLogoSmall from './../../images/TCLogoOnly.png';

const Home = () => {
    return ( 
        <div className={classes.Home}>
            <div className={classes.Container}>
                <h1 className={classes.Hello}>Hello world!</h1>
                <h1>Welcome to my website.</h1>
            </div>
            <img className={classes.TcSmall} src={tcLogoSmall} alt="Tc Logo- Small" style={{height: '100px'}} />
            <img className={classes.Binary} src={binary} alt="Binary" style={{height: '375px'}}/>
        </div>
     );
}
 
export default Home;