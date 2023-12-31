import SeminarsImage from "../../assets/seminars.png";
import "../../i18n/i18n";
import { useTranslation } from "react-i18next";
const Seminars = () => {
  const { t } = useTranslation();
  return (
    <div className="p-16">
      <div className="w-full h-full flex flex-col gap-y-7 justify-center items-center sm:flex-row">
        <div>
          <img
            className="rounded-3xl w-full sm:w-5/6"
            src={SeminarsImage}
            alt="SeminarsImage"
          />
        </div>
        <div className="w-full flex flex-col sm:w-1/3 sm:gap-12">
          <h2 className="text-[#090914] text-3xl font-bold">{t("Seminars")}</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptatum, quibusdam, quia, quos voluptates voluptatibus
            consequuntur quod voluptate quas doloribus quidem. Quisquam
            voluptatum, quibusdam, quia, quos voluptates voluptatibus
          </p>
          <a href="#" className="text-[#2563EB]">
            Ətraflı oxu
          </a>
        </div>
      </div>
    </div>
  );
};

export default Seminars;
