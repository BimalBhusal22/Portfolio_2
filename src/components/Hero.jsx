const Hero = () => {
  return (
    <>
      <div className="h-[45vw]  bg-yellow-100 relative flex justify-center items-center overflow-hidden">
        <img
          src="reactLogo.png"
          className="h-[10vw] absolute top-[2vw] -left-[4vw] rotate-45"
        />
        <div className="w-[95%] bg-green-300 font-['Monoton'] text-[#640C19] text-[6.4vw] relative flex justify-center uppercase">
          A Passionate person
          <br />
          With Hunger to Learn
          <div className="text-[calc(8px+0.5vw)] w-[100%] absolute hidden lg:flex justify-between bottom-[2vw]">
            <div className="absolute left-[1.7vw]">Turning Passion into Profession</div>
            <div className="absolute right-[1.7vw]">Progression and Discipline</div>
          </div>
        </div>
        <img src="spiderCoder.png" className="h-[52vw] absolute bottom-0"></img>
        <img
          src="penLogo.png"
          className="h-[6vw] absolute -bottom-[1.5vw] right-[13vw]"
        />
      </div>
    </>
  );
};
export default Hero;
