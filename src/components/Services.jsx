const Services = () => {
  return (
    <div className="w-[95%]  my-12 m-auto flex flex-wrap justify-evenly">
      <div className="h-[calc(400px+20vw)]  basis-[100%] sm:basis-1/2 lg:basis-1/3 flex justify-center items-center ">
        <div className="h-[95%] w-[90%] flex flex-col flex-wrap justify-center  content-center rounded-[5vw]">
          <div className=" font-['Monoton'] text-[#640C19] text-[calc(10px+2.5vw)] uppercase ">
            Services
            <br /> We Provide
          </div>
          <div className="text-justify py-2">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </div>
          <button type="button" className="bg-[#FFDADA] mx-2 py-2 font-['Monoton'] text-[calc(10px+0.5vw)] uppercase rounded-[20px]">Learn More</button>
        </div>
      </div>

      <div className="h-[calc(400px+20vw)]  basis-[100%] sm:basis-1/2 lg:basis-1/3 flex justify-center items-center ">
        <div className="bg-[#C7E9FF] h-[95%] w-[90%] flex flex-col flex-wrap justify-evenly  items-center rounded-[5vw] relative">
        <button type="button" className="absolute -top-[5px] -right-[8px] bg-white  h-[calc(55px+3vw)] w-[calc(55px+3vw)] rounded-[50%] flex justify-center items-center">
          <img src="topRightArrow.png" className="transform scale-x-[-1] h-[calc(20px+3vw)]"/>
        </button>
          <div className=" font-['Monoton'] text-[#640C19] text-[calc(10px+1.5vw)] uppercase ">
            Web<br/> Development
          </div>
          <img src="webDevelopment.png" className="h-[calc(80px+10vw)]"/>
          <div className="text-[#640C19] text-center text-[20px] ">
          T
          <img src="dot.svg" className="inline m-2"/>
          CSS
          <img src="dot.svg" className="inline m-2"/>
          JAVA SCRIPT
          <img src="dot.svg" className="inline m-2"/>
          PROJECT
          </div>
        </div>
      </div>

      <div className="h-[calc(400px+20vw)]  basis-[100%] sm:basis-1/2 lg:basis-1/3 flex justify-center items-center ">
        <div className="bg-[#ffe2e6] h-[95%] w-[90%] flex flex-col flex-wrap justify-evenly  items-center rounded-[5vw] relative">
        <button type="button" className="absolute -top-[5px] -right-[8px] bg-white  h-[calc(55px+3vw)] w-[calc(55px+3vw)] rounded-[50%] flex justify-center items-center">
          <img src="topRightArrow.png" className="transform scale-x-[-1] h-[calc(20px+3vw)]"/>
        </button>
          <div className=" font-['Monoton'] text-[#640C19] text-[calc(10px+1.5vw)] uppercase ">
            Full Stack<br/> Development
          </div>
          <div className="h-[calc(140px+10vw)] overflow-hidden">
          <img src="fullStackDevelopment.png" className="h-[calc(200px+10vw)]"/>
          </div>
          <div className="text-[#640C19] text-center text-[20px] ">
          REACT
          <img src="dot.svg" className="inline m-2"/>
          MONGODB
          <img src="dot.svg" className="inline m-2"/>
          EXPRESS
          <img src="dot.svg" className="inline m-2"/>
          NODE
          </div>
        </div>
      </div>
    </div>
  );
};
export default Services;
