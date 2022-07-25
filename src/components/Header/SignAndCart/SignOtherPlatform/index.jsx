import React from 'react';
import { Link } from 'react-router-dom';

const SignOtherPlatform = () => {
  return (
    <React.Fragment>
      <li className="use__submenu--social">
        <Link to="#" className="use__submenu--list-link social gg">
          <i className="fa-brands fa-google" />
          <span>Đăng nhập bằng Google</span>
        </Link>
      </li>
      <li className="use__submenu--social">
        <Link to="#" className="use__submenu--list-link social fb">
          <i className="fa-brands fa-facebook-square" />
          <span> Đăng nhập bằng Facebook</span>
        </Link>
      </li>
      <li className="use__submenu--social">
        <Link to="#" className="use__submenu--list-link social zl">
          <i className="fa-solid fa-comment" />
          <span>Đăng nhập bằng Zalo</span>
        </Link>
      </li>
    </React.Fragment>
  );
};

export default SignOtherPlatform;
