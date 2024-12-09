import logoFooter from "../../assets/img/logo-footer.png";
import banner from "../../assets/img/bg-shadow.png";
const Footer = () => {
  return (
    <div className="my-14 bg-black pt-32 relative">
      <div
        className="bg-white w-3/6 absolute lg:bottom-[500px] lg:left-[360px] md:bottom-[550px] md:left-[200px] text-center rounded-xl space-y-6 p-16 bg-center bg-cover hidden md:block"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <h1 className="text-3xl font-bold">Subscribe to our Newsletter</h1>
        <h2 className="text-lg">
          Get the latest updates and news right in your inbox!
        </h2>
        <div className="join">
          <input
            type="text"
            placeholder="Enter Your Email"
            className="input input-bordered join-item"
          />
          <button className="btn btn-primary join-item bg-gradient-to-r from-yellow-400 to-red-300 border-none text-black">
            Subscribe
          </button>
        </div>
      </div>
      <div className="flex items-center justify-center m-10">
        <img src={logoFooter} alt="" />
      </div>

      <footer className="footer bg-black p-10 text-white">
        <nav>
          <h6 className="footer-title">About Us</h6>
          <p>
            We are a passionate team dedicated to providing <br /> the best
            services to our customers.
          </p>
        </nav>
        <nav>
          <h6 className="footer-title">Quick Links</h6>
          <a className="link link-hover">Home</a>
          <a className="link link-hover">Service</a>
          <a className="link link-hover">About</a>
          <a className="link link-hover">Contact</a>
        </nav>
        <form>
          <h6 className="footer-title">Subscribe</h6>
          <p className="my-5">
            Subscribe to our newsletter <br /> for the latest updates.
          </p>
          <fieldset className="form-control w-80">
            <div className="join">
              <input
                type="text"
                placeholder="Enter Your Email"
                className="input input-bordered join-item"
              />
              <button className="btn btn-primary join-item bg-gradient-to-r from-yellow-400 to-red-300 border-none text-black">
                Subscribe
              </button>
            </div>
          </fieldset>
        </form>
      </footer>
      <div className="text-gray-500 text-center p-5 border-t">
        <small>@2024 Your Company All Rights Reserved.</small>
      </div>
    </div>
  );
};

export default Footer;
