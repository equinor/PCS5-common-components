import { Button, Tabs } from "@equinor/eds-core-react";
import SideSheet from "@equinor/fusion-react-side-sheet";

import { useState } from "react";
import Footer from "./footer/footer";

type SheetProps = {
  openSheet: boolean;
  setOpenSheet: React.Dispatch<React.SetStateAction<boolean>>;
  title: string;
  subtitle: string;
  actions: JSX.Element;
  indicator?: false;
  indicatorColor?: `#${string}`;
};

export const ProcosysSideSheet = ({
  openSheet,
  setOpenSheet,
  title,
  subtitle,
  actions,
  indicator = false,
  indicatorColor,
}: SheetProps) => {
  return (
    <SideSheet
      animate
      enableFullscreen
      minWidth={480}
      onClose={() => setOpenSheet(false)}
      isOpen={openSheet}
    >
      {indicator && <SideSheet.Indicator color={indicatorColor} />}
      <SideSheet.Title title={title} />
      <SideSheet.SubTitle subTitle={subtitle} />
      <SideSheet.Actions>{actions}</SideSheet.Actions>
      <SideSheet.Content>
        <Footer />
      </SideSheet.Content>
    </SideSheet>
  );
};
