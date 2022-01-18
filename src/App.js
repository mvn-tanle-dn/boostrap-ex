import "./assets/scss/styles.scss";
import Accordion from "./components/Accordion";
import Alert from "./components/Alert";
import Badge from "./components/Badge";
import Card from "./components/Card";
import Carousel from "./components/Carousel";
import Collapse from "./components/Collapse";
import Modal from "./components/Modal";
import Progress from "./components/Progress";
import Spinner from "./components/Spinner";

function App() {
  return (
    <ul className="container app">
      <li className="app-item">
        <Accordion
          title="Hello work"
          content="This is the first item's accordion body. It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions"
        />
      </li>
      <li className="app-item">
        <Alert content="Nice, you triggered this alert message!" color="info" />
      </li>
      {/* <li className="app-item">
        <Badge />
      </li> */}
      <li className="app-item">
        <Card
          img="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
          title="Card title"
          desc="Some quick example text to build on the card title and make up the bulk of the card's content."
        />
      </li>
      <li className="app-item">
        <Carousel />
      </li>
      <li className="app-item">
        <Collapse
          id="collapse-1"
          content="Some placeholder content for the collapse component. This panel is
            hidden by default but revealed when the user activates the relevant
            trigger."
        />
      </li>
      <li className="app-item">
        <Spinner type="spinner" color="primary" />
        <Spinner type="spinner-grow" color="success" />
        <Spinner type="spinner" color="danger" />
      </li>
      <li className="app-item">
        <Modal />
      </li>
      <li className="app-item">
        <Progress color="primary" value="500" />
      </li>
    </ul>
  );
}

export default App;
