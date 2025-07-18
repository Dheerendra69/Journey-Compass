import classNames from "classnames";
import React from "react";
import { ArticleList, PopularTags } from "../components";
import { useAuth } from "../hooks";
import "../css/Home.css";

const initialFilters = { tag: "", offset: null, feed: false };

function Home() {
  const { isAuth } = useAuth();
  const [filters, setFilters] = React.useState({
    ...initialFilters,
    feed: isAuth,
  });

  React.useEffect(() => {
    setFilters({ ...initialFilters, feed: isAuth });
  }, [isAuth]);

  function onFeedClick() {
    setFilters({ ...initialFilters, feed: true });
  }

  return (
    <div className="home-page">

      <section className="bg-dark hero-section text-white text-center py-5">
        <div className="container px-3 px-sm-4">
          <h1 className="display-4 display-md-2 logo-font mb-3 typing">
            Journey-Compass
          </h1>
          <p className="lead lead-responsive">A place to share your journey.</p>
        </div>
      </section>

      <section className="container-fluid py-5">
        <div className="container">
          <div className="row gx-5 gy-4">
            <div className="col-12 col-lg-4 order-1 order-lg-2">
              <div className="card p-3 shadow-sm border-0">
                <PopularTags />
              </div>
            </div>

            <div className="col-12 col-lg-8 order-2 order-lg-1">
              <div className="mb-3">
                <ul className="nav nav-pills">
                  {isAuth && (
                    <li className="nav-item">
                      <button
                        onClick={onFeedClick}
                        className={classNames("nav-link", {
                          active: filters.feed,
                        })}
                      >
                        Your Feed
                      </button>
                    </li>
                  )}
                </ul>
              </div>
              <div className="card p-3 shadow-sm border-0">
                <ArticleList />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
