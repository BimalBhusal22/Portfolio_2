const Header = () => {
  return (
    <div class="px-10 py-2 bg-sky-50 flex justify-between items-center">
      <div class=" text-red-900 text-4xl font-['Monoton'] uppercase">Bijay</div>
      <div class="max-w-[515px] h-16 p-4 hidden sm:flex justify-center items-center gap-10 ">
        <div class=" text-pink-900 font-['Monoton'] uppercase">Home</div>
        <div class=" text-red-900  font-['Monoton'] uppercase">About</div>
        <div class=" text-red-900  font-['Monoton'] uppercase">Service</div>
        <div class=" text-red-900  font-['Monoton'] uppercase">Contact</div>
      </div>
    </div>
  );
};
export default Header;
