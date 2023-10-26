import './Trip.css'
import React from 'react'
import TripData from './TripData'
import trip1 from '../assets/5.jpg'
import trip2 from '../assets/6.jpg'
import trip3 from '../assets/8.jpg'
function Trip(){
  return (
    <>
    <div className='trip'>
   <h1>reacent Trips</h1>
   <p>You can discover unique destinations using Google Maps.</p>
    </div>
    <div className='tripcard'>
    <TripData 
      image={trip1}
      heading="Trip iin Indonesia"
      text="Indonesia,[a] officially the Republic of Indonesia (Indonesian: Republik Indonesia),[b] is a country in Southeast Asia and Oceania between the Indian and Pacific oceans. It consists of over 17,000 islands, including Sumatra, Java, Sulawesi, and parts of Borneo and New Guinea. Indonesia is the world's largest archipelagic state and the 14th-largest country by area, at 1,904,569 square kilometres (735,358 square miles). With over 278 million people, Indonesia is the world's fourth-most populous country and the most populous Muslim-majority country. Java, the world's most populous island, is home to more than half of the country's population."

    />
    <TripData 
      image={trip2}
      heading="Trip in Malaysia"
      text="At some point, the Melayu Kingdom took its name from the Sungai Melayu.[18][28] Melayu then became associated with Srivijaya,[22] and remained associated with various parts of Sumatra, especially Palembang, where the founder of the Malacca Sultanate is thought to have come from.[29] It is only thought to have developed into an ethnonym as Malacca became a regional power in the 15th century. Islamisation established an ethnoreligious identity in Malacca, with the term Melayu beginning to appear as interchangeable with Melakans."
    />
    <TripData 
      image={trip3}
      heading="Trip in France"
      text="France (French: [fʁɑ̃s] ⓘ), officially the French Republic (French: République française [ʁepyblik fʁɑ̃sɛːz]),[14] is a country located primarily in Western Europe. It also includes overseas regions and territories in the Americas and the Atlantic, Pacific and Indian oceans,[XII] giving it one of the largest discontiguous exclusive economic zones in the world. Metropolitan France shares borders with Belgium and Luxembourg to the north, Germany to the north east, Switzerland to the east, Italy and Monaco to the south east, Andorra and Spain to the south, "
    />
    </div>
    
   </>
  )
}

export default Trip
