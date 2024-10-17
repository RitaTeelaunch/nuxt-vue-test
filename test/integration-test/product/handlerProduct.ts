import { http, HttpResponse } from 'msw'
import { ProductData } from './ProductData'

export const handlerProduct = [
  // Mock a GET request to /api/products
  http.get(
    'https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=KAqrqFIGwGCXGrWPAPsqISj9nEwEi5rZ',
    async () => {
      try {
        const res = HttpResponse.json(
          {
            results: {
              books: ProductData // Wrap the ProductData under "results.books"
            }
          },
          { status: 200 }
        )
        return res
      } catch (err) {
        return HttpResponse.json(err, { status: 500 })
      }
    }
  )
]
