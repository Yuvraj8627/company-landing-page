import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  text-align: center;
  padding: 20px;
  background-color: #333;
  color: #fff;
`;

const Footer = () => (
  <FooterWrapper>
    <p>© 2024 Company Name. All rights reserved.</p>
  </FooterWrapper>
);

export default Footer;
