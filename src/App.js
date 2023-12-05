import { lazy, Suspense } from 'react';
import {Routes,Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Footer from './components/Footer'
import Blogs from './blogs/Blogs'
import About from './pages/About'
import Contact from './pages/Contact'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsAndConditions from './pages/TermsAndConditions'
import Loading from './components/Loading';
// import AllProducts from './pages/AllProducts'
import AllProductsTemplate from './pages/allproducts';
import PackagePrinting from './pages/allproducts/packagingprinting';
import Product from './pages/product';

const HomeScreen = lazy(()=>import('./pages/Home'))
const BlogScreen = lazy(() => import('./blogs/BlogScreen'));
const MainSideBar = lazy(() => import('./myaccount/MainSideBar'));

const App = () => {
  return (
    <div className='font-lato'>
      <Navbar/>
      <Routes>
      <Route path='/' element={<Suspense fallback={<Loading/>}><HomeScreen /></Suspense>} />
        <Route path='/aboutus' element={<About />} />
        <Route path='/contactus' element={<Contact />} />
        <Route path='/privacypolicy' element={<PrivacyPolicy />} />
        <Route path='/termsandconditions' element={<TermsAndConditions />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/blogs/individualBlog' element={<Suspense fallback={<Loading/>}><BlogScreen /></Suspense>} />
        <Route path='/myaccountDetail' element={<Suspense fallback={<Loading/>}><MainSideBar /></Suspense>} />
        <Route path='/allproducts' element={<AllProductsTemplate/>} />
        <Route path='/allproducts/:slug' element={<AllProductsTemplate/>} />
        <Route path='/allproducts/packagingprinting/:slug' element={<PackagePrinting/>} />
        <Route path='/allproducts/packagingprinting/boxpackaging/:slug' element={<Product/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
