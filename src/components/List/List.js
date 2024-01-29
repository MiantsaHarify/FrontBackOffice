import Button from '../Button/Button';
import './List.css';

function List(props){
  return (
    <>
      <div className="List">
        <div className="ListRight">
          <div className="ListRightInformation">
              <h3>list resource</h3>  
              <h2>name</h2>  
              <p>grains</p>  
              <p>grains</p> 
              <p>grains</p> 
              <Button name="Insert resource" onClick={props.functionInsert}></Button>
            </div>
          </div>
      </div>
    </>
  );
}

export default List;