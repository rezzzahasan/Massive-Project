import "../styles/Testimonial.css";
import Star from "../assets/Star.svg";
import Profile from "../assets/Profile.png";

const Testimonial = () => {
  const testimonials = [
    {
      review:
        "Platform ini sangat bermanfaat untuk menemukan acara lokal yang relevan dengan minat saya.",
      name: "Ayu Permata",
      job: "Fotografer",
      imgSrc: Profile,
    },
    {
      review:
        "Situs ini memudahkan saya dalam mencari event komunitas yang diadakan dekat dengan lokasi saya.",
      name: "Budi Santoso",
      job: "Penggiat Komunitas",
      imgSrc: Profile,
    },
    {
      review:
        "Layanan ini sangat membantu saya menemukan tempat-tempat menarik di sekitar saya dengan mudah.",
      name: "Siti Nurhaliza",
      job: "Pemandu Wisata",
      imgSrc: Profile,
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
