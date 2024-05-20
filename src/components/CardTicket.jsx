import "../styles/CardTicket.css";
import Warta from "../assets/Warta-2.png";
import Profile from "../assets/jogja-gallery-profile.png";
function CardTicket() {
  return (
    <>
      <section>
        <div className="container-ticket">
          <div className="card-ticket">
            <img src={Warta} alt="Pameran Seni Rupa Warta #2" />
            <div className="container-text-ticket">
              <div className="title-pameran">Pameran Seni Rupa Warta #2</div>
              <div className="tgl-pameran">08 May - 12 May 2024</div>
              <div className="price-pameran">Rp. 100.000</div>
            </div>
            <div className="container-profile">
              <img src={Profile} alt="" />
              <div className="profile-name">Jogja Gallery</div>
            </div>
          </div>
          <div className="card-ticket">
            <img src={Warta} alt="Pameran Seni Rupa Warta #2" />
            <div className="container-text-ticket">
              <div className="title-pameran">Pameran Seni Rupa Warta #2</div>
              <div className="tgl-pameran">08 May - 12 May 2024</div>
              <div className="price-pameran">Rp. 100.000</div>
            </div>
            <div className="container-profile">
              <img src={Profile} alt="" />
              <div className="profile-name">Jogja Gallery</div>
            </div>
          </div>
          <div className="card-ticket">
            <img src={Warta} alt="Pameran Seni Rupa Warta #2" />
            <div className="container-text-ticket">
              <div className="title-pameran">Pameran Seni Rupa Warta #2</div>
              <div className="tgl-pameran">08 May - 12 May 2024</div>
              <div className="price-pameran">Rp. 100.000</div>
            </div>
            <div className="container-profile">
              <img src={Profile} alt="" />
              <div className="profile-name">Jogja Gallery</div>
            </div>
          </div>
        </div>
        <div className="container-ticket">
          <div className="card-ticket">
            <img src={Warta} alt="Pameran Seni Rupa Warta #2" />
            <div className="container-text-ticket">
              <div className="title-pameran">Pameran Seni Rupa Warta #2</div>
              <div className="tgl-pameran">08 May - 12 May 2024</div>
              <div className="price-pameran">Rp. 100.000</div>
            </div>
            <div className="container-profile">
              <img src={Profile} alt="" />
              <div className="profile-name">Jogja Gallery</div>
            </div>
          </div>
          <div className="card-ticket">
            <img src={Warta} alt="Pameran Seni Rupa Warta #2" />
            <div className="container-text-ticket">
              <div className="title-pameran">Pameran Seni Rupa Warta #2</div>
              <div className="tgl-pameran">08 May - 12 May 2024</div>
              <div className="price-pameran">Rp. 100.000</div>
            </div>
            <div className="container-profile">
              <img src={Profile} alt="" />
              <div className="profile-name">Jogja Gallery</div>
            </div>
          </div>
          <div className="card-ticket">
            <img src={Warta} alt="Pameran Seni Rupa Warta #2" />
            <div className="container-text-ticket">
              <div className="title-pameran">Pameran Seni Rupa Warta #2</div>
              <div className="tgl-pameran">08 May - 12 May 2024</div>
              <div className="price-pameran">Rp. 100.000</div>
            </div>
            <div className="container-profile">
              <img src={Profile} alt="" />
              <div className="profile-name">Jogja Gallery</div>
            </div>
          </div>
        </div>
        <div className="pagination">
          <ul>
            <li>
              <a href="#1" className="active">1</a>
            </li>
            <li>
              <a href="#2">2</a>
            </li>
            <li>
              <a href="#3">3</a>
            </li>
            <li>
              <a href="#4">4</a>
            </li>
            <li>
              <a href="#5">5</a>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}

export default CardTicket;
