import { Tabs } from "@equinor/eds-core-react";
import { Tab } from "../types";
import styled from "styled-components";
import { useState } from "react";
import { tokens } from "@equinor/eds-tokens";
import { COLORS } from "../globalStyles";

type TabProps = {
  tabs: Array<Tab>;
};

const StyledTab = styled(Tabs.Tab)`
  border-radius: 0px;
`;

const StyledTabs = styled(Tabs)`
  margin-left: -16px;
  width: 100%;
`;

const StyledPanel = styled(Tabs.Panel)`
  margin-left: 24px;
  padding-right: 24px;
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
            {tabs.map((tab, index) => {
              return (
                <StyledTab key={index} variant="minWidth">
                  {tab.TabTitle}
                </StyledTab>
              );
            })}
          </Tabs.List>
          <Tabs.Panels>
            {tabs.map((tab, index) => {
              return <StyledPanel key={index}>{tab.TabContent}</StyledPanel>;
            })}
          </Tabs.Panels>
        </StyledTabs>
      )}
    </>
  );
};
