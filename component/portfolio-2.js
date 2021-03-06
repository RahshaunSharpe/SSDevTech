// import Image1 from "images/projects/grid/pic1";
import Image from "next/image";
import { useEffect, useState } from "react";
import SimpleReactLightbox from 'simple-react-lightbox';
import {SRLWrapper, useLightbox} from 'simple-react-lightbox'; 


function Portfolio2() {
  const portfolio = [
    {
      title: "Software Landing Page Design",
      category: ["all", "web_design", "eCommerce", "web_development"],
      link: "https://monche.net",
      img: (
        <Image
          src="/images/projects/monche.png"
          layout="responsive"
          width={370}
          height={370}
        />
      ),
      author: "Jhone Doe",
    },
    {
      title: "Software Landing Page Design",
      category: ["all", "web_development", "ecommerce"],
      img: (
        <Image
          src="/images/projects/shoes.png"
          layout="responsive"
          width={370}
          height={370}
        />
      ),
      author: "Jhone Doe",
    },
    {
      title: "Software Landing Page Design",
      category: ["all", "web_design", "seo"],
      img: (
        <Image
          src="/images/projects/pic3.jpg"
          layout="responsive"
          width={370}
          height={370}
        />
      ),
      author: "Jhone Doe",
    },
    {
      title: "Software Landing Page Design",
      category: ["all", "web_design", "branding"],
      img: (
        <Image
          src="/images/projects/pic4.jpg"
          layout="responsive"
          width={370}
          height={370}
        />
      ),
      author: "Jhone Doe",
    },
    {
      title: "Software Landing Page Design",
      category: ["all", "mobile_app", "seo"],
      img: (
        <Image
          src="/images/projects/pic5.jpg"
          layout="responsive"
          width={370}
          height={370}
        />
      ),
      author: "Jhone Doe",
    },
    {
      title: "Software Landing Page Design",
      category: ["all", "web_design", "branding"],
      img: (
        <Image
          src="/images/projects/pic6.jpg"
          layout="responsive"
          width={370}
          height={370}
        />
      ),
      author: "Jhone Doe",
    },
  ];

  const [filter, setFilter] = useState("all");
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(portfolio);
  }, []);

  useEffect(() => {
    setProjects([]);

    const filtered = portfolio.map((p) => ({
      ...p,
      filtered: p.category.includes(filter),
    }));
    setProjects(filtered);
  }, [filter]);
  return (
    <>
      <div className="site-filters style-2 clearfix center m-b40">
        <ul className="filters">
          <li className={`btn ${filter === "all" ? "active" : ""}`}>
            <a active={"all"} onClick={() => setFilter("all")}>
              All
            </a>
          </li>
          <li className={`btn ${filter === "web_design" ? "active" : ""}`}>
            <a
              active={"web_design"}
              onClick={() => setFilter("web_design")}
            >
              Web Design
            </a>
          </li>
          <li className={`btn ${filter === "web_development" ? "active" : ""}`}>
            <a
              active={"web_development"}
              onClick={() => setFilter("web_development")}
            >
              Web Development
            </a>
          </li>
          <li className={`btn ${filter === "eCommerce" ? "active" : ""}`}>
            <a
              active={"eCommerce"}
              onClick={() => setFilter("eCommerce")}
            >
              Ecommerce
            </a>
          </li>
          <li className={`btn ${filter === "mobile_app" ? "active" : ""}`}>
            <a
              active={"mobile_app"}
              onClick={() => setFilter("mobile_app")}
            >
              Mobile App
            </a>
          </li>
          <li className={`btn ${filter === "seo" ? "active" : ""}`}>
            <a active={"seo"} onClick={() => setFilter("seo")}>
              SEO
            </a>
          </li>
        </ul>
      </div>
        <SimpleReactLightbox>
            <SRLWrapper >
              <div className="clearfix">
                <ul id="masonry" className="row" data-column-width="3">
                  {projects.map((item) =>
                    item.filtered === true ? (
                      <>
                        <li
                          className="card-container col-lg-4 col-md-6 col-sm-6 web_design wow fadeInUp"
                          data-wow-duration="2s"
                          data-wow-delay="0.1s"
                        >
                          <div style={{cursor: "pointer"}}className="dlab-box  style-2 m-b30">
                            <div className="dlab-media ">
                              {item.img}
                            </div>
                            {/* <div className="dlab-info">
                              <h5 className="title">
                                <a href="javascript:void(0);">{item.title}</a>
                              </h5>
                              <p className="post-author">
                                By <a href="javascript:void(0);">{item.author}</a>
                              </p>
                            </div> */}
                          </div>
                          {item.link ?
                          <a  className="btn btn-primary align-items-center justify-content-center d-flex gradient shadow rounded-xl mb-5" href={item.link}>Live Site</a>
                          : null}
                          </li>
                      </>
                    ) : (
                      ""
                    )
                  )}
                </ul>
              </div>
            </SRLWrapper >      
          </SimpleReactLightbox> 
    </>
  );
}

export default Portfolio2;
