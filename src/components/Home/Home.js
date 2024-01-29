import Button from '../Button/Button';
import HomeImg1 from '../../HomeImg1.png';
import HomeImg2 from '../../HomeImg2.png';
import HomeImg3 from '../../HomeImg3.png';
import './Home.css';

function Home(props){
  return (
    <>
      <div className="Home">
        <div className="HomeRight">
          <div className="HomeRightInformation">
            <div className="HomeRightInformation1">
              <h3>statistics</h3>  
              <p>Information on the total number <br></br> of players</p>  
              <img src={HomeImg1} alt={HomeImg1}/>
              <Button name="See More" onClick={props.functionInsert}></Button>
            </div>
            <div className="HomeRightInformation4">
              <h3>culture</h3>  
              <p>Information on the best culture </p>  
              <img src={HomeImg3} alt={HomeImg3}/>
              <Button name="See More" onClick={props.functionInsert}></Button>
            </div>
            <div className="HomeRightInformation23">
              <div className="HomeRightInformation2">
                <h3>60%</h3>  
              </div>
              <div className="HomeRightInformation3">
                <img src={HomeImg2} alt={HomeImg2}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;