import React from 'react';
import BasicLayout from './BasicLayout';
import UserLayout from './UserLayout';

export default props => {
  const { location } = props;
  const { pathname } = location;
  if (/\/login/i.test(pathname)) {
    return <UserLayout {...props} />;
  }
  return <BasicLayout {...props} />;
};
