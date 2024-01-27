import React from "react";
import styled from "styled-components";

function Footer() {
  return (
    <Wrapper className="footer">
      <p className="info-footer">
        Design & Development by Florent Hajdari. All rights reserved!
      </p>
    </Wrapper>
  );
}

export default Footer;

const Wrapper = styled.section`
  padding: 20px 0;
  background: linear-gradient(#17373b, #20555b);

  .info-footer {
    color: #fff;
  }

  p {
    margin-bottom: 0 !important;
  }
`;
