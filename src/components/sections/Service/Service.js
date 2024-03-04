import React from "react";

import Section from "../../../HOC/Section";

const Service = () => {
  return (
    <Section id="services">
      <div className="container pt-2 pb-5">
        <div className="section-header pt-5 pb-5 text-center">
          <h3 className="section-title">
            <span>기술</span>과 비전(Technology & Vision)
          </h3>
          <center>
            <h6 className="section-subtitle">
              ReDG Company는 디지털 포렌식 솔루션 스타트업입니다. <br />
              디지털 포렌식과 개발에 관심있는 팀원들이 모여 무언가를 끊임없이
              만들고 Show&Prove하는 것을 목표로 합니다. ReDG Company의 핵심
              기술과 가치는 다음과 같습니다.
            </h6>
          </center>
        </div>
        <div className="section-content">
          <div className="row">
            <div className="col-md-6 col-lg-4 mb-3">
              <div className="service-box d-flex align-items-center">
                <div className="service-body">
                  <h5 className="service-title">
                    <span>
                      <i className="fas fa-briefcase"></i>
                    </span>
                    비정형 데이터 처리{" "}
                  </h5>
                  <p className="service-description">
                    다양한 기관에서 디지털 포렌식의 우수한 상용 도구들을
                    사용하고 있습니다. ReDG의 자체 개발 데이터 베이스로 여러
                    분석 데이터들을 손쉽게 관리해보세요.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-3">
              <div className="service-box d-flex">
                <div className="service-body">
                  <h5 className="service-title">
                    {" "}
                    <span>
                      <i className="fas fa-chart-bar" />
                    </span>{" "}
                    필수 항목 및 양식 준수{" "}
                  </h5>
                  <p className="service-description">
                    디지털 포렌식의 매 순간 순간을 놓치지 않고 문서에 담기 위해
                    다양한 기관들의 업무 방식과 보고서 양식을 연구했습니다. 저희
                    ReDG의 "SIGAM DF"로 경험해보세요!
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-3">
              <div className="service-box d-flex">
                <div className="service-body">
                  <h5 className="service-title">
                    <span>
                      <i className="fas fa-fist-raised" />
                    </span>
                    국내 디지털 포렌식의 성장
                  </h5>
                  <p className="service-description">
                    ReDG Company는 불철주야 현장에서 수고하시는 전문가분들의
                    개선된 업무 환경과 넓어진 국내 디지털 포렌식의 입지를
                    진심으로 기원합니다.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-3">
              <div className="service-box d-flex">
                <div className="service-body">
                  <h5 className="service-title">
                    <span>
                      <i className="far fa-paper-plane" />
                    </span>
                    확장성
                  </h5>
                  <p className="service-description">
                    ReDG Company는 최신 기술과 도구를 적극 도입하여 여타 다른
                    도구들과 다른 뛰어난 확장성을 보여줍니다. <br />
                    민간의 최신기술을 ReDG company를 통해서 안정적으로
                    도입하세요
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-3">
              <div className="service-box d-flex">
                <div className="service-body">
                  <h5 className="service-title">
                    <span>
                      <i className="fas fa-gem" />
                    </span>
                    자체 AI기술의 도입
                  </h5>
                  <p className="service-description">
                    ReDG Company는 자체 AI 서비스를 통해 대용량 데이터의
                    분석결과를 효율적으로 가공할 수 있습니다. 회사의 기밀정보를
                    분석함에 있어 저희 회사의 솔루션으로 최신기술을 보다
                    안전하게 도입하세요.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-3">
              <div className="service-box d-flex">
                <div className="service-body">
                  <h5 className="service-title">
                    {" "}
                    <span>
                      {" "}
                      <i className="far fa-life-ring" />
                    </span>
                    시각화 & 협업
                  </h5>
                  <p className="service-description">
                    데이터들을 대시보드와 그래프로 한 눈에 관리 및 확인할 수
                    있습니다. 뿐만 아니라 함께 일하는 동일 부서 혹은 기관 내에
                    팀원들과 함께 작업할 수 있는 협업 기능으로 효율적으로 업무에
                    임해보세요!
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
