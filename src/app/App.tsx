import { Routes, Route, BrowserRouter } from 'react-router-dom'
import MainPage from '../pages/MainPage.tsx'
import { AppRoute } from '../shared/consts/appRoutes.ts'
import ProductPage from '../pages/ProductPage.tsx'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main} element={<MainPage />} index />
        <Route
          path={AppRoute.Product}
          element={<ProductPage />}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
