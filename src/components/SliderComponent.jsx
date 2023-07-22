const SliderComponent = ({ data }) => {
  return (
    <>
      <div className="mt-[40px] w-full flex justify-center items-center">
        <div className="w-[264px] h-[12px] flex justify-between items-center">
          <div className="w-[40px] h-[12px] rounded-[4px] bg-gray-800"></div>
          <div className="w-[40px] h-[12px] rounded-[4px] bg-gray-300"></div>
          <div className="w-[40px] h-[12px] rounded-[4px] bg-gray-300"></div>
          <div className="w-[40px] h-[12px] rounded-[4px] bg-gray-300"></div>
          <div className="w-[40px] h-[12px] rounded-[4px] bg-gray-300"></div>
        </div>
      </div>
    </>
  );
};

export default SliderComponent;
