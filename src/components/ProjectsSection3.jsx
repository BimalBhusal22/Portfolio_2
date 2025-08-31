const ProjectsSection3 = () => {
  return (
    <div className=" h-[calc(400px+20vw)] basis-[100%] md:basis-1/2 lg:basis-1/3">
      <div className="h-[100%]">
        <div className="bg-[#FCFFE2] m-6 h-[55%] p-8 rounded-[70px] relative">
          <div className="font-['Monoton'] text-[#640C19] text-[calc(10px+1.5vw)] uppercase text-center mb-3">
            Governance
          </div>

          <div className="text-[#7E7474] text-justify text-[15px] md:text-[16px] lg:text-[18px] ">
            Designed Fully Responsive Website With CMS and dynamic Content for
            Government. Every employee data is handled through that web
            Application
          </div>
          <button
                type="button"
                className="bg-[white] rounded-[50%] h-[calc(50px+1vw)] w-[calc(50px+1vw)] flex justify-center items-center absolute -bottom-[5px] -right-[5px] "
              >
                <img
                  src="bottomRightArrow.svg"
                  className="h-[calc(20px+3vw)] "
                />
              </button>
        </div>
        <div className="bg-[#E7E2FF] m-6 h-[33%] rounded-[70px] relative p-8">
          <div className="font-['Monoton'] text-[#640C19] text-[calc(10px+1.5vw)] uppercase text-center mb-3">
            Freelance
          </div>

          <div className="text-[#7E7474] text-justify text-[15px] md:text-[16px] lg:text-[18px] ">
            Completed Many Freelance project considering  the deadline and budget
          </div>
          <button
                type="button"
                className="bg-[white] rounded-[50%] h-[calc(50px+1vw)] w-[calc(50px+1vw)] flex justify-center items-center absolute -bottom-[5px] -right-[5px] "
              >
                <img
                  src="bottomRightArrow.svg"
                  className="h-[calc(20px+3vw)] "
                />
              </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection3;
