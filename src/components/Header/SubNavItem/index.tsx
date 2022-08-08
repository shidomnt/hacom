import React from 'react';
import { Link } from 'react-router-dom';
import { headerSubNavData } from '../../../constant';

interface SubNavItemProps {
  content: typeof headerSubNavData[number];
}

export default function SubNavItem({ content }: SubNavItemProps) {
  return (
    <ul className="header__subnav-item">
      <li>
        <h3 className="header__subnav-title">{content.title}</h3>
      </li>
      {content.policies.map((policy) => (
        <li key={policy}>
          <Link to="#" className="header__subnav-link">
            <i className="fa-solid fa-check" />
            {policy}
          </Link>
        </li>
      ))}
    </ul>
  );
}
