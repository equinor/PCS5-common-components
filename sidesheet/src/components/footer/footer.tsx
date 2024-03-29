import { Button } from "@equinor/eds-core-react";
import styled from "styled-components";

const StyledFooter = styled.div`
  position: absolute;
  bottom: 0;
  margin-left: -16px;
  width: 100%;
  height: 5%;
  text-align: left;
  box-shadow: 0px 3px 15px 0px rgba(0, 0, 0, 0.2),
    0px 9px 46px 0px rgba(0, 0, 0, 0.12), 0px -24px 38px 0px rgba(0, 0, 0, 0.14);
  padding: 16px;
`;

const Footer = () => {
  return (
    <>
      <StyledFooter>Hallo</StyledFooter>
    </>
  );
};

export default Footer;
