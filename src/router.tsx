import { createRouter } from '@tanstack/react-router'

// Import the generated route tree
import { routeTree } from './routeTree.gen'

// Create a new router instance
export const getRouter = () => {
  const router = createRouter({
    routeTree,
    defaultErrorComponent: () => <div className="page inner-page"><h1>Something went wrong.</h1><p>Please refresh the page or return to <a href="/">the portfolio</a>.</p></div>,
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
  })

  return router
}
