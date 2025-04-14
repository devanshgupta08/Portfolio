const Img_prop = ({ img, title, txtColor }) => {
  return (
    <div className="w-full  flex justify-center items-center p-2 max-sm:p-2 mt-5">
    <div className=" w-[100px] relative  max-sm:w-[75px] h-[100px] max-sm:h-[75px] shadow-xl shadow-slate-300 dark:shadow-lg dark:shadow-blue-500/50 bg-gradient-to-bl from-[#ccc] to-[#eee] dark:from-[#051937] dark:to-[#222] rounded-full grid place-content-center  group overflow-hidden ">
      {/* Image (hidden on hover) */}
      
      <img
        src={img}
        alt={title}
        className=" max-sm:h-[45px] h-[55px] z-10 group-hover:hidden transition-all duration-500"
      />

      {/* Skill Name (appears on hover) */}
      <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-full  ">
        <span
          className={`bg-gradient-to-r ${txtColor} text-transparent bg-clip-text text-s font-semibold`}
        >
          {title}
        </span>
      </div>
    </div>
  </div>
  );
};

export default Img_prop;
