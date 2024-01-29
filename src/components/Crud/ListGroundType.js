import Button from '../Button/Button';
import Input from '../Input/Input';
import './ListGroundType.css';

function ListGroundType(props){
  return (
    <>
      <div className="List">
        <div className="ListRight">
        <h2>insert ground type</h2>
          <div className="ListRightInformation">
            <p>ground type : </p> <Input name={props.Input}></Input>
          </div>
          <div className="ListRightButton">
            <Button name="Insert" onClick={props.functionInsert}></Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ListGroundType;