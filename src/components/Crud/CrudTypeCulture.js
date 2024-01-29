import Button from '../Button/Button';
import Input from '../Input/Input';
import './CrudTypeCulture.css';
import GroundType from '../../Data/GroundType.js';

function CrudTypeCulture(props){
  return (
    <>
      <div className="Crud">
        <div className="CrudRight">
        <h2>insert type culture</h2>
          <div className="CrudRightInformation">
            <p>Name : </p> <Input name={props.Input}></Input>
            <p>seed quantity : </p> <Input name={props.Input}></Input>
            <p>yield quantity : </p> <Input name={props.Input}></Input>
            <p>unity : </p> <Input name={props.Input}></Input>
            <p>sedd price : </p> <Input name={props.Input}></Input>
            <p>yield price : </p> <Input name={props.Input}></Input>
            <p>ground type : </p>
              <select name="groundType">
                {GroundType.map((type) => (
                  <option key={type.id} value={type.nameGroundType}>
                    {type.nameGroundType}
                  </option>
                ))}
              </select>
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

export default CrudTypeCulture;