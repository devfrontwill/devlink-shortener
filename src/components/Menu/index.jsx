import './styles.scss';
import { BsLinkedin, BsGithub, BsInstagram } from 'react-icons/bs';
import { Link } from 'react-router-dom';

function Menu() {
    return (
        <div className='menu' >

            <a className="social" href="https://www.linkedin.com/in/devfrontwill">
                <BsLinkedin color='#FFF' size={24} />
            </a>

            <a className="social" href="https://github.com/devfrontwill">
                <BsGithub color='#FFF' size={24} />
            </a>

            <a className="social" href="https://instagram.com/wiliam.rozza">
                <BsInstagram color='#FFF' size={24} />
            </a>

            <Link className='menu-item' to="/links" >
                Meus Links
            </Link>
        </div>
    )
}

export default Menu;