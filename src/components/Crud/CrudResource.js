import Button from '../Button/Button';
import Input from '../Input/Input';
import './CrudResource.css';

function CrudResource(props){
  return (
    <>
      <div className="Crud">
        <div className="CrudRight">
        <h2>insert type culture</h2>
          <div className="CrudRightInformation">
            <p>type resource : </p> <Input name={props.Input}></Input>
            <p>price unitair : </p> <Input name={props.Input}></Input>
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

export default CrudResource;