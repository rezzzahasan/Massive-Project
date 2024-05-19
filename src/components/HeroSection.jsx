import SearchIcon from "../assets/search-icon.svg";
const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="hero-title">
          Selami dunia pameran seni rupa di
          <span className="jogja"> Jogja Arthibition</span>
        </div>
        <div className="hero-sub-title">
          Memperkenalkan pengalaman Website terbaru kami untuk diri Anda!
        </div>
        <div className="search">
          <form action="/search" method="GET" className="search-form">
            <input
              type="text"
              name="query"
              placeholder="Search..."
              className="search-input"
            />
            <button type="submit" className="search-button">
              <img src={SearchIcon} alt="Search" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
