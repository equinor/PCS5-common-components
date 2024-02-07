import styled from "styled-components";
import { tokens } from "@equinor/eds-tokens";
import { COLORS } from "../globalStyles";

const TopContentWrapper = styled.div`
  background-color: ${COLORS.greyBackground}
  width: 100%;
  padding: 16px;
  margin-bottom: 0px;
  min-height: 5%;
`;

type TopContentProps = {
  children?: JSX.Element;
};

export const TopContent = ({ children }: TopContentProps) => {
  return <TopContentWrapper>{children}</TopContentWrapper>;
};
