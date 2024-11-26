import axios from 'axios'

const apiKey = import.meta.env.VITE_SWOP_API_KEY
const apiUrl = import.meta.env.VITE_SWOP_API_URL

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
