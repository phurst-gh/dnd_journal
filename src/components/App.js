import Search from "./search/headerSearch/search";
import TabWrap from "./tabs/tabWrap";
import Tab from "./tabs/tab";
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
          Tab 1
        </Tab>
        <Tab>
          Tab 2
        </Tab>
      </TabWrap> */}
    </div>
  );
}

export default App;
