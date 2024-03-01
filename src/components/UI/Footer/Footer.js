import React from "react";

import Link from "../Link/Link";

const footer = () => {
  return (
    <footer className="">
      <div className="container text-light pt-5">
        <div className="row">
          <div className="col-sm-6 col-md-6 col-lg-4 mb-5">
            <div className="footer-title">
              <h6>조직 소개</h6>
            </div>
            <div className="footer-content">
              <p>
                <small>차세대 보안 리더 양성 프로그램 12기 최고 아웃풋</small>
              </p>
            </div>
          </div>
          <div className="col-sm-6 col-md-6 col-lg-2 mb-5">
            <div className="footer-title">
              <h6>Quick Links</h6>
            </div>
            <div className="footer-content">
              <ul className="list-group quick-links">
                <li>
                  <Link target="home" offset={-120}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link target="about">소개</Link>
                </li>
                <li>
                  <Link target="services">기술과 서비스</Link>
                </li>
                <li>
                  <Link target="blog">구성원</Link>
                </li>
                {/* <li>
                  <Link target="contact">Contact</Link>
                </li> */}
              </ul>
            </div>
          </div>
          <div className="col-sm-6 col-md-6 col-lg-3 mb-5">
            <div className="footer-title">
              <h6>최근 소식</h6>
            </div>
            <div className="footer-content">
              <p>
                <small className=""></small>
              </p>
              <p>
                <small className="">
                  비오가 비오비에 합격하면 '비오비오비'.. 네티즌들 "충격 "
                  (더보기)
                </small>
              </p>
              <p>
                <small className="">
                  그랑프리 우승 못 할 시 원장실에서 간장 샤워..
                </small>
              </p>
            </div>
          </div>
          <div className="col-sm-6 col-md-6 col-lg-3 mb-5">
            <div className="footer-title">
              <h6>Contact Us</h6>
            </div>
            <div className="footer-content">
              <p className="">
                <small>
                  Address : 서울 금천구 서부샛길 606 대성디폴리스지식산업센터
                </small>
              </p>
              <p className="">
                <small>사업자 번호 : 123 456 789</small>
              </p>
              <p className="">
                <small>이메일 : test@gmail.com</small>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom-footer pt-3 pb-3 text-center">
        <small>© All Right Reserved. 2024 | RedG Company</small>
      </div>
    </footer>
  );
};

export default footer;
