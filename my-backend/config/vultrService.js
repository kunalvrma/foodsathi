const axios = require('axios');
require('dotenv').config();

const vultrService = axios.create({
    baseURL: 'https://api.vultr.com/v2/',
    headers: {
        Authorization: `Bearer ${process.env.VULTR_API_KEY}`,
        Accept: 'application/json'
    }
});

async function listInstances() {
    const response = await vultrService.get('/instances');
    return response.data;
}

module.exports = { listInstances };