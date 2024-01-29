import banana from '../../banana.png';
import grass from '../../grass.png';
import pois from '../../pois.png';
import Button from '../Button/Button';
import './Statistics.css';

function Statistics(props){
  return (
    <>
      <div className="Statistics">
        <div className="StatisticsRight">
          <div className="StatisticsRightInformation">
            <div className="StatisticsRightInformation1">
              <h3>best type culture</h3>  
              <img src={banana} alt={banana}/>
              <h2>banana</h2>  
              <p>
                The banana cultivation is undeniably the royal path in the game,
                providing the highest yields and most lucrative benefits for savvy players
              </p>  
              <Button name="See More" onClick={props.functionInsert}></Button>
            </div>
            <div className="StatisticsRightInformation3">
              <h3>yield per crop per plot per month</h3>  
              <img src={pois} alt={pois}/>
              <p>
                The most skilled players are converging <br></br>
                towards the use of these types of terrain
              </p>  
              <Button name="See More" onClick={props.functionInsert}></Button>
            </div>
            <div className="StatisticsRightInformation4">
              <h3>best ground-type</h3>  
              <p>
                The most skilled players are converging towards  <br></br>  
                the use of these types of terrain, defining them <br></br> 
                as the best in the current game, <br></br>  
                offering an ideal combination of resources <br></br>  
                and strategic advantages.
              </p>  
              <img src={grass} alt={grass}/>
              <Button name="See More" onClick={props.functionInsert}></Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Statistics;