import CheckYourself from "../../assets/images/checkYourself.png";
import ReadingHall from "../../assets/images/readingHall.png";
import UsefulLinks from "../../assets/images/usefulLinks.png";
import Youtube from "../../assets/images/youtube.png";
const Features = () => {
  return (
    <div className="w-full h-[510px] flex justify-center items-center my-32 text-center sm:my-20">
      <div className="w-[50%] h-full flex flex-col justify-center gap-7 items-center sm:flex-wrap">
        <div className="w-full h-[40%] flex flex-col justify-center gap-2 items-center sm:w-[40%]">
          <img src={ReadingHall} alt="" />
          <h2>
            <span>Oxu Zalı</span>
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          </p>
        </div>
        <div className="w-full h-[40%] flex flex-col justify-center gap-2 items-center sm:w-[40%]">
          <img src={CheckYourself} alt="" />
          <h2>
            <span>Özünü Yoxla</span>
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          </p>
        </div>
        <div className="w-full h-[40%] flex flex-col justify-center gap-2 items-center sm:w-[40%]">
          <img src={Youtube} alt="" />
          <h2>
            <span>Youtube</span>
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          </p>
        </div>
        <div className="w-full h-[40%] flex flex-col justify-center gap-2 items-center sm:w-[40%]">
          <img src={UsefulLinks} alt="" />
          <h2>
            <span>Faydalı Linklər</span>
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
