/* eslint-disable jsx-a11y/iframe-has-title */

import './App.css';
import Layout from './components/layouts/Layout';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './views/home/HomePage';
import Blog from './views/press/Blog';
import ContactUs from './views/contactus/ContactUs';
import NotFound from './views/home/NotFound';
import AboutUs from './views/about/AboutUs';
import ColomboLimited from './views/about/ColomboLimited';
import CareersTraining from './views/about/CareersTraining';
import EwisSolution from './views/about/EwisSolution';
import GlobalServises from './views/about/GlobalServises';
import EwisPeripherals from './views/about/EwisPeripherals';
import ToppanForms from './views/about/ToppanForms';
import BankingFinanceAndInsurance from './views/industries/BankingFinanceAndInsurance';
import EwisEducation from './views/industries/EwisEducation';
import Manufacturing from './views/industries/Manufacturing';
import Healthcare from './views/industries/Healthcare';
import Retail from './views/industries/Retail';
import Public from './views/industries/Public';
import Telecommunication from './views/industries/Telecommunication';
import CSRPage from './views/csr/CSRPage';
import News from './views/press/News';
import Partnership from './views/more/Partnership';
import Carrers from './views/more/Carrers';
import AdminLog from './views/admin/AdminLog';
import Dashboard from './views/admin/Dashboard';
import BlogsPageAdmin from './views/admin/BlogsPageAdmin';
import CreateUser from './views/admin/CreateUser';
import Users from './views/admin/Users';
import CreatePost from './views/admin/CreatePost';
import SinglePost from './views/press/SinglePost';
import UpdatePost from './views/admin/UpdatePost';
import CreateNews from './views/admin/CreateNews';
import NewsPageAdmin from './views/admin/NewsPageAdmin';
import UpdateNews from './views/admin/UpdateNews';
import CreateJob from './views/admin/CreateJob';
import JobsPageAdmin from './views/admin/JobsPageAdmin';
import SingleJob from './views/more/SingleJob';
import UpdateJobs from './views/admin/UpdateJobs';
import MediaManager from './views/admin/MediaManager';
import ForgotPassword from './views/admin/ForgotPassword';
import ResetPassword from './views/admin/ResetPassword';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/admin-log-in" element={<AdminLog />} />
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />

            {/* About Us Routes path="/about-us"*/}
            <Route path="/about-us" element={<AboutUs />} />
            <Route
              path="/colombo-limited"
              element={<ColomboLimited />}
            />
            <Route
              path="/career-training-solutions"
              element={<CareersTraining />}
            />
            <Route path="/ewis-solutions" element={<EwisSolution />} />
            <Route
              path="/global-services"
              element={<GlobalServises />}
            />
            {/* <Route
              path="/collaborate-with-us"
              element={<HistoryAndMilestones />}
            /> */}
            <Route path="/peripheral" element={<EwisPeripherals />} />
            <Route path="/toppan-forms" element={<ToppanForms />} />

            {/* Industries Routes */}
            <Route
              path="/banking-finance-and-insurance"
              element={<BankingFinanceAndInsurance />}
            />
            <Route path="/education" element={<EwisEducation />} />

            <Route path="/manufacturing" element={<Manufacturing />} />
            <Route path="/healthcare" element={<Healthcare />} />
            <Route path="/retail" element={<Retail />} />
            <Route path="/public" element={<Public />} />
            <Route
              path="/telecommunication"
              element={<Telecommunication />}
            />

            {/* CSR Routes */}
            <Route path="/csr-page" element={<CSRPage />} />


            {/* Press Routes */}
            <Route path="/news" element={<News />} />
            <Route path="/blog" element={<Blog />} />

            {/* More */}
            <Route path="/partners" element={<Partnership />} />

            <Route path="/careers" element={<Carrers />} />

            {/* Contact US */}
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/admin-log" element={<AdminLog />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/create-user" element={<CreateUser />} />
            <Route path="/show-user" element={<Users />} />
            <Route path="/create-post" element={<CreatePost />} />
            <Route path="/blog-edit-page" element={<BlogsPageAdmin />} />
            <Route path="/post/:slug" element={<SinglePost />} />
            <Route path="/update-post/:id" element={<UpdatePost />} />
            <Route path="/show-news" element={<NewsPageAdmin />} />
            <Route path="/create-news" element={<CreateNews />} />
            <Route path="/update-news/:id" element={<UpdateNews />} />
            <Route path="/create-job" element={<CreateJob />} />
            <Route path="/show-jobs" element={<JobsPageAdmin />} />
            <Route path="/job/:id" element={<SingleJob />} />
            <Route path="/update-job/:id" element={<UpdateJobs />} />
            <Route path="/media-manager" element={<MediaManager />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/reset-password/:token" element={<ResetPassword />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
