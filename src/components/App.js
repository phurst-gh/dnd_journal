import Search from "./search/headerSearch/search";

import logo from '../graphics/svg/logo.svg';
import './App.css';

function App() {
  return (
    <div className="app">
      <header>
        <Search />
      </header>

      Hello World!

      {/* <TabWrap>
        <Tab>
          <QuickSearchOrResults />
        </Tab>
        <Tab>
          <Journal />
        </Tab>
      </TabWrap> */}
    </div>
  );
}

export default App;
