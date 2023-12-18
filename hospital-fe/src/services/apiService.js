// ApiService.js
const API_BASE_URL = 'http://localhost:7200'

export default {
  async fetchData(path) {
    try {
      console.log(`${API_BASE_URL}${path}`)
      const response = await fetch(`${API_BASE_URL}${path}`)
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`)
      }
      return await response.json()
    } catch (error) {
      console.error('Error fetching data:', error)
      throw error
    }
  }
}
