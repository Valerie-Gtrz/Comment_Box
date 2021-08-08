import { Jumbotron } from "react-bootstrap";
import { useHistory } from "react-router-dom"



function ThankYou() {

const history= useHistory();

// function clickHomeHandler(){
// history.push("/");
// }


  return (
    <div className="container" style={{ textAlign: "center" }}>
      <Jumbotron className="jumbotron">
        <h1>Thank you, your comment has been submitted.</h1>
      </Jumbotron>
      <button className="btn btn-primary" onClick={() => history.push("/")}>
        Return to Home screen
      </button>
    </div>
  );
}

export default ThankYou;
