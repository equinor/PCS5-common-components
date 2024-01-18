import Sidesheet from "../../../sidesheet/src/components/sidesheet";
import { Meta } from "@storybook/react";
import { useCallback, useState } from "react";
import { Tab } from "../../../sidesheet/src/components/types";
import { HEXString } from "@equinor/fusion-react-side-sheet";
import { Button } from "@equinor/eds-core-react";
import React from "react";

export default {
  title: "Examples/Sidesheet",
  component: Sidesheet,
} as Meta;

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

export const Component = (props: SheetProps) => {
  const [open, setOpen] = useState(false);

  const onClick = useCallback(() => {
    setOpen(true);
  }, [setOpen]);
  return (
    <>
      <Button onClick={onClick}>Open Side Sheet</Button>
      <Sidesheet
        title={props.title}
        openSheet={open}
        setOpenSheet={setOpen}
        subtitle={props.subtitle}
        actions={<></>}
        indicator
        indicatorColor={props.indicatorColor}
        tabs={[
          {
            TabTitle: "One",
            TabContent: <>Panel 1</>,
          },
          {
            TabTitle: "Two",
            TabContent: <>Panel 2</>,
          },
        ]}
      >
        {props.children}
      </Sidesheet>
    </>
  );
};
Component.args = {
  title: "Side Sheet Title",
  subTitle: "Some sub title",
  indicatorColor: "#c8f649",
  minWidth: 480,
  children: "",
  indicator: true,
};

Component.argTypes = {
  indicatorColor: {
    control: { type: "color" },
  },
};
