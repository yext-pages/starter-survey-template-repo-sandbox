import axios from 'axios';



export const sendSurveyResponseToFunction = (surveyResponse: object) => {
  // Get curent date as YYYY-MM-DD
  const responseTime = new Date().toISOString();

  

  const data = { ...surveyResponse};
  const surveyId = data.id
  delete data.id

  var myPromptIds = Object.keys(data).join('_*_')
  var myPromptResponses = Object.values(data).join('___')

  console.log(myPromptIds)
  console.log(myPromptResponses)

  console.log('Sending Following Survey Response', data);
  return axios.post ('/serverless/createSurveyResponse', {
      surveyCompleted: surveyId,
      promptIds: myPromptIds,
      promptResponses: myPromptResponses,
      submissionTime: responseTime
  });
};

export default sendSurveyResponseToFunction;
