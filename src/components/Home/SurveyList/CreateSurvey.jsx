import React, {useContext} from 'react'
import AppContext from '@/AppContext';

const CreateSurvey = () => {
    const { setSurveyMode } = useContext(AppContext);
  return (
    <div>
        <button 
            className='flex items-center justify-center gap-3 bg-button-blue text-white w-56 h-10 border-0 rounded-lg'
            onClick={() => setSurveyMode('create')}
          >
          Create New Survey
          <Image src='/plus-icon.svg' width={10} height={10} />
        </button>
    </div>
  )
}

export default CreateSurvey