import { setupServer } from 'msw/node'
import { handlers } from './aboutUs/handlers'
import { handlerProduct } from './product/handlerProduct'
import { handlerItemPlanet } from './planetItem/handlerItem'

// Set up the MSW server with the handlers
const server = setupServer(...handlers, ...handlerProduct, ...handlerItemPlanet)

// Establish API mocking before all tests.
beforeAll(() => server.listen())

// Reset any runtime request handlers we may add during the tests
afterEach(() => server.resetHandlers())

// Clean up once the tests are done
afterAll(() => server.close())
