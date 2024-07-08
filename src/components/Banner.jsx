import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "animate.css";
import TrackVisibility from "react-on-screen";


export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(150);  // Adjusted for smoother text effects
  const toRotate = [
    "Web Developer..?",
    "Graphic Designer..?",
    "UI/UX Designer..?",
    "Software Engineer..?",
  ];
  const period = 2000; // Time to display each word

  useEffect(() => {
    const tick = () => {
      let i = loopNum % toRotate.length;
      let fullText = toRotate[i];
      let updatedText = isDeleting
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1);

      setText(updatedText);

      if (isDeleting) {
        setDelta(100);  // Adjusted for letter by letter deletion
      }

      if (!isDeleting && updatedText === fullText) {
        setIsDeleting(true);
        setDelta(period);  // Adjusted for letter by letter typing
      } else if (isDeleting && updatedText === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setDelta(150);  // Adjusted for letter by letter typing
      }
    };

    const ticker = setInterval(tick, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text, delta, loopNum, isDeleting]); 

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h1>
                    {`Looking for `}
                    <br />
                    <span className="txt-rotate">
                      <span className="wrap">
                        <span className="gradient-text">{text}</span>
                      </span>
                    </span>
                  </h1>
                  <p>
                    We bring services right to your fingertips, offering a consistent and convenient way to access a wide range of solutions
                  </p>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
