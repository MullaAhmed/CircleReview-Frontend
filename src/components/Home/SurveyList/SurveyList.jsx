import { useContext } from 'react';
import Image from 'next/image';
import SurveyTable from '@/components/Tables/SurveyTable';
import AppContext from '@/AppContext';
import CreateSurvey from './CreateSurvey';

let SurveyListEmptyComponent = () => {
  const { setSurveyMode } = useContext(AppContext);

  return (
    <div className='flex flex-col items-center justify-center gap-12 flex-auto'>
      <Image src='/list-surveys-mural.svg' width={365.24} height={359} />
      <div>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
      <button 
          className='flex items-center justify-center gap-4 w-56 h-12 border-0 rounded-lg bg-button-blue text-white'
          onClick={() => setSurveyMode('create')}
        >
        <Image src='/create-new-survey-icon.svg' width={24} height={24} />
        Create New Survey
      </button>
    </div>
  )
}

let SurveyListNotEmptyComponent = () => {
  const { setSurveyMode } = useContext(AppContext);

  return (
    <div className='flex flex-col flex-auto'>
      <div className='flex justify-between items-center h-28 mx-8 border-b'>
        <p className='text-xl font-semibold'>Employee Surveys</p>
        {/* <CreateSurvey /> */}
        {
          localStorage.getItem("role") === "HR" ?
          <button 
            className='flex items-center justify-center gap-3 bg-button-blue text-white w-56 h-10 border-0 rounded-lg'
            onClick={() => setSurveyMode('create')}
          >
          Create New Survey
          <Image src='/plus-icon.svg' width={10} height={10} />
        </button> : null
        }
        {/* <button 
            className='flex items-center justify-center gap-3 bg-button-blue text-white w-56 h-10 border-0 rounded-lg'
            onClick={() => setSurveyMode('create')}
          >
          Create New Survey
          <Image src='/plus-icon.svg' width={10} height={10} />
        </button> */}
      </div>
      <div className='flex flex-col mx-8 h-full'>
        <div className='text-lg font-medium mt-8'>Current Survey</div>
        <SurveyTable />
      </div>
    </div>
  )
}

let SurveyList = () => {
  const { surveyData } = useContext(AppContext);

  return (
    surveyData && surveyData.length === 0
    ?
    <SurveyListEmptyComponent />
    :    
    <SurveyListNotEmptyComponent />
  )
};

export default SurveyList;
