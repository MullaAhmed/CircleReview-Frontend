import Image from "next/image"

const TimelineItem = ({content, selectedImgName, unselectedImgName, isLast, isActive}) => {
  return (
    <div className={`flex flex-col h-24 justify-evenly ${isLast ? "flex-auto" : "xl:w-96 w-48 flex-initial"}`}>
      <div className={`flex flex-row items-center w-full`}>
        <div className={`border-0 rounded-full bg-light w-10 h-10 flex justify-center`}>
          <Image src={`/${isActive ? selectedImgName : unselectedImgName}`} width={15.56} height={20} />
        </div>
        <hr className='flex-auto ml-1 mr-1 border'/>
      </div>
      <p className={`font-semibold ${isActive ? "text-selected-font" : "text-unselected-font"}`}>{content}</p>
    </div>
  );
};

export default TimelineItem;
