import axios from "axios";

const apiService = {
  async callChatGPT(apiKey: string, prompt: string) {
    console.log(apiKey);
    const url = 'https://api.openai.com/v1/chat/completions';
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`,
    };

    const data = {
      "model": "gpt-4o",
      "messages": [
          {
              "role": "user",
              "content": `${prompt}`
          },
      ],
      "temperature": 1,
      "top_p": 1,
      "n": 1,
      "stream": false,
      "max_tokens": 250,
      "presence_penalty": 0,
      "frequency_penalty": 0
  };

    try {
      const response = await axios.post(url, data, { headers: headers });
      console.log(response.data.choices);
      return response.data;
    } catch (error) {
      console.error('Error calling ChatGPT API:', error);
      throw error;
    }
  },
};

export default apiService;