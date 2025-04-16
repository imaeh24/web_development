import Header from "../../components/Header"
import HeaderImage from "../../images/header_bg_1.jpg"
import StoryImage from "../../images/about1.jpg"
import VisionImage from "../../images/about2.jpg"
import MissionImage from "../../images/about3.jpg"
import "./about.css"

const About = () => {
  return (
    <>
    <Header title="About Us" image={HeaderImage}>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia accusantium at cum rem rerum repellendus repudiandae eius ea! Possimus, labore.
    </Header>
    <section className="about__story">
      <div className="container about__story-container">
        <div className="about__section-image">
          <img src={StoryImage} alt="Our Story" />
        </div>
        <div className="about__section-content">
          <h1>Our Story</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit esse voluptatem excepturi iste 
            doloribus magni repellat laboriosam ducimus accusamus autem ipsa corporis quos illo hic modi unde, 
            beatae fuga reiciendis quae et sunt voluptatum dolorum obcaecati. Aut doloremque vitae earum.
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis quibusdam beatae quae! Impedit nemo eaque, placeat maiores voluptate ex id tenetur repellendus cupiditate nam. Provident?
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio beatae explicabo quam.
          </p>
        </div>
      </div>
    </section>

    <section className="about__Vision">
      <div className="container about__Vision-container">
        <div className="about__section-content">
          <h1>Our Vision</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit esse voluptatem excepturi iste 
            doloribus magni repellat laboriosam ducimus accusamus autem ipsa corporis quos illo hic modi unde, 
            beatae fuga reiciendis quae et sunt voluptatum dolorum obcaecati. Aut doloremque vitae earum.
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis quibusdam beatae quae! Impedit nemo eaque, placeat maiores voluptate ex id tenetur repellendus cupiditate nam. Provident?
          </p>
        </div>
        <div className="about__section-image">
          <img src={VisionImage} alt="Our Vision" />
        </div>
      </div>
    </section>

    <section className="about__mission">
      <div className="container about__mission-container">
        <div className="about__section-image">
          <img src={MissionImage} alt="Our Mission" />
        </div>
        <div className="about__section-content">
          <h1>Our Mission</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit esse voluptatem excepturi iste 
            doloribus magni repellat laboriosam ducimus accusamus autem ipsa corporis quos illo hic modi unde, 
            beatae fuga reiciendis quae et sunt voluptatum dolorum obcaecati. Aut doloremque vitae earum.
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis quibusdam beatae quae! Impedit nemo eaque, placeat maiores voluptate ex id tenetur repellendus cupiditate nam. Provident?
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio beatae explicabo quam.
          </p>
        </div>
      </div>
    </section>
    </>
  )
}

export default About
