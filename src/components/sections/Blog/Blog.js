import React from "react";
import Section from "../../../HOC/Section";
import { Container, Row, Col, Card } from "react-bootstrap";
import ceo from "../../../assets/img/ceo.png";

const Blog = () => {
  // 직원 정보 배열
  const employees = [
    { name: "CEO 홍지원", role: "비오비 12기 디포 부반장", image: ceo },
    { name: "CEO 홍지원", role: "비오비 12기 디포 부반장", image: ceo },
    // 추가 직원 정보...
  ];

  return (
    <Section id="blog">
      <Container className="pt-2 pb-5">
        <div className="section-header pt-5 pb-5 text-center">
          <h3 className="section-title">
            <span>조직 </span>구성원
          </h3>
          <h6 className="section-subtitle mr-auto ml-auto">
            비오비 12기 개그 소모임
          </h6>
        </div>
        <div className="section-content">
          {employees.map((employee, index) => (
            <Row className="align-items-center mb-5" key={index}>
              <Col
                lg={6}
                className={index % 2 === 0 ? "pe-0" : "ps-0 order-lg-2"}
              >
                <Card className="h-100">
                  <Card.Img
                    variant="top"
                    src={employee.image}
                    style={{ objectFit: "cover", height: "300px" }}
                  />
                  <Card.Body>
                    <Card.Title>{employee.name}</Card.Title>
                    <Card.Text>{employee.role}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col
                lg={6}
                className={index % 2 === 0 ? "ps-0" : "pe-0 order-lg-1"}
              >
                <div className="h-100 d-flex align-items-center">
                  <p>
                    직원에 대한 자세한 설명을 여기에 작성할 수 있습니다. 이
                    직원의 역할, 성과, 개인적인 이야기 등을 포함할 수 있습니다.
                  </p>
                </div>
              </Col>
            </Row>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default Blog;
