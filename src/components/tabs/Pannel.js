import React from 'react';
import TabContext from './TabContext';

const Pannel = ({label, children}) => {
  const { activeTab } = React.useContext(TabContext);

  return activeTab === label && children;
}

export default Pannel;