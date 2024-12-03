import { Helmet } from "react-helmet";

function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact Us - Bookmie Devs</title>
        <meta
          name="description"
          content="Get in touch with Bookmie Devs for inquiries and support."
        />
      </Helmet>
      <div
        style={{ backgroundImage: `url(${"/wave.svg"})` }}
        className="h-screen pt-5 items-center bg-slate-100 bg-cover bg-center justify-center flex space-y-5"
      >
        <div className="sm:w-1/3 w-full px-5 py-12 rounded-2xl mb-20 bg-slate-700 bg-opacity-15">
          <p className="text-3xl text-center font-extrabold text-slate-900">
            Contact Us
          </p>
          <p className="text-xl text-slate-950 text-center mb-6">
            Due to official reasons, we are currently using email for direct
            communication. To contact us, please use the button below to contact
            us via <strong>info@bookmie.com</strong>.
          </p>

          <div className="w-full mt-4">
            <a
              href="mailto:info@bookmie.com"
              className="bg-slate-800 text-white text-lg py-4 px-8 rounded-md w-full block text-center hover:bg-slate-700"
            >
              Contact Us via Email
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
