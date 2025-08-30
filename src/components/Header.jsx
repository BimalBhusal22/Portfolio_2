const Header = () => {
  return (
    <div class="px-[2.5%] py-2 bg-sky-50 flex justify-between items-center">
      <div class=" text-red-900 text-[calc(8px+2vw)] font-['Monoton'] uppercase">
        Bimal Bhusal
      </div>
      <div class="max-w-[515px] h-16 p-4 hidden md:flex justify-center items-center gap-10 ">
        <div class=" text-pink-900 font-['Monoton'] text-[calc(10px+0.5vw)] uppercase">
          Home
        </div>
        <div class=" text-red-900  font-['Monoton'] text-[calc(10px+0.5vw)]  uppercase">
          About
        </div>
        <div class=" text-red-900  font-['Monoton'] text-[calc(10px+0.5vw)] uppercase">
          Service
        </div>
        <div class=" text-red-900  font-['Monoton'] text-[calc(10px+0.5vw)] uppercase">
          Contact
        </div>
      </div>
    </div>
  );
};
export default Header;
