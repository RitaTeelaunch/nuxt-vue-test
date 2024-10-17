import { http, HttpResponse } from 'msw'
import { DataItemPlanet } from './dataItemPlanet'

export const handlerItemPlanet = [
  // Mock a GET request to /api/planetItems
  http.get('https://jsonplaceholder.typicode.com/posts', async () => {
    try {
      const res = HttpResponse.json(
        DataItemPlanet, // Wrap the ProductData under "results.books"
        { status: 200 }
      )
      return res
    } catch (err) {
      return HttpResponse.json(err, { status: 500 })
    }
  })
]
