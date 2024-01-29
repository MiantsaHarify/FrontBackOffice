import './App.css';
import Header from './components/Header/Header';
import Section from './components/Section/Section';
import Table from './components/Table/Table';

function App() {
  return (
    <div className="App">
      <header className="AppHeader">
        <Header></Header>
      </header>
      <header className="AppContent">
        <header className="AppTable">
          <Table></Table>
        </header>  
        <header className="AppSection">
          <Section></Section>
        </header>
        
      </header>
    </div>
  );
}

export default App;