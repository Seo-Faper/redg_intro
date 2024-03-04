import React from "react";
import Section from "../../../HOC/Section";
import { Container, Row, Col, Card } from "react-bootstrap";
import ceo from "../../../assets/img/ceo.png";
import hong from "../../../assets/img/hong.png";
import seo from "../../../assets/img/seo.png";
import han from "../../../assets/img/han.png";
import lee from "../../../assets/img/lee.png";
import woo from "../../../assets/img/wo.png";
import son from "../../../assets/img/son.png";
import kim from "../../../assets/img/kim.png";

const Blog = () => {
  return (
    <Section id="blog">
      <Container className="pt-2 pb-5">
        <div className="section-header pt-5 pb-5 text-center">
          <h3 className="section-title" style={{ color: "white" }}>
            <span>조직 </span>구성원
          </h3>
        </div>
        <div className="section-content">
          <div class="wrapper">
            <ul class="team">
              <li class="team-item">
                <div class="profile profile_red">
                  <img src={hong} />
                  <div class="profile-contents">
                    <h2>
                      홍지원 <span>CEO</span>
                    </h2>
                    <p>
                      한국정보보호학회 동계 학술대회 포렌식 세션 발표
                      <br />
                      [클라우드 환경에서의 MITRE ATT&CK 매트릭스 이벤트 로그
                      분석 프레임 워크] 논문
                      <br />
                      ▶KISA 개인정보보호 아이디어 공모전 본선 발표
                    </p>
                  </div>
                </div>
              </li>

              <li class="team-item">
                <div class="profile profile_green">
                  <img src={han} />
                  <div class="profile-contents">
                    <h2>
                      한지성 <span>마케팅</span>
                    </h2>
                    <p>
                      차세대 보안 리더 Best of the Best 12기 <br />
                      SK 쉴더스 전략컨설팅 담당 선임 <br />
                      <br />
                      <br />
                    </p>
                  </div>
                </div>
              </li>
              <li class="team-item">
                <div class="profile profile_blue">
                  <img src={seo} />
                  <div class="profile-contents">
                    <h2>
                      서종찬 <span>Front-end</span>
                    </h2>
                    <p>
                      국방 SW 해커톤 국방부장관상
                      <br></br>
                      KDFS Challenge 대상 경찰청장상 해군 창업 경진대회 수상
                      <br />
                      <br />
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <br></br>
          <br />
          <div class="wrapper">
            <ul class="team">
              <li class="team-item">
                <div class="profile profile_purple">
                  <img src={woo} />
                  <div class="profile-contents">
                    <h2>
                      우현우 <span>Back-end</span>
                    </h2>
                    <p>
                      차세대 보안 리더 Best of the Best 12기 <br />
                      ㈜부광에프디 선임
                    </p>
                  </div>
                </div>
              </li>
              <li class="team-item">
                <div class="profile profile_purple">
                  <img src={kim} />
                  <div class="profile-contents">
                    <h2>
                      김지성 <span>Back-end</span>
                    </h2>
                    <p>
                      차세대 보안 리더 Best of the Best 12기 <br />
                    </p>
                  </div>
                </div>
              </li>
              <li class="team-item">
                <div class="profile profile_beige">
                  <img src={lee} />
                  <div class="profile-contents">
                    <h2>
                      이재석 <span>AI 개발자</span>
                    </h2>
                    <p>
                      그리드 컴퓨팅 시스템에서의 양자내성암호 논문
                      <br />
                      경북창업아이디어톤 수상
                    </p>
                  </div>
                </div>
              </li>
              <li class="team-item">
                <div class="profile profile_beige">
                  <img src={son} />
                  <div class="profile-contents">
                    <h2>
                      손석훈 <span>AI 개발자</span>
                    </h2>
                    <p>
                      경로추적을 통한 승객 신변보호 방법 특허 출원
                      <br />
                      서원대학교 반도체 융합 소프트웨어 포트폴리오 경진대회 3등
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <br />
      </Container>
    </Section>
  );
};

export default Blog;
