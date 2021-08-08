import { useState } from "react";
import { useHistory } from "react-router-dom"
import "./App.css";
import Button from "react-bootstrap/Button";
import Jumbotron from "react-bootstrap/Jumbotron";
//import ThankYou from "./ThankYou";

function Home() {
  const [clicked, setClicked] = useState(false);
  const [input, setInput] = useState(); //now I can use input in a submitHandler to push the information into the json
  const [emailInput, setEmailInput] = useState();

const history = useHistory();

  //on change to the text area, set the input to the value in text area
  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const clickHandler = () => {   ///clickhandler
    setClicked(!clicked);
  };

  const submitHandler = (e) => {   //submithandler
    e.preventDefault();
    //onsubmit post to json api
    if(!emailInput) window.alert("Please include your email address");
//if they click ok do nothing
    setInput("");
    //usehistory to send to thank you page
    setClicked(false);
    history.push("/thankyou")
  };

  console.log(input);
  console.log(emailInput);

  return (
  
    <div style={{ textAlign: "center" }}>
       <Jumbotron className="jumbotron">
      <h1>Thanks for stopping by</h1>
    </Jumbotron>
      <p>
        If you have any questions or comments please click the "comment" button
        below.
      </p>
      <Button variant="warning" className="button" onClick={clickHandler}>
        Comment
      </Button>
      {clicked && (
        <div>
          Thanks
          <div>
            <form>
            <label htmlFor="thanks">Your E-Mail Address:</label>
              <br />
              <input
                id="email"
                type="email"
                name="email"
                onChange={(e) => setEmailInput(e.target.value)}
                value={emailInput}
                placeholder="email@example.com"
                required={true}
              />
              <br />
              <textarea
                id="thanks"
                type="text"
                name="thanks"
                onChange={handleInputChange}
                value={input}
                required={true}
              />
              <div>
                <button
                  type="submit"
                  disabled={!input}
                  className="btn btn-primary"
                  onClick={submitHandler}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
