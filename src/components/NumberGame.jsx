const NumberGame = () => {
  return (
    <div className="w-[95%] bg-[#FFE2E6] flex flex-wrap justify-evenly m-auto rounded-[3vw]">


      <div className="h-[45vw]  basis-[100%] sm:basis-1/2 lg:basis-1/3 flex flex-column flex-wrap justify-center  content-center">
        <div className=" font-['Monoton'] text-[#640C19] text-[6.4vw] relative flex justify-center uppercase ">
          80+
          <div className="text-[calc(8px+0.5vw)] w-[100%] absolute bottom-0">
            projects
          </div>
        </div>
        <img src="80plusProjects.png" className="h-[18vw] " />
      </div>


      <div className="h-[45vw]  basis-[100%] sm:basis-1/2 lg:basis-1/3 flex flex-column flex-wrap justify-center  content-center">
      <div className="w-[100%] flex justify-center">
        <img src="10plusCertificates.png" className="h-[18vw] " />
        </div>
        <div className=" font-['Monoton'] text-[#640C19] text-[6.4vw] relative flex justify-center uppercase ">
          10+
          <div className="text-[calc(8px+0.5vw)] w-[100%] absolute bottom-0">
            certificates
          </div>
        </div>
      </div>


      <div className="h-[45vw]  basis-[100%] sm:basis-1/2 lg:basis-1/3 flex flex-column flex-wrap justify-center  content-center">
        <div className=" font-['Monoton'] text-[#640C19] text-[6.4vw] relative flex justify-center uppercase ">
          100+
          <div className="text-[calc(8px+0.5vw)] w-[100%] absolute bottom-0">
            happy clients
          </div>
        </div>
        <img src="80plusProjects.png" className="h-[18vw] " />
      </div>
    </div>
  );
};
export default NumberGame;
