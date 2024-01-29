import './Section.css';
// import Home from '../Home/Home';
// import List from '../List/List';
import CrudTypeCulture from '../Crud/CrudTypeCulture';
// import CrudResource from '../Crud/CrudResource';
// import Statistics from '../Statistics/Statistics';

function Section() {
  return (
    <>
      <div className="Section">
        <div className="SectionContent2">
          {/* <Home></Home> */}
          {/* <CrudResource></CrudResource> */}
          {/* <List></List> */}
          <CrudTypeCulture></CrudTypeCulture>
          {/* <Statistics></Statistics> */}
        </div>
      </div>
    </>
  );
}

export default Section;
