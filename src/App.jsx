import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home.jsx"
import Service from "./pages/Service.jsx"
import Company from "./pages/Company.jsx"
import Career from "./pages/Career.jsx"
import CareerPageInner from "./components/CareerPageInner.jsx"
import Blog from "./pages/Blog.jsx"
import BlogPageInner from "./components/BlogPageInner.jsx"
import ContactUs from "./pages/Contact_us.jsx"
import PrivacyPolicy from "./components/PrivacyPolicy.jsx"
import Tema_template_page from "./components/Tema_template_page.jsx"
import ScrollToHash from "./components/Hash.jsx"

function App(){
  return(
<BrowserRouter>
<ScrollToHash />
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/service" element={<Service />} />
  <Route path="/company" element={<Company />} />
  <Route path="/career" element={<Career />} />
  <Route path="/career-page-inner" element={<CareerPageInner />} />
  <Route path="/blog" element={<Blog />} />
  <Route path="/blog_page_inner" element={<BlogPageInner />} />
  <Route path="/contact_us" element={<ContactUs />} />
  <Route path="/privacy_policy" element={<PrivacyPolicy />} />
  <Route path="/tema_template" element={<Tema_template_page />} />
</Routes>
</BrowserRouter>
  )
}

export default App