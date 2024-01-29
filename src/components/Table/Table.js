import logo from '../../logo.png';
import profil from '../../profil.png';
import Button from '../Button/Button';
import './Table.css';

function Table(props){
  return (
    <>
      <div className="Table">
        <div className="TableLeft">
          <div className="TableLeftLogo">
            <img src={logo} alt={logo}/>
          </div>
          <div className="TableLeftLogin">
            <img src={profil} alt={profil}/>
            <p>RAKOTOVOLOLONA <br></br> Miantsa</p> 
          </div>
          <div className="TableLeftButton">
            <Button name="home"></Button>
            <Button name="statistic"></Button>
            <Button name="crud ground type"></Button>
            <Button name="crud category culture"></Button>
            <Button name="crud type culture"></Button>
            <Button name="crud resources"></Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Table;