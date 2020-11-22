import React, { useState} from "react";
import Tab from './Tab';
import Pannel from './Pannel';
import TabContext from './TabContext';

const Tabs = ({ children }) => {
  const [activeTab, setActiveTab] = useState(`search`);

  const handleTabClick = label => {
    setActiveTab(label);
  }

  const context = {activeTab, handleTabClick};

  return (
    <TabContext.Provider value={context}>
      {children}
    </TabContext.Provider>
  );
};

// Allows dot notation on component use solidifying their relationship
Tabs.Tab = Tab;
Tabs.Pannel = Pannel;
  
export default Tabs;