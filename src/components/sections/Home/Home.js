import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import Section from "../../../HOC/Section";
import bgImage from "../../../assets/img/home_bg.jpg";
import Link from "../../UI/Link/Link";

const home = () => {
  return (
    <Section id="home">
      <div>
        <div
          className="home-content p-5"
          // style={{ backgroundImage: `url(${bgImage})` }}
          style={{ backgroundColor: "#040D12" }}
        >
          <div className="intro container text-left text-light">
            <h1 className="title">Sigma DF</h1>
            <div class="sub">
              <span>디지털 포렌식</span>
              <span>보고서 작성 보조 솔루션</span>
            </div>
            <div className="btns">
              <Link target="about" classes="btn btn-danger rounded-0 mr-2">
                더보기
              </Link>
              <Link
                target="contact"
                classes="btn btn-light text-dark rounded-0"
              >
                데모 신청 <FontAwesomeIcon icon={faExternalLinkAlt} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default home;
