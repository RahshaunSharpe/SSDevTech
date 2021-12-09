import Footer2 from "../layout/footer-2";
import Header2 from "../layout/header-2";
import Accordion_sm from "../element/accordion_sm";
import Link from 'next/link';


function SeoFacts() {
  return (
    <>
	
      <div className=" text-center page-content bg-white">
	
		
		{/* <!-- Faq --> */}
		<section className="content-inner" style={{"backgroundImage":"url(images/background/bg2.png)"}}>
			<div className=" d-flex align-items-center justify-content-center container">
				<div className="row">
					<div className=" wow fadeIn" data-wow-duration="2s" data-wow-delay="0.2s">
                        <Accordion_sm/>
                    </div>
					
				</div>
			</div>
		</section>
			
	</div>
	
    </>
  )
}

export default SeoFacts;