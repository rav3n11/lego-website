import React,{useEffect} from 'react'
import logo from "../../../assets/icons/single-bean.svg"
import { SocialShare } from './config';
import { Link } from 'react-router-dom';

export default function Header() {

    const homeLink = "/";
    const headerColor = "color-black"

    useEffect(() => {

        function Sticky() {
            var value = window.scrollY;
            if (value > 100) {
                document.querySelector('.header--fixed').classList.add('sticky')
            }else{
                document.querySelector('.header--fixed').classList.remove('sticky')
                
            }
        }
        window.addEventListener('scroll', Sticky);

        return () => {
           window.removeEventListener('scroll', Sticky);

        }
        
        
    }, [])



    return (

        <header className={`header-area header-style-two header--fixed ${headerColor}`}>
            <div className="header-wrapper">
                    <div className="header-left d-flex align-items-center">
                        <div className="logo">
                            <Link to={homeLink}>
                                <img src={logo} id="logoResize" alt="single coffee bean"/>
                            </Link>
                                <h2 className="title__header">Coffee Lessonz</h2>
                        </div>
                    </div>
                    <div className="header-right">
                            <ul className="social-share social-style--2 color-black d-flex justify-content-start liststyle">
                                {SocialShare.map((val , i) => (
                                    <li className={i===0 ? 'wide' : ''} key={i}><Link to={`${val.link}`}>{val.Social} {val.data && <strong className='data'>{val.data}</strong>}</Link></li>
                                ))}
                            </ul>
                        <div className="header-btn">
                            <Link className="rn-btn-light" to='/ComingSoon'> <span>Get Started</span>
                            </Link>
                        </div>
                    </div>
                </div>

        </header>

    )
}
