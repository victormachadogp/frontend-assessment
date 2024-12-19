import axios from 'axios'

const apiKey = '<SUA_API_KEY>'
const apiUrl = 'https://swop.cx/rest/rates'

export const fetchExchangeRates = async () => {
  try {
    const response = await axios.get(apiUrl, {
      headers: {
        Authorization: `ApiKey ${apiKey}`,
        Accept: 'application/json',
      },
    })
    return response.data
  } catch (error) {
    throw new Error('Falha ao buscar taxas de câmbio')
  }
}
