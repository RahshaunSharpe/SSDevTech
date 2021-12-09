import Link from 'next/link';
import { useState } from 'react';
function Header2() {
    const [show, setShow] = useState(false);
    const [open, setOpen] = useState("home");
    return (
        <>
            <header className="site-header mo-left header-transparent">
                <div className="container">
                    <div className="top-bar">
                        <div className="row d-flex justify-content-between align-items-center">
                            <div className="dlab-topbar-left">
                                <ul>
                                    <li>
                                        <i className="la la-envelope"></i>{" "}
                                        Rahshaun21@ssdevtech.com
                                    </li>
                                    <li>
                                        <i className="la la-phone-volume"></i> +01 619-797-0382
                                    </li>
                                </ul>
                            </div>
                            <div className="dlab-topbar-right">
                                <ul className="dlab-social-icon">
                                    <li>
                                        <a
                                            className="fa fa-facebook"
                                            href="https://en-gb.facebook.com/"
                                        ></a>
                                    </li>
                                    <li>
                                        <a
                                            className="fa fa-instagram"
                                            href="https://www.instagram.com/ssdevtech"
                                        ></a>
                                    </li>
                                    <li>
                                        <a
                                            className="fa fa-twitter"
                                            href="https://twitter.com/login?lang=en"
                                        ></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Main Header --> */}
                <div className="sticky-header main-bar-wraper navbar-expand-lg">
                    <div className="main-bar clearfix ">
                        <div className="container clearfix">
                            {/* <!-- Website Logo --> */}
                            <div className="logo-header mostion logo-dark">
                                <Link href="/">
                                    <a>
                                        <h1 style={{color:"white", fontSize:"40px"}}>SSDevTech</h1>
                                    </a>
                                </Link>
                            </div>
                            {/* <!-- Nav Toggle Button --> */}
                            <button
                                className={`navbar-toggler collapsed navicon justify-content-end ${
                                    show ? "open" : ""
                                }`}
                                onClick={() => setShow(!show)}
                            >
                                <span></span>
                                <span></span>
                                <span></span>
                            </button>
                            {/* <!-- Extra Nav --> */}
                            <div className="extra-nav">
                                <div className="extra-cell">
                                <Link href="/contact-us-2">
                                        <a className="btn btn-primary rounded-xl gradient shadow">Get A Quote</a>
                                    </Link>
                                </div>
                            </div>
                            <div
                                className={`header-nav navbar-collapse collapse justify-content-end ${
                                    show ? "show" : ""
                                }`}
                                id="navbarNavDropdown"
                            >
                                <div className="logo-header">
                                    <Link href="/">
                                        <a>
                                        <img src="images/logo/SSLogo.png" alt="" />

                                        </a>
                                    </Link>
                                </div>

                                <ul className="nav navbar-nav navbar">
                                   
									<li><Link href="/"><a>Home</a></Link></li>
                                    
                                    <li className={`${open === "services" ? "open" : ""}`}><a onClick={() => setOpen("services")}><span>Services</span><i className="fa fa-chevron-down"></i></a>
										<ul className="sub-menu">
											<li><Link href="/web-development-services-all"><a>All Services</a></Link></li>
											<li><Link href="/sandiego-web-design-companyweb-development"><a>Web Design</a></Link></li>
											<li><Link href="/web-developer-san-diego"><a>Web Development</a></Link></li>
											<li><Link href="/web-developer-san-diego"><a>Mobile App Development</a></Link></li>
											<li><Link href="/san-diego-local-seo"><a>SEO Services</a></Link></li>
										</ul>
									</li>

                                    <li
                                        className={`${
                                            open === "about" ? "open" : ""
                                        }`}
                                    >
                                        <a onClick={() => setOpen("about")}>
                                            <span>About</span>
                                            <i className="fa fa-chevron-down"></i>
                                        </a>
                                        <ul className="sub-menu">
                                        <li><Link href="/about-us-2"><a>About Us</a></Link></li>
											<li><Link href="/team-2"><a>Team</a></Link></li>
                                            <li><Link href="/coming-soon"><a>Coming Soon</a></Link></li>
											
                                        </ul>
                                    </li>

									 {/* <li className={`${open === "blog" ? "open" : ""}`}><a onClick={() => setOpen("blog")}><span>Blog</span><i className="fa fa-chevron-down"></i></a>
										<ul className="sub-menu">
											<li><Link href="/pricing-table-2"><a>Pricing Table</a></Link></li>
											<li><Link href="/blog-grid-2"><a>Blog Grid</a></Link></li>
											<li><Link href="/blog-details-2"><a>Blog Details</a></Link></li>
										</ul>
									</li>  */}
                                    <li className={`${open === "pricing" ? "open" : ""}`}><a onClick={() => setOpen("pricing")}><span>Pricing</span><i className="fa fa-chevron-down"></i></a>
										<ul className="sub-menu">
											<li><Link href="/pricing-table-2"><a>Web Design & Development</a></Link></li>
											<li><Link href="/seoPricing"><a>SEO Packages</a></Link></li>
										</ul>
									</li>
									<li><Link href="/contact-us-2"><a>Contact Us</a></Link></li>
									
                                </ul>
                                <div className="dlab-social-icon">
                                    <ul>
                                        <Link href="https://en-gb.facebook.com/">
                                            <a className="fa fa-facebook"></a>
                                        </Link>
                                        <Link href="https://twitter.com/login?lang=en">
                                            <a className="fa fa-twitter"></a>
                                        </Link>
                                        <Link href="https://www.linkedin.com/login">
                                            <a className="fa fa-linkedin"></a>
                                        </Link>
                                        <Link href="https://www.instagram.com/">
                                            <a className="fa fa-instagram"></a>
                                        </Link>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Main Header End --> */}
            </header>
        </>
    );
}

export default Header2;
