import Footer from "../Footer";

const Contact = () => {
  return (
    <div className="mt-20 lg:mt-32">
      <h1
        className="w-fit mx-auto text-primary-100 
      font_heading font-bold text-3xl mt-20 lg:text-6xl"
      >
        Get In Touch
      </h1>

      <p className="font_content w lg:w-2/5 text-center mx-auto mt-12 lg:text-xl">
        Hi, I’m currently looking for any new opportunities, my inbox is <br />
        always open. Whether you have a question or just want to say hi, <br />
        I’ll try my best to get back to you!
      </p>

      <div className="mt-14 w-fit mx-auto pb-10 lg:pb-16 font_content">
        <button
          className="bg-primary-100 hover:bg-primary-200 text-white font-bold 
          py-4 px-4 border border-transparent rounded w-40 flex gap-4"
        >
          Say Hello
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
            />
          </svg>
        </button>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
