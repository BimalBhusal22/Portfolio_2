const ProjectsSection2 = () => {
  return (
    <div className=" h-[calc(400px+20vw)] basis-[100%] md:basis-1/2 lg:basis-1/3">
      <div className="h-[100%]">
        <div className="bg-[#D4FAE2] m-6 h-[92%] p-8 rounded-[70px] relative">
          <div className="font-['Monoton'] text-[#640C19] text-[calc(10px+1.5vw)] uppercase text-center mb-3">
            ERP
          </div>

          <div className="text-[#7E7474] text-justify text-[15px] md:text-[16px] lg:text-[18px] ">
            Handled ERP level project as a Full stack Sr. Developer. Maintained
            CICD and piplines of the project<p> Project handles the student data
            from start to the end where all the information are relayed through
            the ERP software</p> ERP software for Consultancy that Manages the data
            of every visitors to the processing visa and language classes.<p> One
            of the massive project that i handled as a lead.</p>
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

export default ProjectsSection2;
