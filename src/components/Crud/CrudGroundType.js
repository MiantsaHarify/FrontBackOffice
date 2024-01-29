import Button from '../Button/Button';
import Input from '../Input/Input';
import './CrudGroundType.css';

function CrudGroundType(props){
  return (
    <>
      <div className="Crud">
        <div className="CrudRight">
        <h2>insert ground type</h2>
          <div className="CrudRightInformation">
            <p>ground type : </p> <Input name={props.nameGroundType}></Input>
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

export default CrudGroundType;