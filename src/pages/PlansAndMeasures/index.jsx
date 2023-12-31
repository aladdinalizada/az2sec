import PLansSlider from "../../components/PlansSlider";

const PlansAndMeasures = () => {
  return (
    <div className="w-full my-8 flex flex-col gap-y-16">
      <h2 className="text-5xl font-bold text-[#090914] text-center ">
        Lahiyə və Tədbirlər
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
