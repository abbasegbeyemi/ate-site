/** @jsx jsx */
import { jsx } from 'theme-ui';
import LG from '@/images/logo-circled.inline.svg';
import { Link } from 'gatsby';
import React from 'react';

const Logo: React.FC = (props) => (
  <Link {...props} to="/">
    <LG />
  </Link>
);

export default Logo;
