import Search from "./search/headerSearch/search";
import Tabs from "./tabs/Tabs";
import './App.css';

function App() {
  return (
    <div className="app">
      <header>
        <Search />
      </header>

      Hello World!

      <Tabs>
        <Tabs.Tab label="search" />
        <Tabs.Tab label="journal" />

        
          <Tabs.Pannel label="search">
            search pannel
            {/* {searchInfo !== null ? <Results /> : <Search />} */}
          </Tabs.Pannel>
          <Tabs.Pannel label="journal">journal pannel</Tabs.Pannel>
       
      </Tabs>
    </div>
  );
}

export default App;
