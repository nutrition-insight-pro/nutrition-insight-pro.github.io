import axios from "axios";

const apiService = {
  async callChatGPT(apiKey: string, companyName: string, locationOfOperation: string, areaOfSpeciality: string, typeOfAnimal: string) {
    const requestURL = 'https://api.openai.com/v1/threads/runs';
    const messagesURLbase = 'https://api.openai.com/v1/threads';

    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`,
      'OpenAI-Beta': 'assistants=v2',
      'OpenAI-Organization': 'org-7vJnQJatWBvkfyr0fsFPuMf9',
      'OpenAI-Project': 'proj_k5ptf1aTriL7TcwcxFwCMTRV'
    };

    const data = {
      'assistant_id': 'asst_3pSzI509oI9mj62nKib6253y',
      'additional_messages': [
        {
            'role': 'user',
            'content':
              `Objective: Classify the given companies in the uploaded excel file as either a commodity-oriented buyer
              or a specialty-oriented buyer or both with the respective probability based on provided data and specific
              parameters, and identify the type of animal adopted. Instructions: Identify Similar Companies: Based on
              the provided parameters, find out which of the given companies the company ${companyName} is similar to.
              You should indicating similarities using the Excel data and search new data from their website in the
              internet. Parameters to consider: Growth opportunity, mission statement, vision statement, company size,
              geographic location, average order value, purchase behavior, types of products purchased, company values
              and priorities, customer needs and pain points, industry sub-segment, type of production system, competitive
              position, animals they want to feed, similar wording in the mission statement, website, sales, and revenue data.
              Extract Detailed Information: For the company ${companyName}, extract detailed information including their
              purchasing behavior and preferences. Historical Data for the given company: Extract historical purchasing
              data from the given company to understand their past behavior, focusing on products purchased, order volumes,
              and any noted preferences. Comparative Analysis: Compare the company ${companyName} with the given company to
              identify trends and differences in their purchasing behavior. Determine what the company would likely buy from
              Evonik (commodity or specialty nutrition or both) based on its profile and historical data. Commodity vs.
              Specialty Products: Use the provided PDF to differentiate between commodity and specialty products. Analyze
              how these differences apply to the given company and the company ${companyName}. Recommendation: Provide a
              recommendation on whether the company ${companyName} should be interested in commodity or specialty nutrition or
              both with the %, important. Structure the outcome as follows: The Company is categorized in:
              [Commodity/Specialty/Both with %] Reasons for the Categorization:
              Reason 1: [Detailed explanation specific to the inputted company]
              Reason 2: [Detailed explanation specific to the inputted company]
              Reason 3: [Detailed explanation specific to the inputted company]
              Steps for Analysis: Initial Data Review: Examine the Excel sheets and search in the internet on website of
              ${companyName} to identify similarities to the given company based on the specified parameters. Detailed
              Extraction: For the company ${companyName}, gather comprehensive details including purchase behavior, types of
              products purchased, and any additional relevant information. Historical Data Extraction: Review the given
              company historical purchasing data to understand their product preferences and order patterns. Comparative
              Analysis: Compare the given company purchasing behavior with the company to find commonalities and differences.
              Product Categorization: Use the PDF to classify products into commodity or specialty categories or both with %.
              Apply this classification to the purchasing patterns of the given company and inputted company. Formulate
              Recommendation: Based on the analysis, recommend whether the inputted company should focus on commodity or
              specialty nutrition or both with %. Provide three detailed reasons for your recommendation, ensuring they are
              specific to the inputted company profile and historical data. Plot the following: -the recommendation for the
              inputted company, the categorization and the type of animal breeded. Stay inside 100 words, which doesn't mean
              to alwys use 100 words but to stay within them`,
        },
      ],
    };

    try {
      // const responsePost = await axios.post(requestURL, data, { headers: headers });
      // const threadID = responsePost.data.thread_id;
      
      // const messagesURL = `${messagesURLbase}/${threadID}/messages`;
      let responseGet: any = '';

      const maxAttempts = 20;
      let attempt = 0;
      let response = '';

      while (attempt < maxAttempts) {
        await new Promise(resolve => setTimeout(resolve, 3000));
        break;
        // responseGet = await axios.get(messagesURL, { headers: headers });

        // if (responseGet.data.data.length !== 0 && responseGet.data.data[0].content.length !== 0) {

        //   if (responseGet.data.data[0].content[0].text.value === response) break;
        //   response = responseGet.data.data[0].content[0].text.value;
        // }

        // attempt++;



      }

      // console.log(responseGet.data.data[0].content)

      // return responseGet.data.data[0].content[0].text.value;
    } catch (error) {
      console.error('Error calling ChatGPT API:', error);
      throw error;
    }
  },
};

export default apiService;