import DestinationData from "./DestinationData"
import Mountain1 from "../assets/1.jpg"
import Mountain2 from "../assets/2.jpg"
import Mountain3 from "../assets/3.jpg"
import Mountain4 from "../assets/4.jpg"

const Destination =()=>{
    return(
<>
<div className="destination">
<h1>Popular Destination</h1>
    <p>Tours give you opportunity to Tour</p>
   <DestinationData
    className='first-des'
    heading="Taal volcano, Batangas"
    text="One of the most iconic views in Luzon,Mt. Tall boasts
        a volcano inside a Lakee inside an island.If you fancy a coser look, thehike up to the creater is a mere $5 minutes an its"
    img1={Mountain1}
    img2={Mountain2}
   />
    <DestinationData
    className='first-des-reverse'
    heading="Mt.Daguladul,Batangas"
    text="One of the most iconic views in Luzon,Mt. Tall boasts
        a volcano inside a Lakee inside an island.If you fancy a coser look, thehike up to the creater is a mere $5 minutes an its"
    img1={Mountain3}
    img2={Mountain4}
   />
</div>
    
</>
    )
}
export default Destination