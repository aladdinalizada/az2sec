import NewsCard from "../../components/NewsCard";

const News = () => {
  return (
    <div className="w-full h-[990px] bg-[#667085] sm:h-[710px]">
      <div className="w-full h-full p-10  flex flex-col gap-y-16">
        <div>
          <h2 className="text-5xl font-bold text-[#090914] text-center ">
            Xəbərlər
          </h2>
        </div>
        <div className="w-full h-full flex flex-wrap justify-center flex-row  gap-x-3 sm:flex-nowrap">
          <NewsCard />
          <NewsCard />
          <NewsCard />
        </div>
      </div>
    </div>
  );
};

export default News;
