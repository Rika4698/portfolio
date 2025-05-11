

const Education = () => {
    return (
        <div id="education" className="py-20 bg-gray-800 text-white ">
      <h3
        className="text-4xl text-center font-clashDisplay font-semibold underline underline-offset-8 decoration-sky-400"
        data-aos="fade-down"
      >
        My Education
      </h3>
      <div className="container mx-auto my-20 px-8 md:pl-10">
        <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
          <li>
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-start md:text-end mb-10">
              <time className="font-mono italic">Bachelor of Science(2018-2022)</time>
              <div className="text-base font-black md:text-lg">Institute of Science Trade & Technology</div>B.Sc(HONS) in Computer Science & Engineering
            </div>
            <hr className="bg-black" />
          </li>
          <li>
            <hr className="bg-white"/>
            <div className="timeline-middle ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-end mb-10">
              <time className="font-mono italic">Complete Web Development Course(frontend,2023)</time>
              <div className="text-base font-black md:text-lg">Programming Hero</div>Web Development
            </div>
            <hr className="bg-white" />
          </li>
        </ul>
      </div>
    </div>
    );
};

export default Education;