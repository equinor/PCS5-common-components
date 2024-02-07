import { MarkdownEditor } from "@equinor/fusion-react-markdown";
import styled from "styled-components";
import { COLORS } from "../globalStyles";

type SectionProps = {
  children: JSX.Element;
};

const StyledSection = styled.div<{ maxwidth?: boolean }>`
  border-radius: 8px;
  background: ${COLORS.greyBackground};
  padding: 16px;
  width: 100%;
`;

export const ContentSection = ({ children }: SectionProps) => {
  return <StyledSection>{children}</StyledSection>;
};
