import spinner from "../assets/img/Shop vintage posters.jpg";

const Footer = () => {
  return (
    <footer className="footer bg-second">
      <div className="container">
        <div className="row">
          <div className="col-md-2 col-12 footer-title-box">
            <h4 className="section-title">در پایان</h4>
          </div>

          <div className="col-md-7 col-12 footer-paragraph-box">
            <p>
              ممنونم که از سایت من دیدن کردید، امیدوارم بتونیم همکاری های خوبی
              در آینده باهم داشته باشیم
            </p>
          </div>

          <div className="col-md-3 col-12 px-0">
            <div className="footer-spinner-box">
              <img className="footer-spinner" src={spinner} alt="spinner" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
