import Image from 'next/image';
import { useContext } from 'react';
import AppContext from '@/AppContext';

const QuestionSet = ({ questionSetName }) => {
  const { surveyFormData, setSurveyFormData } = useContext(AppContext);

  const handleAddQuestion = () => {
    setSurveyFormData((prev) => {
      return {
        ...prev,
        [questionSetName]: {
          questions: [
            ...prev[questionSetName].questions,
            { question: '', answer: '' },
          ],
        },
      }
    });
  };

  const handleQuestionChange = (index, event) => {
    setSurveyFormData((prev) => {
      return {
        ...prev,
        [questionSetName]: {
          questions: [
            ...prev[questionSetName].questions.slice(0, index),
            { ...prev[questionSetName].questions[index], question: event.target.value },
            ...prev[questionSetName].questions.slice(index + 1),
          ],
        },
      }
    });
  };

  const handleAnswerChange = (index, event) => {
    setSurveyFormData((prev) => {
      return {
        ...prev,
        [questionSetName]: {
          questions: [
            ...prev[questionSetName].questions.slice(0, index),
            { ...prev[questionSetName].questions[index], answer: event.target.value },
            ...prev[questionSetName].questions.slice(index + 1),
          ],
        },
      }
    });
  };

  const handleDeleteQuestion = index => {
    setSurveyFormData((prev) => {
      return {
        ...prev,
        [questionSetName]: {
          questions: [
            ...prev[questionSetName].questions.slice(0, index),
            ...prev[questionSetName].questions.slice(index + 1),
          ],
        },
      }
    });
  };

  return (
    <div className='flex flex-col items-start'>
      {surveyFormData[questionSetName].questions.map((question, index) => (
        <div 
          key={index}
          className="mb-4 bg-gray-50 rounded-lg w-[540px] h-[240px] flex flex-col justify-evenly items-center border border-gray-300"
        >
          <div className='w-11/12 h-2/5 flex flex-col justify-around'>
            <div className='flex justify-between'>
              <p>Question {index + 1}</p>
              <button onClick={() => handleDeleteQuestion(index)}>
                <Image src='/trash-icon.svg' width={20} height={20} />
              </button>
            </div>
            <input
              type="text"
              placeholder="Enter Question"
              value={question.question}
              onChange={event => handleQuestionChange(index, event)}
              className='pl-4 bg-gray-50 border border-gray-300 rounded-md h-12'
            />
          </div>
          <div className='w-11/12 h-2/5 flex flex-col justify-around'>
            <p>Answer {index + 1}</p>
            {/* <input
              type="text"
              placeholder="Answer"
              value={question.answer}
              onChange={event => handleAnswerChange(index, event)}
              className='pl-4 bg-gray-50 border border-gray-300 rounded-md h-12'
            /> */}
          </div>
        </div>
      ))}
      <button className='w-40 h-10 border border-gray-800 rounded-lg flex items-center justify-center gap-3' onClick={handleAddQuestion}>
        <Image src='/add-question-icon.svg' width={10} height={10} />
        Add Question
      </button>
    </div>
  );
};

let Item = ({content, index, progress}) => {
  let textColor = 'text-gray-400';
  let image = '/gray-arrow-icon.svg';
  if (index === progress) {
    textColor = 'text-yellow-400';
    image = '/yellow-arrow-icon.svg';
  } else if (index < progress) {
    textColor = 'text-green-500';
    image = '/green-arrow-icon.svg';
  }

  return (
    <div className={`flex items-center gap-3 pl-2 h-10 ${index != 0 ? "border-t": ""}`}>
      <Image src={image} width={15} height={15} />
      <div
        className={textColor} 
      >{content}</div>
    </div> 
  )
}

let SurveyQuestions = () => {
  const { progress } = useContext(AppContext);

  return (
    <div className='flex gap-48 w-3/5 ml-12 mt-12'>
      <div className='w-1/5'>
        <Item content='Self Review' index={0} progress={progress}/>
        <Item content='Peers' index={1} progress={progress}/>
        <Item content='Manager' index={2} progress={progress}/>
        <Item content='Direct Report Review' index={3} progress={progress}/>
      </div>
      { progress === 0 && <QuestionSet questionSetName='self_review' />}
      { progress === 1 && <QuestionSet questionSetName='peer_review' />}
      { progress === 2 && <QuestionSet questionSetName='manager_review' />}
      { progress === 3 && <QuestionSet questionSetName='direct_report_review' />}
    </div>
  )
};

export default SurveyQuestions;
