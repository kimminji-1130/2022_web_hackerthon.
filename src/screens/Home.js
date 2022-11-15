import { textAlign, width } from "@mui/system";
import React from "react";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from "react-bootstrap/Carousel";
import Stack from "react-bootstrap/Stack";
import Button from "react-bootstrap/Button";
// import React, { useState } from "react";

function Home() {
    // let [good, goodchange] = useState(0);

    return (
        <Container fluid style={{ backgroundColor: "green", height: "700px" }}>
            <Container>
                <Row className="justify-content-center">
                    <Col md="auto">
                        <h4>Welcome Osaka!</h4>
                    </Col>
                </Row>

                <Row className="justify-content-center">
                    <Col md="auto">
                        <h5>서울 평균</h5>
                    </Col>
                </Row>

                {/* <Container style={{ backgroundColor: "", height: "500px" }}>
                    <Container className="ratio ratio-16x9" style={{width:"860px" ,height:"500px", alignItems:"center"}}>
                        <iframe
                            width="640"
                            height="460"
                            src="https://www.youtube.com/embed/O1sZPY1_pJI"
                            title="【일본 4K 랜선 산책】 일본 오사카 난바 도톤보리 걸어보기🚶🏻 l 오랜만에 오사카 여행 온 기분 내기"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen
                        ></iframe>
                    </Container>
                    
                    <Row
                        style={{
                            backgroundColor: "",
                            margin: "10px 0px",
                            height: "480px",
                            alignItems: "center",
                        }}
                    >
                        <Col>
                            <Container className="ratio ratio-16x9">
                                <iframe
                                    width="640"
                                    height="460"
                                    src="https://www.youtube.com/embed/O1sZPY1_pJI"
                                    title="【일본 4K 랜선 산책】 일본 오사카 난바 도톤보리 걸어보기🚶🏻 l 오랜만에 오사카 여행 온 기분 내기"
                                    frameborder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowfullscreen
                                ></iframe>
                            </Container>
                        </Col>

                        <Col>
                            <Container style={{ backgroundColor: "" }}>
                                <h1>gd</h1>
                            </Container>
                        </Col>
                    </Row>
                </Container> */}


<Container fluid style={{ backgroundColor: "black", height: "616px"  }}>
            <Row className="justify-content-md-center">
                <Col md="auto" style={{ marginTop: "100px", color: "white" }}>
                    <h1>사계절 다양하게 즐기는 오사카의 축제</h1>
                </Col>
            </Row>
            <Container style={{ backgroundColor: "blue", height: "450px" }}>
                <Stack gap={10}>
                    <Row
                        className="justify-content-md-center"
                        style={{ textAlign: "center", marginTop: "150px" }}
                    >
                        <Col md={3} style={{ color: "white" }}>
                            <Col style={{margin:"10px"}}>
                                <img
                                    src={
                                        process.env.PUBLIC_URL +
                                        "/image2/omiztori.jpg"
                                    }
                                    width="80"
                                    height="150"
                                    data-reactied="266"
                                    objective-fit="contain"
                                    className="d-block w-100"
                                    alt="Second slide"
                                />
                            </Col>
                            <Col >오미즈토리 마츠리</Col>
                            <Col>- 날짜 : 매년 3월 1-14일</Col>
                                    <Col>- 장소 : 도다이지</Col>
                                    <button>상세보기</button>
                        </Col>
                        <Col md={3} style={{ color: "white" }}>
                            <Col style={{margin:"10px"}}>
                                <img
                                    src={
                                        process.env.PUBLIC_URL +
                                        "/image2/sacurano.jpg"
                                    }
                                    width="80"
                                    height="150"
                                    data-reactied="266"
                                    objective-fit="contain"
                                    className="d-block w-100"
                                    alt="Second slide"
                                />
                            </Col>
                            <Col >사쿠라노 도리누케</Col>
                            <Col>- 날짜 : 매년 4월 초에서 중순</Col>
                            <Col>- 장소 : 오사카 조폐 박물관 구내</Col>
                            <button>상세보기</button>
                        </Col><Col md={3} style={{ color: "white" }}>
                            <Col style={{margin:"10px"}}>
                                <img
                                    src={
                                        process.env.PUBLIC_URL +
                                        "/image2/gyotogion.jpg"
                                    }
                                    width="80"
                                    height="150"
                                    data-reactied="266"
                                    objective-fit="contain"
                                    className="d-block w-100"
                                    alt="Second slide"
                                />
                            </Col>
                            <Col >교토 기온 마츠리</Col>
                            <Col>- 날짜 : 매년 7월 1-31일</Col>
                                    <Col>- 장소 : 야사카 신사</Col>
                                    <button>상세보기</button>
                        </Col><Col md={3} style={{ color: "white" }}>
                            <Col style={{margin:"10px"}}>
                                <img
                                    src={
                                        process.env.PUBLIC_URL +
                                        "/image2/chrismas.jpg"
                                    }
                                    width="80"
                                    height="150"
                                    data-reactied="266"
                                    objective-fit="contain"
                                    className="d-block w-100"
                                    alt="Second slide"
                                />
                            </Col>
                            <Col >유니버설 크리스마스 축제</Col>
                            <Col>- 날짜 : 11월 11일 - 1월 9일</Col>
                                    <Col>- 장소 : 유니버설 스튜디오 재팬</Col>
                                    <button>상세보기</button>
                        </Col>
                    </Row>
                </Stack>
            </Container>
        </Container>

            </Container>
        </Container>
    );
}

export default Home;
