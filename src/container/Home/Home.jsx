// Libraries

import React, { Component, Fragment } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

// Pages
import YouTubeComp from "../../component/YouTubeComponent/YouTubeComp";
import Product from "../pages/Product/Product";
import LifeCycleComp from "../pages/LifeCycleComp/LifeCycleComp";
import BlogPost from "../pages/BlogPost/BlogPost";
import YouTubeCompPage from "../pages/YouTubeCompPage/YouTubeCompPage";

// Style
import "./Home.css";
import DetailPost from "../pages/BlogPost/DetailPost/DetailPost";

class Home extends Component {
  state = {
    showComponent: true,
  };
  componentDidMount() {
    // setTimeout(() => {
    //   this.setState({
    //     showComponent: false,
    //   });
    // }, 15000);
  }

  render() {
    return (
      <BrowserRouter>
        <Fragment>
          <div className="navigation">
            <Link to="/">Blog Post</Link>
            <Link to="/product">Product</Link>
            <Link to="/lifecycle">LifeCycle</Link>
            <Link to="/youtube">YouTube</Link>
          </div>
          <Route path="/" exact component={BlogPost} />
          <Route path="/detail-post/:id" component={DetailPost} />
          <Route path="/product" component={Product} />
          <Route path="/lifecycle" component={LifeCycleComp} />
          <Route path="/youtube" component={YouTubeCompPage} />
        </Fragment>
      </BrowserRouter>
    );
  }
}

export default Home;
