import { HEXString, SideSheet } from "@equinor/fusion-react-side-sheet";

import { Footer } from "./footer/footer";
import { Tabs } from "@equinor/eds-core-react";
import styled from "styled-components";
import { TopContent } from "./contentSection/topContent";
import { StatusSection } from "./footer/status";
import { Tab } from "./types";
import { ProcosysTabs } from "./tabs/tabs";
import { isMobileDevice } from "../utils";

type SheetProps = {
  openSheet: boolean;
  setOpenSheet: React.Dispatch<React.SetStateAction<boolean>>;
  title: string;
  subtitle: string;
  actions: JSX.Element;
  children?: React.ReactNode;
  tabs?: Array<Tab>;
  indicator?: boolean;
  indicatorColor?: HEXString;
};

const ContentWrapper = styled.div`
  display: flex;
  gap: 24px;
  flex-direction: column;
  padding: 24px;
`;

const ProcosysSideSheet = ({
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
      minWidth={isMobileDevice() ? window.innerWidth : 480}
      onClose={() => setOpenSheet(false)}
      isOpen={openSheet}
    >
      {indicator && <SideSheet.Indicator color={indicatorColor} />}
      <SideSheet.Title title={title} />
      <SideSheet.SubTitle subTitle={subtitle} />
      <SideSheet.Actions>{actions}</SideSheet.Actions>
      <SideSheet.Content>
        {tabs && <ProcosysTabs tabs={tabs} />}
        <ContentWrapper>{children}</ContentWrapper>{" "}
      </SideSheet.Content>
    </SideSheet>
  );
};

export default ProcosysSideSheet;
