import styles from '@/styles/Footer.module.css';
import AppContext from '@/AppContext';
import { useContext } from 'react';

import axios from 'axios'

let Footer = () => {
  const { surveyFormData, setSurveyMode, progress, increementProgress, decreementProgress } = useContext(AppContext);

  let handleSubmit = () => {
    setSurveyMode('view');
    console.log(surveyFormData);

    var config = {
      method: 'post',
    maxBodyLength: Infinity,
      url: 'https://circlereview-mullaahmed-aufj.live.cohesive.so/api/feedbackform/',
      headers: { 
        'Content-Type': 'application/json'
      },
      data : JSON.stringify({...surveyFormData, company_name: "Cohesive", status: "active", people: [1, 2]})
    };

    axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  return (
    <div className="flex justify-between items-center h-24 w-full border-t-[1px] border-black">
      <div className='ml-8'>
        <button className={styles.footer_button} onClick={() => setSurveyMode('view')}>Save as Draft</button>
      </div>
      {
        progress == 0 && 
          (
            <div className="mr-8">
              <button className={`${styles.footer_button} ${styles.next_button}`} onClick={increementProgress}>Next</button>
            </div>
          )
      }

      {
        progress >= 1 && progress <= 5 && 
          (
            <div className="flex justify-between w-1/6 mr-8">
              <button className={styles.footer_button} onClick={decreementProgress}>Prev</button>
              <button className={`${styles.footer_button} ${styles.next_button}`} onClick={increementProgress}>Next</button>
            </div>
          )
      }

      {
        progress == 6 && 
          (
            <div className="flex justify-between w-1/6 mr-8">
              <button className={styles.footer_button} onClick={decreementProgress}>Prev</button>
              <button 
                className={`${styles.footer_button} ${styles.next_button}`} 
                onClick={handleSubmit}
              >Publish</button>
            </div>
          )
      }
    </div>
  )
};

export default Footer;
