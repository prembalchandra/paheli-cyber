import React from 'react';
import { useLocation } from 'react-router-dom';
import './HeroBanner.css';
import backgroundImageUrl from '../../assets/images/banner-wrapper-bg.jpg'; 

function HeroBanner() {
  const location = useLocation();
  const getPageTitle = () => {
    const paths = location.pathname.split('/').filter(Boolean);
    return paths.length
      ? paths[paths.length - 1].charAt(0).toUpperCase() + paths[paths.length - 1].slice(1)
      : 'Home';
  };
  const generateBreadcrumbs = () => {
    const paths = location.pathname.split('/').filter(Boolean);
    return paths.map((path, index) => {
      const routeTo = `/${paths.slice(0, index + 1).join('/')}`;
      const label = path.charAt(0).toUpperCase() + path.slice(1);
      return (
        <span key={routeTo}>
          {' / '}
          <a href={routeTo} className={location.pathname === routeTo ? 'active' : ''}>
            {label}
          </a>
        </span>
      );
    });
  };

  return (
    <section className="hero_banner" style={{ backgroundImage: `url(${backgroundImageUrl})` }} >
      <div className="container">
        <div className="hero_banner-content">
          <h1 className="page-heading">{getPageTitle()}</h1>
          <div className="breadcrumbs">
            <a href="/" className={location.pathname === '/' ? 'active' : ''}>
              Home
            </a>
            {generateBreadcrumbs()}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroBanner;
