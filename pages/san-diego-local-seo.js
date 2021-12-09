

import { useState } from "react";
import Footer2 from '../layout/footer-2';
import Header2 from '../layout/header-2';
import Link from 'next/link';
import SeoFacts from "../component/seoFacts";
import SeoServices from "../element/seoServices";
function PricingTable2() {
    const [open, setOpen] = useState("p2")
  return (
    <>
    <Header2/>
    <div className="page-content bg-white">
		{/* <!-- Banner  --> */}
		<div className="dlab-bnr-inr style-2 overlay-gradient-dark" style={{"backgroundImage":"url(images/banner/bnr2.jpg)"}}>
			<div className="container">
				<div className="dlab-bnr-inr-entry">
					<h1>San Diego Web Design, Web Development, & SEO Strategist </h1>
					{/* <!-- Breadcrumb Row --> */}
					<nav aria-label="breadcrumb" className="breadcrumb-row">
						<ul className="breadcrumb">
							<li className="breadcrumb-item"><Link href="/"><a>Home</a></Link></li>
							<li className="breadcrumb-item active" aria-current="page">SEO Packages</li>
						</ul>
					</nav>
					{/* <!-- Breadcrumb Row End --> */}
				</div>
			</div>
		</div>
		{/* <!-- Banner End --> */}
		

		<SeoFacts/>

		<SeoServices/>

		{/* <!-- Pricing Table --> */}
		<section className="content-inner" style={{"backgroundImage":"url(images/background/bg2.png)",marginTop:"-5rem"}}>
			<div className="container">
				<h1 style={{paddingBottom:"2rem"}}>Seo Price Plans</h1>
				<div className="pricingtable-row">
					<div className="row">
						<div className="col-lg-4 col-md-6 wow fadeIn" data-wow-duration="2s" data-wow-delay="0.2s">
                        <div className={`${open === "p1" ? "pricingtable-wrapper style-2 m-b30 active" : "pricingtable-wrapper style-2 m-b30"}`} onMouseOver={() => setOpen("p1")}>
								<div className="pricingtable-inner">
									<div className="pricingtable-title">
										<h3>Gold Plan</h3>
									</div>
									<div className="icon-bx-sm radius bgl-primary"> 
										<div className="icon-cell">
											<i className="flaticon-paper-plane"></i>
										</div> 
									</div>
									<div className="pricingtable-price"> 
										<h2 style={{color:"#fd6b3e", fontSize:"35px"}} className="pricingtable-bx">$650<small className="pricingtable-type">/Month</small></h2>
									</div>
									<ul  className="pricingtable-features">
										<li >Link Building </li>
										<li >On-Page SEO</li>
										<li >Off-Page SEO</li>
										<li >Keyword Research</li>
										<li >Competitor Analysis</li>
										<li >Custom SEO Strategy</li>
										<li >Speed Optimization</li>
									</ul>
									<div className="pricingtable-footer"> 
										<Link href="#"><a className="btn btn-primary gradient shadow rounded-xl">Contact to Begin </a></Link>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-4 col-md-6 wow fadeIn" data-wow-duration="2s" data-wow-delay="0.4s">
                        <div  className={`${open === "p2" ? "pricingtable-wrapper style-2 m-b30 active" : "pricingtable-wrapper style-2 m-b30"}`} onMouseOver={() => setOpen("p2")}>
								<div  className="pricingtable-inner">
									<div className="pricingtable-title">
										<h3>Platinum Plan</h3>
									</div>
									<div className="icon-bx-sm radius bgl-primary"> 
										<div className="icon-cell">
											<i className="flaticon-air-mail"></i>
										</div> 
									</div>
									<div className="pricingtable-price"> 
										<h2 style={{color:"#fd6b3e", fontSize:"35px"}} className="pricingtable-bx">$850<small className="pricingtable-type">/Month</small></h2>
									</div>
									<ul className="pricingtable-features">
									
										<li >Link Building </li>
										<li >On-Page SEO</li>
										<li >Off-Page SEO</li>
										<li >Keyword Research</li>
										<li >Competitor Analysis</li>
										<li >Custom SEO Strategy</li>
										<li >Speed Optimization</li>
									</ul>
									<div className="pricingtable-footer"> 
										<Link href="#"><a className="btn btn-primary gradient shadow rounded-xl">Start Now</a></Link> 
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-4 col-md-6 wow fadeIn" data-wow-duration="2s" data-wow-delay="0.6s">
                        <div className={`${open === "p3" ? "pricingtable-wrapper style-2 m-b30 active" : "pricingtable-wrapper style-2 m-b30"}`} onMouseOver={() => setOpen("p3")}>
								<div className="pricingtable-inner">
									<div className="pricingtable-title">
										<h3>Elite Plan</h3>
									</div>
									<div className="icon-bx-sm radius bgl-primary"> 
										<div className="icon-cell">
											<i className="flaticon-startup"></i>
										</div> 
									</div>
									<div className="pricingtable-price"> 
										<h2 style={{color:"#fd6b3e", fontSize:"35px"}} className="pricingtable-bx">$1050<small className="pricingtable-type">/Month</small></h2>
									</div>
									<ul className="pricingtable-features">
									
										<li >Link Building </li>
										<li >On-Page SEO</li>
										<li >Off-Page SEO</li>
										<li >Keyword Research</li>
										<li >Competitor Analysis</li>
										<li >Custom SEO Strategy</li>
										<li >Speed Optimization</li>
									</ul>
									<div className="pricingtable-footer"> 
										<Link href="#"><a className="btn btn-primary gradient shadow rounded-xl">Start Now</a></Link> 
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				
			</div>
		</section>
			
	</div>
     <Footer2/>
    </>
  )
}

export default PricingTable2;