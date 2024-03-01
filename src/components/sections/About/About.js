import React from "react";

import Section from "../../../HOC/Section";
import aboutImage from "../../../assets/img/s1.png";

const about = () => {
  return (
    <Section id="about">
      <div className="container pt-2 pb-5">
        <div className="section-header pt-5 pb-5 text-center">
          <h3 className="section-title">
            <span>RedG </span>Company
          </h3>
          <h6 className="section-subtitle mr-auto ml-auto"></h6>
        </div>
        <div className="section-content">
          <div className="row">
            <div className="col-md-12 col-lg-6 mb-3">
              <div className="aboutImage">
                <img src={aboutImage} alt="about company" />
              </div>
            </div>
            <div className="col-md-12 col-lg-6">
              <h3 className="about-title">About us</h3>
              <div className="about-description">
                <p>RedG 컴퍼니는 디지털 포렌식 업무 환경을 바꿀 것 입니다.</p>
                <p>
                  현재 기술 발전의 속도에 발맞춰, 간단한 입력만으로 코드를
                  생성해내는 GPT의 등장이 낡은 기술을 대체할 새로운 서비스들을
                  대거 등장시키고 있습니다. 이러한 변화의 최전선에서 여러분은
                  기술 발전을 뒤따르기만 할 것인가요? 디지털포렌식도 변화가
                  필요합니다.
                </p>
                <p>
                  증거를 수집하는 데는 성공했으나, 그것을 효과적으로 정리하고
                  보고서로 작성하는 데 어려움을 겪었던 분들, 또는 파일을 제대로
                  정리하지 않고 나중에 보고서를 작성할 때 필요한 자료를 하나하나
                  찾아 헤매었던 분들을 위한 해결책을 제공합니다. 우리의 서비스인
                  SIGMA DF는 이러한 문제를 해결하고, 필요한 정보를 적절한 위치에
                  쉽게 통합할 수 있도록 도와드립니다.
                </p>
                <strong>
                  본 소개 메세지는 자체 개발 LLM에 의해 생성되었습니다_
                </strong>
                <br />
                <br />
                <button className="btn btn-danger rounded-0">도입 문의 </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default about;
