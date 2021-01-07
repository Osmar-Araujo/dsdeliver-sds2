import './styles.css';
import { ReactComponent as Linkedin } from './Linkedin.svg'
import { ReactComponent as Youtube } from './Youtube.svg'
import { ReactComponent as Instagram } from './Instagram.svg'

function Footer(){
    return(
        <footer className="main-footer">
            App desenvolvido durante a 2ª ed. do evento Semana DevSuperior
            <div className="footer-icons">
                <a href ="https://www.youtube.com" target="_new">
                    <Youtube />
                </a>
                <a href="https:wwww.linkedin.com/school/devsuperior/" target="_new">
                    <Linkedin />
                </a>
                <a href="https:wwww.instagram.com/devsuperior.ig/" target="_new">
                    <Instagram />
                </a>
            </div>
        </footer>
    )
}
export default Footer;