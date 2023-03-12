import { useEffect, useState, createContext } from 'react';
import { initializeSurveyFormData } from '@/utils/initializeSurveyFormData';
import { initializeEmployeeFormData } from '@/utils/initializeEmployeeFormData';

const AppContext = createContext();
export default AppContext;

export const AppProvider = ({ children }) => {
	const [surveyMode, setSurveyMode] = useState('view') // view | create 
	const [employeeMode, setEmployeeMode] = useState('view') // view | add_manually | add_by_csv
	const [progress, setProgress] = useState(0);
	const [surveyData, setSurveyData] = useState([]);
	const [employeeData, setEmployeeData] = useState([]);
	const [employeeFormData, setEmployeeFormData] = useState(initializeEmployeeFormData());
	const [surveyFormData, setSurveyFormData] = useState(initializeSurveyFormData());
	const [reload, setReload] = useState(false)

	// console.log(JSON.stringify(surveyFormData));
	useEffect(() => {
	}, [employeeFormData, surveyFormData]);

	let increementProgress = () => {
		console.log("increementProgress");
		setProgress(progress + 1);
	};

	let decreementProgress = () => {
		console.log("increementProgress");
		setProgress(progress - 1);
	};

	let contextData = {
		progress,
		increementProgress,
		decreementProgress,
		surveyMode,
		setSurveyMode,
		employeeMode,
		setEmployeeMode,
		employeeFormData,
		setEmployeeFormData,
		surveyFormData,
		setSurveyFormData,
		surveyData,
		setSurveyData,
		employeeData,
		setEmployeeData,
		reload,
		setReload
	}

	return (
		<AppContext.Provider value={contextData}>
			{children}
		</AppContext.Provider>
	);
};
