const NewsCard = () => {
  return (
    <div className="w-full h-[21%] gap-4 sm:h-full sm:w-4/5 flex items-center sm:flex-col sm:gap-y-1">
      <img
        src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
        alt=""
        className="w-full h-full rounded-2xl"
      />
      <div className="flex flex-col gap-y-2">
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
