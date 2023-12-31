import PLansSlider from "../../components/PlansSlider";
import "../../i18n/i18n";
import { useTranslation } from "react-i18next";
const PlansAndMeasures = () => {
  const { t } = useTranslation();
  return (
    <div className="w-full my-8 flex flex-col gap-y-16">
      <h2 className="text-5xl font-bold text-[#090914] text-center ">
        {t("PlansAndMeasures")}
      </h2>
      <div className="w-full h-full flex flex-wrap flex-col justify-center items-center gap-y-3 gap-x-3 sm:flex-nowrap sm:flex-row">
        <PLansSlider />
        <PLansSlider />
        <PLansSlider />
      </div>
    </div>
  );
};

export default PlansAndMeasures;
