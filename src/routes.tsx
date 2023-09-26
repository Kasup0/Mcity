
import { Route, BrowserRouter, Routes as RouterRoutes } from 'react-router-dom';
import Header from './Components/header_footer/header';
import Footer from './Components/header_footer/footer';
import Home from './Components/Home';

function Routes() {
  return (
    <BrowserRouter>
      <Header />
      <RouterRoutes>
        <Route path="/" element={<Home />} />
        {/* Add more routes as needed */}
      </RouterRoutes>
      <Footer />
    </BrowserRouter>
  );
}

export default Routes;
