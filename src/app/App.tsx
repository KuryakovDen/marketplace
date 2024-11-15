import { useRoutes, BrowserRouter } from 'react-router-dom'
import MainPage from '../pages/MainPage.tsx'
import { AppRoute } from '../shared/consts/appRoutes.ts'
import ProductPage from '../pages/ProductPage.tsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

function App() {
  const queryClient = new QueryClient();

  const routes = [
    { element: <MainPage/>, path: AppRoute.Main, name: 'mainPage' },
    { element: <ProductPage/>, path: AppRoute.Product, name: 'productPage' },
  ]

  const Router = () => useRoutes(routes)

  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Router />
      </QueryClientProvider>
    </BrowserRouter>
  )
}

export default App
