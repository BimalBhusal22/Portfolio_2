const Header = () => {
  return (
    <div className="px-[2.5%] py-2 bg-sky-50 flex justify-between items-center">
      <div className=" text-red-900 text-[calc(8px+2vw)] font-['Monoton'] uppercase">
        Bimal Bhusal
      </div>
      <div className="max-w-[515px] h-16 p-4 hidden md:flex justify-center items-center gap-10 ">
        <div className=" text-pink-900 font-['Monoton'] text-[calc(10px+0.5vw)] uppercase">
          Home
        </div>
        <div className=" text-red-900  font-['Monoton'] text-[calc(10px+0.5vw)]  uppercase">
          About
        </div>
        <div className=" text-red-900  font-['Monoton'] text-[calc(10px+0.5vw)] uppercase">
          Service
        </div>
        <div className=" text-red-900  font-['Monoton'] text-[calc(10px+0.5vw)] uppercase">
          Contact
        </div>
      </div>
    </div>
  );
};
export default Header;
