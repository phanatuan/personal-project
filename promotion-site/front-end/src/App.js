import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import BrandPage from "./Views/BrandPage";
import CategoryPage from "./Views/CategoryPage";
import NoMatch from "./Views/NoMatch";
import Layout from "./Components/Layout";
import BlogPage from "./Views/BlogPage";
import LoginPage from "./Views/LoginPage";
import SignUpPage from "./Views/SignUpPage";
import AboutPage from "./Views/AboutPage";
import ContactPage from "./Views/ContactPage";
import FilterSuite from './Components/FilterSuite';

const routes = [
  {
    path: "/",
    exact: true,
    rightbar: () => <FilterSuite promos={PROMOS} />,
    main: () => <BrandPage promos={PROMOS} />
  },
  {
    path: "/about",
    rightbar: () => <div>About</div>,
    main: () => <AboutPage />
  },
  {
    path: "/contact",
    rightbar: () => <div>Contact</div>,
    main: () => <ContactPage />
  },
  {
    path: "/about",
    rightbar: () => <div>About</div>,
    main: () => <AboutPage />
  },
  {
    path: "/category:category",
    rightbar: () => <div>Navbar For Category</div>,
    main: () => <CategoryPage />
  },
  {
    path: "/blog",
    rightbar: () => <div>Blog</div>,
    main: () => <BlogPage />
  },
  {
    path: "/login",
    rightbar: () => <div>Login</div>,
    main: () => <LoginPage />
  },
  {
    path: "/signup",
    rightbar: () => <div>Sign Up</div>,
    main: () => <SignUpPage />
  },
];

function App() {
  return (
    <Layout>
      {/* <Switch>
        <Route path="/" exact render={() => <BrandPage promos={PROMOS} />} />
        <Route path="/category/:category" component={CategoryPage} />
        <Route path="/blog/" component={BlogPage} />
        <Route path='/login/' component={LoginPage} />
        <Route path='/signup/' component={SignUpPage} />
        <Route component={NoMatch} />
      </Switch> */}
      <div className='row'>
        <div className='col-9'>
          {routes.map(route => (
            <Route
              key={route.path}
              path={route.path}
              exact={route.exact}
              render={route.main}
            />
          ))}
        </div>
        <div className='col-3'>
          {routes.map(route => (
            <Route
              key={route.path}
              path={route.path}
              exact={route.exact}
              render={route.rightbar}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default App;

const PROMOS = [
  {
    id: "sdfsl224lkrff",
    brand_id: "adfsfs",
    title: "Khuyen mai 30%",
    category: "Mom & Baby",
    coupon_code: "ALE300K",
    coupon_satus: "Expired",
    expired_at: "12 Dec 2019",
    landing_page: "http:tiki.vn/khuyen_mai_khung",
    created_at: "12 Dec 2019",
    updated_at: "13 Dec 2019"
  },
  {
    id: "sdfsl224lkrffssss",
    brand_id: "adfsfssdfsdfs",
    title: "Khuyen mai 1000%",
    category: "Fashion",
    coupon_code: "ALE333wssd0K",
    coupon_satus: "Active",
    expired_at: "12 Dec 2019",
    landing_page: "http:tiki.vn/khuyen_mai_khung_2019",
    created_at: "12 Dec 2019",
    updated_at: "13 Dec 2019"
  }
];
