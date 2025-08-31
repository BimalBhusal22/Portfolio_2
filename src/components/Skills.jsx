const Skills = () => {
  return (
    <div className="bg-[#DCF1FA] w-[95%] rounded-[3vw] mb-20">
      <div className=" font-['Monoton'] text-[#640C19] text-[calc(10px+2.5vw)] uppercase text-center pt-10">
        Skills
      </div>

      <div className=" flex flex-wrap mt-8 justify-center items-center">

        <div className="h-[calc(400px+20vw)]  basis-[100%] sm:basis-1/2 lg:basis-1/3 flex flex-col  justify-evenly ">
          <div className="basis-[100%]">
            <div className="flex justify-center items-center content-center">
              <div className=" w-[100%] h-[calc(200px+10vw)] flex justify-center items-center content-center relative">
                <img src="frontend.png" className="absolute transform scale-x-[-1] top-0 h-[calc(100px+5vw)]"/> 
                <div className="bg-[#FFE2E6] inline-block w-[70%] relative  h-[calc(40px+5vw)] rounded-b-[40px] font-['Monoton'] text-[#640C19] text-[calc(10px+1vw)] uppercase">
                <div className="flex justify-center items-center h-[100%]">Frontend</div>
                </div>
              </div>
            </div>
          </div>
          <div className="basis-[100%]">
            <div className="">
              <div className=" w-[100%] h-[calc(200px+10vw)] flex justify-center items-center content-center relative">
                <img src="backend.png" className="absolute transform  top-0 h-[calc(100px+5vw)]"/> 
                <div className="bg-[#FFE2E6] inline-block w-[70%] relative  h-[calc(40px+5vw)] rounded-b-[40px] font-['Monoton'] text-[#640C19] text-[calc(10px+1vw)] uppercase">
                <div className="flex justify-center items-center h-[100%]">Backend</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="h-[calc(400px+20vw)]  basis-[100%] sm:basis-1/2 lg:basis-1/3 flex flex-col  justify-evenly">
          <div className="basis-[100%]">
            <div className="">
              <div className=" w-[100%] h-[calc(200px+10vw)] flex justify-center items-center content-center relative">
                <img src="uiUx.png" className="absolute transform scale-x-[-1] top-0 h-[calc(100px+5vw)]"/> 
                <div className="bg-[#FFE2E6] inline-block w-[70%] relative  h-[calc(40px+5vw)] rounded-b-[40px] font-['Monoton'] text-[#640C19] text-[calc(10px+1vw)] uppercase">
                <div className="flex justify-center items-center h-[100%]">UI/UX</div>
                </div>
              </div>
            </div>
          </div>
          <div className="basis-[100%]">
            <div className="">
             <div className=" w-[100%] h-[calc(200px+10vw)] flex justify-center items-center content-center relative">
                <img src="devOps.png" className="absolute transform scale-x-[-1] top-[40px] h-[calc(40px+5vw)]"/> 
                <div className="bg-[#FFE2E6] inline-block w-[70%] relative  h-[calc(40px+5vw)] rounded-b-[40px] font-['Monoton'] text-[#640C19] text-[calc(10px+1vw)] uppercase">
                <div className="flex justify-center items-center h-[100%]">Dev Ops</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="h-[calc(400px+20vw)]  basis-[100%] sm:basis-1/2 lg:basis-1/3 flex flex-col  justify-evenly">
          <div className="basis-[100%]">
            <div className="">
              <div className=" w-[100%] h-[calc(200px+10vw)] flex justify-center items-center content-center relative">
                <img src="database.png" className="absolute transform top-[10px] h-[calc(120px+5vw)]"/> 
                <div className="bg-[#FFE2E6] inline-block w-[70%] relative  h-[calc(40px+5vw)] rounded-b-[40px] font-['Monoton'] text-[#640C19] text-[calc(10px+1vw)] uppercase">
                <div className="flex justify-center items-center h-[100%]">Database</div>
                </div>
              </div>
            </div>
          </div>
          <div className="basis-[100%]">
            <div className="">
              <div className=" w-[100%] h-[calc(200px+10vw)] flex justify-center items-center content-center relative">
                <img src="productManager.png" className="absolute transform top-[20px] h-[calc(80px+5vw)]"/> 
                <div className="bg-[#FFE2E6] inline-block w-[70%] relative  h-[calc(40px+5vw)] rounded-b-[40px] font-['Monoton'] text-[#640C19] text-[calc(10px+1vw)] uppercase">
                <div className="flex justify-center items-center h-[100%]">Product<br/> Manager</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Skills;
