import { Tabs } from "@equinor/eds-core-react";
import { Tab } from "./types";
import styled from "styled-components";
import { useState } from "react";

type TabProps = {
  tabs: Array<Tab>;
};

const StyledTab = styled(Tabs.Tab)`
  border-radius: 0px;
`;

const StyledTabs = styled(Tabs)`
  margin: -16px;
`;

const StyledPanel = styled(Tabs.Panel)`
  margin-left: 24px;
  padding-right: 24px;
  margin-right: 24px;
`;

export const ProcosysTabs = ({ tabs }: TabProps) => {
  const [activeTab, setActiveTab] = useState(0);
  const handleChange = (index: number) => {
    setActiveTab(index);
  };
  return (
    <>
      {tabs && (
        <StyledTabs activeTab={activeTab} onChange={handleChange}>
          <Tabs.List>
            {tabs.map((tab) => {
              return <StyledTab variant="minWidth">{tab.TabTitle}</StyledTab>;
            })}
          </Tabs.List>
          <Tabs.Panels>
            {tabs.map((tab) => {
              return <StyledPanel>{tab.TabContent}</StyledPanel>;
            })}
          </Tabs.Panels>
        </StyledTabs>
      )}
    </>
  );
};
