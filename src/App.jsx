import { useState } from "react";
import voyagesOne from "/voyages1.png";
import "./App.css";
import DownloadPDFVol1 from "./components/DownloadPDFVol1.jsx";
import DownloadEPUBVol1 from "./components/DownloadEPUBVol1.jsx";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "spaced-around",
        }}>
        <div>
          <a
            href="https://www.facebook.com/profile.php?id=61569913277354"
            target="_blank">
            <FacebookIcon />
          </a>
        </div>
        <div>
          <a
            href="https://www.instagram.com/the_voyages_of_victora/profilecard/?igsh=eHUxd2J5MDNsMmh4"
            target="_blank">
            <InstagramIcon />
          </a>
        </div>
      </div>
      <br />
      <h3>
        Author:&nbsp;
        <a href="https://x.com/chris_feveck" target="_blank">
          Chris Feveck
        </a>
      </h3>
      <h1>The Voyages of Victora.</h1>
      <h3>
        Embark on a thrilling adventure with Captain Bartley and his eclectic
        crew.
      </h3>
      <hr />
      <br />
      <div>
        <h2>Series List</h2>
      </div>
      <div>
        <div className="series-list-item">
          <h3>The Voyages of Victora : Volume one</h3>
          <div>
            <img src={voyagesOne} width={440} />
          </div>
          <div>
            <DownloadPDFVol1 />
            &nbsp;
            <DownloadEPUBVol1 />
            &nbsp;
            <button style={{ margin: "1rem" }}>
              <a
                href="https://docs.google.com/document/d/e/2PACX-1vR1dUdgk4A1B1bVBE-LqsCe993vsW9kc4EGpjM1aR1x-yZPJdfhxncWV_Ndu-yWBsJ4nVtNy7p6iXXA/pub"
                target="_blank">
                Link To EBook
              </a>
            </button>
          </div>
          <p>
            Captain Bartley, a charming and adventurous gentleman, leads his
            eclectic crew on a daring quest across the high seas. With his loyal
            first mate, a mysterious fish-man, and the formidable crew. Captain
            Bartley embarks on an unforgettable journey filled with danger,
            excitement, betrayal. &nbsp;
            <span id="series-one-hidden-text">
              As the crew faces the challenges of treacherous waters and
              formidable foes, they must rely on their wits, and bonds to
              succeed. "The Voyages of Victora" is a swashbuckling adventure
              that captures the spirit of exploration and the thrill of the
              hunt. Join Captain Bartley and his crew as they navigate the
              perils of the sea in pursuit of glory and fortune.
            </span>
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
