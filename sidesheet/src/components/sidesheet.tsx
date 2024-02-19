import { HEXString, SideSheet } from "@equinor/fusion-react-side-sheet";

import { Footer } from "./footer/footer";
import { Tabs } from "@equinor/eds-core-react";
import styled from "styled-components";
import { TopContent } from "./contentSection/topContent";
import { StatusSection } from "./footer/status";
import { Tab } from "./types";
import { ProcosysTabs } from "./tabs/tabs";
import { isMobileDevice } from "../utils";
import { useEffect, useState } from "react";

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
  footer?: React.ReactNode;
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
  footer,
}: SheetProps) => {
  useEffect(() => {
    function handleKeyDown(e) {
      if (e.keyCode === 27) {
        setOpenSheet(false);
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    // Don't forget to clean up
    return function cleanup() {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <SideSheet
      enableFullscreen
      minWidth={isMobileDevice() ? window.innerWidth : 700}
      onClose={() => setOpenSheet(false)}
      isOpen={openSheet}
    >
      {indicator && <SideSheet.Indicator color={indicatorColor} />}
      <SideSheet.Title title={title} />
      <SideSheet.SubTitle subTitle={subtitle} />
      <SideSheet.Actions>{actions}</SideSheet.Actions>
      <SideSheet.Content>
        {tabs && <ProcosysTabs tabs={tabs} />}
        <ContentWrapper>{children}</ContentWrapper> {footer}
      </SideSheet.Content>
    </SideSheet>
  );
};

export default ProcosysSideSheet;
