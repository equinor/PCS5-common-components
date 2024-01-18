import { HEXString, SideSheet } from "@equinor/fusion-react-side-sheet";

import Footer from "./footer/footer";
import { Tabs } from "@equinor/eds-core-react";
import styled from "styled-components";
import { TopContent } from "./contentSection/topContent";
import { StatusSection } from "./footer/status";
import { Tab } from "./types";

type SheetProps = {
  openSheet: boolean;
  setOpenSheet: React.Dispatch<React.SetStateAction<boolean>>;
  title: string;
  subtitle: string;
  actions: JSX.Element;
  children: React.ReactNode;
  tabs?: Array<Tab>;
  indicator?: boolean;
  indicatorColor?: HEXString;
};

const StyledTab = styled(Tabs.Tab)`
  border-radius: 0px;
`;

const ContentWrapper = styled.div`
  display: flex;
  gap: 24px;
  flex-direction: column;
  margin-left: -16px;
  padding: 24px;
`;

export const ProcosysSideSheet = ({
  openSheet,
  setOpenSheet,
  title,
  subtitle,
  actions,
  children,
  indicator = false,
  indicatorColor,
  tabs,
}: SheetProps) => {
  return (
    <SideSheet
      enableFullscreen
      minWidth={700}
      onClose={() => setOpenSheet(false)}
      isOpen={openSheet}
    >
      {indicator && <SideSheet.Indicator color={indicatorColor} />}
      <SideSheet.Title title={title} />
      <SideSheet.SubTitle subTitle={subtitle} />
      <SideSheet.Actions>{actions}</SideSheet.Actions>
      <SideSheet.Content>
        {tabs && (
          <Tabs style={{ margin: "-16px" }}>
            <Tabs.List>
              {tabs.map((tab) => {
                return <StyledTab variant="minWidth">{tab.TabTitle}</StyledTab>;
              })}
            </Tabs.List>
            <Tabs.Panels>
              {tabs.map((tab) => {
                return <StyledTab variant="minWidth">{tab.TabTitle}</StyledTab>;
              })}
            </Tabs.Panels>
          </Tabs>
        )}
        <ContentWrapper>{children}</ContentWrapper>
      </SideSheet.Content>
    </SideSheet>
  );
};
