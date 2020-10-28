import Router from 'next/router';
import Link from 'next/link';
import NProgress from 'nprogress';
import styled from 'styled-components';

Router.onRouteChangeStart = () => {
  NProgress.start();
};
Router.onRouteChangeComplete = () => {
  NProgress.done();
};
Router.onRouteChangeError = () => {
  NProgress.done();
};

const Header = () => {
  return <div>This is the header</div>;
};

export default Header;
