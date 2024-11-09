import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from '../Layout/Layout';

const HomePage = lazy(() => import('../../pages/HomePage/HomePage'));
const CatalogPage = lazy(() => import('../../pages/CatalogPage/CatalogPage'));
const DetailsPage = lazy(() => import('../../pages/DetailsPage/DetailsPage'));

export default function App() {
  
  return (
    <Layout>
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/catalog' element={<CatalogPage />} />
          <Route path='/catalog/:id' element={<DetailsPage/>} />
        </Routes>
      </Suspense>
    </Layout>
  )
}

