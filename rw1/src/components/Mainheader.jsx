import {Link} from "react-router-dom"
import Image from "../images/main_header.png"


const Mainheader = () => {
  return(
    <header className="main__header">
      <div className="container main__header-container">
        <div className="main__header-left">
          <h4>#100DaysofWorkouts</h4>
          <h1>Join The Legends Of The Fitness World</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum qui esse eaque tempore sint ipsam!
          </p>
          <Link to ="/plans" className='btn lg'>Get Started</Link>
        </div>
        <div className="main__header-right">
          <div className="main__header-circle"></div>
          <div className="main__header-image">
            <img src={Image} alt="Main Header Image" />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Mainheader