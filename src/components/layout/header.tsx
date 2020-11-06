import React from 'react';
import { Link } from 'gatsby';

type Props = {
  siteTitle?: string,
}

const Header = ({ siteTitle }: Props) => (
  <header>
    <div className="content-wrapper">
      <h1 className="site-title" >
        <Link
          to="/"
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
)

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
