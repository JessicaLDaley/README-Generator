const axios = require('axios');

const api = {
  async getUser(useranswers) {
    try { let response = await axios
        
     
        .get(`https://api.github.com/users/${useranswers.username}`);
        return response.data;

      } catch (error) {
        console.log(error);
      }
  }
};

module.exports = api;

