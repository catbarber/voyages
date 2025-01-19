import voyagesOne from "/voyages1.png";
import "./App.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
function App() {
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
            <br />
            <span>fACEBOOK</span>&nbsp;&nbsp;
          </a>
        </div>
        <div>
          <a
            href="https://www.instagram.com/the_voyages_of_victora/profilecard/?igsh=eHUxd2J5MDNsMmh4"
            target="_blank">
            <InstagramIcon />
            <br />
            <span>Instagram</span>&nbsp;&nbsp;
          </a>
        </div>
        <div>
          <a href="https://x.com/victora_voyages" target="_blank">
            <XIcon />
            <br />
            <span>X.com</span>
          </a>
        </div>
      </div>
      <br />
      <h3>
        Author:&nbsp;
        <a href="https://chris-feveck.com" target="_blank">
          Christopher Feveck
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
            <img
              src={voyagesOne}
              width={440}
              alt="A pirate ship at night on rough seas."
            />
          </div>
          <div>
            <button
              style={{
                margin: "1rem",
                backgroundColor: "#292b2c",
              }}>
              <a
                style={{ color: "#f7f7f7" }}
                href="https://www.amazon.ca/dp/B0DQJWVS97/ref=cbw_us_ca_dp_narx_gl_book"
                target="_blank">
                Paperback Edition
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
            <span className="invisible">
              pirate fantasy, young adult fantasy, fantasy adventure, pirate
              books for teens, seafaring fantasy, pirate fantasy with magic,
              fantasy pirates on the high seas, young adult fantasy pirates,
              swashbuckling fantasy, mythical creatures at sea, female pirate,
              young adult fantasy with strong female protagonist, mythical
              creatures at sea, fantasy pirates with powers, dark pirate
              fantasy, humorous pirate fantasy, gritty pirate fantasy, best
              young adult pirate fantasy novels, fantasy books about pirates for
              teenagers, where t find a good pirate fantasy books
            </span>
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
