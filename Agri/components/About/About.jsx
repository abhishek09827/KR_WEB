import "./About.css";
import Farmer from "../../assests/kissan3.jpeg";

const About = () => {
  return (
    <div className="about">
      <div className="container">
        <div className="image">
          <img src={Farmer} alt="" />
        </div>
      </div>

      <div className="desc">
        <h3>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum
          quidem optio atque numquam voluptatem laboriosam fugiat quis iusto
          ratione tempora.
        </h3>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit
          harum neque quaerat excepturi. Cupiditate eligendi labore, molestias
          ex omnis similique vero debitis optio culpa accusamus reiciendis
          facilis sit cumque ab. Molestias deserunt incidunt aliquid sed sunt
          deleniti fuga aut, ratione mollitia est recusandae excepturi nihil
          similique nemo id sint? Provident officiis cumque ipsa numquam. Amet,
          laudantium.
        </p>
      </div>
    </div>
  );
};

export default About;
