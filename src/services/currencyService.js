import axios from 'axios'

const SWOP_API_KEY = 'ab82a7aab7ed4f0fa5c9627708f76ca27905b89394bc5db0cd04cea44745ffb0'
const SWOP_API_URL = 'https://swop.cx/rest/rates'

export const fetchExchangeRates = async () => {
  try {
    const response = await axios.get(SWOP_API_URL, {
      headers: {
        Authorization: `ApiKey ${SWOP_API_KEY}`,
        Accept: 'application/json',
      },
    })
    return response.data
  } catch (error) {
    throw new Error('Falha ao buscar taxas de câmbio')
  }
}
