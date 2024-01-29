import Button from '../Button/Button';
import Input from '../Input/Input';
import './CrudCategoryCulture.css';

function CrudCategoryCulture(props){
  return (
    <>
      <div className="Crud">
        <div className="CrudRight">
        <h2>insert categoty culture</h2>
          <div className="CrudRightInformation">
            <p>category culture : </p> <Input name={props.Input}></Input>
          </div>
          <div className="CrudRightButton">
            <div className="CrudRightButton1">
              <Button name="Insert" onClick={props.functionInsert}></Button>
            </div>
            <div className="CrudRightButton2">
              <Button name="List" onClick={props.functionList}></Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CrudCategoryCulture;