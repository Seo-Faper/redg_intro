import React from "react";

import Section from "../../../HOC/Section";

const Service = () => {
  return (
    <Section id="services">
      <div className="container pt-2 pb-5">
        <div className="section-header pt-5 pb-5 text-center">
          <h3 className="section-title">
            <span>기술</span>과 서비스
          </h3>
          <center>
            <h6 className="section-subtitle">
              레드지 컴퍼니는 기술 스타트업입니다. 끊임없이 뭔가를 만들고 Show &
              Prov하는 것을 목표로 합니다. 사실 이거 쓸 때 제가 잠을 거의 3시간
              밖에 안 자서 무슨 말 쓰고 있는지는 모르겠지만 저희 제품 하나만
              사주세요. <br></br>이틀째 라면만 먹고 있습니다.
            </h6>
          </center>
        </div>
        <div className="section-content">
          <div className="row">
            <div className="col-md-6 col-lg-4 mb-3">
              <div className="service-box d-flex">
                <div className="service-icon mr-4">
                  <i className="fas fa-briefcase" />
                </div>
                <div className="service-body">
                  <h5 className="service-title">코난 마취총</h5>
                  <p className="service-description">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life
                    accusamus terry richardson ad squid
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-3">
              <div className="service-box d-flex">
                <div className="service-icon mr-4">
                  <i className="fas fa-chart-bar" />
                </div>
                <div className="service-body">
                  <h5 className="service-title">사이오닉 스톰</h5>
                  <p className="service-description">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life
                    accusamus terry richardson ad squid
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-3">
              <div className="service-box d-flex">
                <div className="service-icon mr-4">
                  <i className="fas fa-fist-raised" />
                </div>
                <div className="service-body">
                  <h5 className="service-title">불닭 볶음면 빨리 먹기</h5>
                  <p className="service-description">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life
                    accusamus terry richardson ad squid
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-3">
              <div className="service-box d-flex">
                <div className="service-icon mr-4">
                  <i className="far fa-paper-plane" />
                </div>
                <div className="service-body">
                  <h5 className="service-title">수박 빨리 먹기</h5>
                  <p className="service-description">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life
                    accusamus terry richardson ad squid
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-3">
              <div className="service-box d-flex">
                <div className="service-icon mr-4">
                  <i className="fas fa-gem" />
                </div>
                <div className="service-body">
                  <h5 className="service-title">마컨으로 뺏은 SCV</h5>
                  <p className="service-description">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life
                    accusamus terry richardson ad squid
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-3">
              <div className="service-box d-flex">
                <div className="service-icon mr-4">
                  <i className="far fa-life-ring" />
                </div>
                <div className="service-body">
                  <h5 className="service-title">어디로든문</h5>
                  <p className="service-description">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life
                    accusamus terry richardson ad squid
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Service;
