import { useState } from "react";

function SeoServices() {
    const [open, setOpen] = useState("p2")
    return (
      <>
      
		{/* <!-- Services --> */}
		<section className="content-inner-2" style={{"backgroundImage":"url(images/background/bg2.png)","backgroundSize":"contain","backgroundPosition":"center","backgroundRepeat":"no-repeat"}}>
			<div className="container">
				<div className="row align-items-center">
					<div className="col-lg-5 wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0.2s">
						<div className="section-head style-3 mb-4">
							<h6 className="sub-title text-primary bgl-primary m-b15">OUR SERVICES</h6>
							<h2 className="title">San Diego Local Seo</h2>
						</div>
						<p>Building your business into a powerhouse in the San Diego Area is no easy task, but with the right approach to your digital marketing, you can guarantee a steady stream of relevant web traffic to your front door.</p>
							 <p>SSDevTech is a leading San Diego SEO agency, offering full service search engine optimization (SEO) marketing that will boost your rankings with a guaranteed increase in organic traffic. </p>
						<p className="m-b30">If your goal is to get placement 
							 at the top of the world's most popular search engines, Proleadsoft will get you there with our 360 approach to SEO.</p>
					</div>
					<div className="col-lg-7">
					<div className={`${open === "p1" ? "icon-bx-wraper style-3 left box-hover m-r100 m-b30 wow fadeInRight active" : "icon-bx-wraper style-3 left box-hover m-r100 m-b30 wow fadeInRight"}`} onMouseOver={() => setOpen("p1")}>
							<div className="icon-bx-sm radius"> 
								<a href="#" className="icon-cell">
									<i className="flaticon-idea"></i>
								</a> 
							</div>
							<div className="wraper-effect"></div>
							<div className="icon-content">
								<h4 className="dlab-title m-b15">Idea &amp; Analysis Gathering</h4>
								<p>Maecenas laoreet efficitur sagittis. Aliquam eleifend nisl leo, sit amet consequat augue mattis varius. Suspendisse rhoncus nisl.</p>
							</div>
						</div>
						<div className={`${open === "p2" ? "icon-bx-wraper style-3 left box-hover m-l100 m-b30 wow fadeInRight active" : "icon-bx-wraper style-3 left box-hover m-l100 m-b30 wow fadeInRight"}`} onMouseOver={() => setOpen("p2")}>
							<div className="icon-bx-sm radius"> 
								<a href="#" className="icon-cell">
									<i className="flaticon-coding"></i>
								</a> 
							</div>
							<div className="wraper-effect"></div>
							<div className="icon-content">
								<h4 className="dlab-title m-b15">Design &amp; Developing</h4>
								<p>Maecenas laoreet efficitur sagittis. Aliquam eleifend nisl leo, sit amet consequat augue mattis varius. Suspendisse rhoncus nisl.</p>
							</div>
						</div>
						<div className={`${open === "p3" ? "icon-bx-wraper style-3 left box-hover m-r100 m-b30 wow fadeInRight active" : "icon-bx-wraper style-3 left box-hover m-r100 m-b30 wow fadeInRight"}`} onMouseOver={() => setOpen("p3")}>
							<div className="icon-bx-sm radius"> 
								<a href="#" className="icon-cell">
									<i className="flaticon-rocket"></i>
								</a> 
							</div>
							<div className="wraper-effect"></div>
							<div className="icon-content">
								<h4 className="dlab-title m-b15">Testing &amp; Lunching</h4>
								<p>Maecenas laoreet efficitur sagittis. Aliquam eleifend nisl leo, sit amet consequat augue mattis varius. Suspendisse rhoncus nisl.</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		</>
    )
  }
  
  export default SeoServices;