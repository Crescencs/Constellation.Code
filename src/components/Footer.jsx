 import "../assets/Styles/Footer.css";
 import youtube from "../assets/Images/youtube.png"
 import facebook from "../assets/Images/facebook.png"
 import github from "../assets/Images/github.png"
 import instagram from"../assets/Images/instagram.png"

function Footer() {
    return ( 
        <>
        <footer>
            <img src={youtube} />
            <img src={facebook} />
            <img src={github} />
            <img src={instagram} />
      </footer>
        </>
    );
}

export default Footer;