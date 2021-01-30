import Head from 'next/head'
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import Link from 'next/link'

export const siteTitle = 'Solo cuadros'

function Layout({children, home}){
    return (
        <>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta
                    name="description"
                    content="Solo cuadros"
                />
                <meta
                    property="og:image"
                    content={`https://og-image.now.sh/${encodeURI(
                        siteTitle
                    )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
                    />
                <meta name="og:title" content={siteTitle} />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>
            <section id="topbar" className="d-none d-lg-block">
                <div className="container clearfix">
                <div className="contact-info float-left">
                    <i className="fa fa-envelope-o"></i> <a href="mailto:contact@example.com">contact@example.com</a>
                    <i className="fa fa-phone"></i> +1 5589 55488 55
                </div>
                <div className="social-links float-right">
                    <a href="#" className="twitter"><FaTwitter /></a>
                    <a href="#" className="facebook"><FaFacebook /></a>
                    <a href="#" className="instagram"><FaInstagram /></a>
                </div>
                </div>
            </section>

            <header id="header">
                <div className="container">

                <div id="logo" className="float-left">
                    <h1><a href="index.html">Reve<span>al</span></a></h1>
                    {/* <a href="index.html"><img src="assets/img/logo.png" alt=""></a> */}
                </div>

                <nav id="nav-menu-container">
                    <ul className="nav-menu">
                    <li className="menu-active">
                        <Link href="/"><a>Inicio</a></Link>
                        
                    </li>
                    <li className="menu-has-children"><a href="">Temática</a>
                        <ul>
                        <li><a href="#">Paisaje</a></li>
                        <li><a href="#">Urbano</a></li>
                        <li><a href="#">Abstracto</a></li>
                        <li><a href="#">Animales</a></li>
                        <li><a href="#">Retratos</a></li>
                        </ul>
                    </li>                    
                    <li><a href="#contact">Quienes somos</a></li>
                    <li><a href="#contact">Contáctanos</a></li>
                    </ul>
                </nav>
                </div>
            </header>
            
            {children}
        </>
    )
}

export default Layout