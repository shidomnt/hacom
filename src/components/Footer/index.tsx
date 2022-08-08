import React from 'react';
import ListShowroom from './ListShowroom';
import Policies from './Policies';
import About from './About';
import './style.css';

export default function Footer() {
  return (
    <footer className="footer">
      {/* HỆ THỐNG CÁC SHOWROOM CỦA HACOM */}
      <div className="container">
        <h3 className="footer__title">HỆ THỐNG CÁC SHOWROOM CỦA HACOM</h3>
        <ListShowroom />
        <div className="footer__buttom">
          <div className="footer__buttom--header">
            <Policies />
          </div>
          <div className="footer__buttom--body">
            <About />
          </div>
        </div>
      </div>
    </footer>
  );
}
