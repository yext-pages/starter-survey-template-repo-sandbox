export async function main(argumentJson) {
    let responseBody = JSON.parse(argumentJson["body"])


   let surveyId = responseBody.surveyCompleted
   let promptIdsString = responseBody.promptIds
   let promptResponsesString = responseBody.promptResponses
   let submissionTime = responseBody.submissionTime
   let key = YEXT_PUBLIC_apiKey;
 
   const postUrl = 'https://sandbox.yext.com/v2/accounts/me/entities?api_key=' + key + '&entityType=survey_surveyResponse' + '&v=20230323';
   
   const title = 'Survey Response on ' + submissionTime

   let promptIds = promptIdsString.split('_*_')
   let promptResponses = promptResponsesString.split('___')

    var thePromptResponses : object[] = []

    for (var i = 0; i < promptIds.length; i++) {
        let myPrompt = {
            "prompt": promptIds[i],
            "promptResponse" : promptResponses[i]
        }
        thePromptResponses.push(myPrompt)
    }

    let data = {
        "name": title,
        "survey_surveyCompleted" : [surveyId],
        "survey_promptResponses" : thePromptResponses
    }
   
    const response = await fetch(postUrl, {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
	    'Cache-control': 'no-cache'
        },
        redirect: 'follow',
        body: JSON.stringify(data)
      });
   return {
  	"statusCode" : 200,
	"status": response.status
   }
}
