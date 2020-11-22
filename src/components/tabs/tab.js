import React from 'react';
import TabContext from './TabContext';

const Tab = ({ label, children }) => {
  const { activeTab, handleTabClick } = React.useContext(TabContext);
console.log(handleTabClick)
  const tabClasses = activeTab === children ? `tab tab-active` : `tab`;

  return (
    <div className={tabClasses}>
      <button onClick={() => handleTabClick(label)}>{label}</button>
    </div>
  )
};

export default Tab;