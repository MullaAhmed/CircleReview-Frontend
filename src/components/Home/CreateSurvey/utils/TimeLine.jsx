import TimeLineItem from '@/components/Home/CreateSurvey/utils/TimeLineItem';
import { useContext } from 'react';
import AppContext from '@/AppContext';

const Timeline = () => {
  const { progress } = useContext(AppContext);

  const checkIsActive = (start, end) => {
    if (end) {
      return start <= progress && progress <= end;
    } else {
      return progress === start;
    }
  };

  return (
    <div className='flex flex-row pl-12 pr-12 mt-6 w-full'>
      <TimeLineItem content="Survey Questions" selectedImgName="selected-survey-questions-icon.svg" unselectedImgName="survey-questions-icon.svg" isActive={checkIsActive(0, 4)}/> 
      <TimeLineItem content="Select Employees" selectedImgName="selected-employee-details-icon.svg" unselectedImgName="employee-details-icon.svg" isActive={checkIsActive(5)}/> 
      <TimeLineItem content="Survey Details" selectedImgName="selected-survey-details-icon.svg" unselectedImgName="survey-details-icon.svg" isLast={true} isActive={checkIsActive(6)}/> 
    </div>
  );
};

export default Timeline;
