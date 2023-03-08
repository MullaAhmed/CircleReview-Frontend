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

  let warningComponent = () => {
    return(
      <div className='flex items-center justify-center border border-red-500 mx-auto p-4 max-w-[200px] h-fit'>
      <p>Atleast 1 section is required to create a survey.</p>
    </div>
    )
  }

  // const handleAnswerChange = (index, event) => {
  //   setSurveyFormData((prev) => {
  //     return {
  //       ...prev,
  //       [questionSetName]: {
  //         questions: [
  //           ...prev[questionSetName].questions.slice(0, index),
  //           { ...prev[questionSetName].questions[index], answer: event.target.value },
  //           ...prev[questionSetName].questions.slice(index + 1),
  //         ],
  //       },
  //     }
  //   });
  // };

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
          {/* <div className='w-11/12 h-2/5 flex flex-col justify-around'>
            <p>Answer {index + 1}</p>
            <input
              type="text"
              placeholder="Answer"
              value={question.answer}
              onChange={event => handleAnswerChange(index, event)}
              className='pl-4 bg-gray-50 border border-gray-300 rounded-md h-12'
            />
          </div> */}
        </div>
      ))}
      <button className='w-40 h-10 border border-gray-800 rounded-lg flex items-center justify-center gap-3' onClick={handleAddQuestion}>
        <Image src='/add-question-icon.svg' width={10} height={10} />
        Add Question
      </button>
    </div>
  );
};


let Item = ({content, index, progress, isEmpty}) => {
  let textColor = 'text-gray-400';
  let bgColor = 'bg-gray-400'
  let image = '/gray-arrow-icon.svg';
  if (index === progress) {
    textColor = 'text-yellow-400';
    bgColor = 'bg-yellow-400'
    image = '/yellow-arrow-icon.svg';
  } else if (index < progress && isEmpty=="") {
    textColor = 'text-red-500';
    bgColor = 'bg-red-500'
    image = '/red-arrow-icon.svg';
  } else if (index < progress){
    textColor="text-green-500";
    bgColor = 'bg-green-500'
    image = '/green-arrow-icon.svg';
  }

  return (
    <div className={`flex items-center gap-3 pl-2 h-10 ${index != 0 ? "border-t": ""}`}>
      <div className={`h-2 w-2 rounded-full ${bgColor}`} />
      <div
        className={textColor} 
      >{content}</div>
      <Image src={image} width={15} height={15} />
    </div> 
  )
}
let Input = ({ label, placeholder, value, onChange }) => {
  return (
    <div className="flex ml-24 flex-row justify-start gap-24 items-center my-3 max-w-[800px]">
      <p>{label}</p>

      <div className="flex items-center w-96 border border-gray-300 h-10 rounded-md">
        <Image
          className="ml-4 mr-2"
          src="/survey-details-input-icon.svg"
          width={13.5}
          height={13.5}
        />
        <input
          className="h-8 focus:outline-none"
          value={value}
          onChange={onChange}
          placeholder={placeholder}
        />
      </div>
    </div>
  );
};



let SurveyQuestions = () => {
  const { progress, surveyFormData, setSurveyFormData } = useContext(AppContext);
  // const { surveyFormData, setSurveyFormData } = useContext(AppContext);
  console.log(surveyFormData.self_review.questions[0].question)

  return (
    <>

    <Input
    label={"Name your survey"}
        placeholder="Enter Survey Name"
        value={surveyFormData.survey_name || ""}
        onChange={(e) =>
          setSurveyFormData((prev) => {
            return { ...prev, survey_name: e.target.value };
          })
        }
      />
      <div>
      <warningComponent />
      </div>
{/* 
        {surveyFormData.self_review.questions[0].question="" && surveyFormData.peer_review.questions[0].question="" && surveyFormData.manager_review.questions[0].question="" && (

        )} */}
        

    <div className='flex gap-20 w-full ml-12 mt-12'>
      <div className=''>
        <Item content='Self Review' isEmpty={surveyFormData.self_review.questions[0].question} index={0} progress={progress}/>
        <Item content='Peers' index={1} isEmpty={surveyFormData.peer_review.questions[0].question} progress={progress}/>
        <Item content='Manager' index={2} isEmpty={surveyFormData.manager_review.questions[0].question} progress={progress}/>
        <Item content='Direct Report Review' isEmpty={surveyFormData.direct_report_review.questions[0].question} index={3} progress={progress}/>
      </div>


      { progress === 0 && <QuestionSet questionSetName='self_review' />}
      { progress === 1 && <QuestionSet questionSetName='peer_review' />}
      { progress === 2 && <QuestionSet questionSetName='manager_review' />}
      { progress === 3 && <QuestionSet questionSetName='direct_report_review' />}


    </div>
    </>
  )
};

export default SurveyQuestions;
