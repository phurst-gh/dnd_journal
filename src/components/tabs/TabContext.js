import React from 'react';

const TabContext = React.createContext({
  activeID: ``,
  handleTabClick: () => {}
});

export default TabContext;