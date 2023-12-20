const NewsCard = () => {
  return (
    <div className="w-full h-[21%] gap-4 flex items-center sm:h-full sm:w-4/5 sm:flex-col sm:gap-y-6">
      <img
        src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
        alt=""
        className="w-full h-5/6 rounded-2xl sm:w-4/5 sm:h-3/5"
      />
      <div className="w-4/5 flex flex-col gap-y-2 mt-[-20px] ">
        <h2 className="font-bold">TITLE</h2>
        <p className="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
          distinctio earum unde optio, beatae alias?
        </p>
      </div>
    </div>
  );
};

export default NewsCard;
