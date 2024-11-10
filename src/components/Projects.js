import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/img1.jpeg";
import projImg2 from "../assets/img/img2.jpeg";
import projImg3 from "../assets/img/img3.jpeg";
import projImg4 from "../assets/img/img4.jpeg";
import projImg5 from "../assets/img/img5.jpeg";
import projImg6 from "../assets/img/img6.jpeg";
import projImg7 from "../assets/img/img7.jpeg";
import projImg8 from "../assets/img/img8.jpeg";
import projImg9 from "../assets/img/img9.jpeg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const workExperience = [
    {
      title: "Onboard de Projetos e BackOffice",
      description: "TIP Tecnologia - Janeiro 2024 a Abril 2024",
      imgUrl: projImg1,
    },
    {
      title: "Analista em Suporte de MVNO",
      description: "TIP Tecnologia - Abril 2024 até o momento",
      imgUrl: projImg2,
    }
  ];

  const education = [
    {
      title: "Bacharelado em Sistemas de Informação",
      description: "UNASP - Previsão de formação: Jun/2026",
      imgUrl: projImg3,
    },
    {
      title: "Técnico em Administração Integrado ao Ensino Médio",
      description: "ETEC Centro Paula Souza - Concluído: 2017 - 2019",
      imgUrl: projImg4,
    }
  ];

  const skills = [
    {
      title: "Habilidades Técnicas",
      description: "Java, Python, MySQL, Linux, UX/UI, Git/GitHub, Office 365",
      imgUrl: projImg5,
    },
    {
      title: "Outras Habilidades",
      description: "Figma, Trello, HTML, JavaScript, CSS",
      imgUrl: projImg6,
    },
    {
      title: "Idiomas",
      description: "Inglês (Intermediário), Francês (Básico), Libras (Básico)",
      imgUrl: projImg7,
    }
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Olivia Sampaio Prestes</h2>
                <p>Estudante de Sistemas de Informação no 6º semestre, apaixonada por tecnologia e inovação. Proativa, comunicativa e com facilidade de aprendizado. Busco contribuir positivamente e eficazmente em todos os projetos em que participo.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Experiência de Trabalho</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Educação</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Skills</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          workExperience.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <Row>
                        {
                          education.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <Row>
                        {
                          skills.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
