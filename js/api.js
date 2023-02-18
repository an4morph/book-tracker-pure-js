const API_URL = 'http://localhost:1717'

const createApiRoute = (route) => {
  return `${API_URL}${route}`
}

export const getBooks = async () => {
  const response = await fetch(createApiRoute('/books'))
  const books = await response.json()
  return books
}