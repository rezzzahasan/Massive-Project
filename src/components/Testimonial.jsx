import "../styles/Testimonial.css";
import Star from "../assets/Star.svg";

const Testimonial = () => {
  const testimonials = [
    {
      review:
        "Website ini sangat membantu sekali untuk mencari lokasi yang sedang diadakan daerah terdekat domisili saya",
      name: "John Doe",
      job: "Designer",
      imgSrc: "img/Profile.png",
    },
    {
      review:
        "Website ini sangat membantu sekali untuk mencari lokasi yang sedang diadakan daerah terdekat domisili saya",
      name: "Khufra",
      job: "Komunitas Abstract Art",
      imgSrc: "img/Profile.png",
    },
    {
      review:
        "Website ini sangat membantu sekali untuk mencari lokasi yang sedang diadakan daerah terdekat domisili saya",
      name: "Marnix",
      job: "Jungler",
      imgSrc: "img/Profile.png",
    },
  ];

  return (
    <section className="testimonial">
      <div className="text">
        <h1>Apa kata mereka tentang Jogja Arthibition?</h1>
      </div>
      <div className="container-testimonial">
        {testimonials.map((testimonial, index) => (
          <div className="card" key={index}>
            <div className="card-item">
              <div className="star">
                {[...Array(5)].map((_, starIndex) => (
                  <img key={starIndex} src={Star} alt="star" />
                ))}
              </div>
              <div className="review">{testimonial.review}</div>
              <a href="">Baca Cerita Selengkapnya</a>
            </div>
            <div className="profile">
              <img src={testimonial.imgSrc} alt="profile" />
              <div className="name-card">
                <div className="name">{testimonial.name}</div>
                <div className="job">{testimonial.job}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
