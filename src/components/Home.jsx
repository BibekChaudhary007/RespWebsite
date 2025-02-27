import React from 'react'
import {AiFillGoogleCircle, AiFillAmazonCircle,AiFillYoutube, AiFillInstagram} from "react-icons/ai"

import vg from "../assets/2.webp"

const Home = () => {
  return (
    <>
    <div className='home' id='home'>
      <main>
        <h1>Techystar</h1>
        <p>Solutions to all your problems </p>
      </main>
      </div>
  
    <div className='home2'>
      <img src={vg} alt="Graphics" />

       <div>
        <p>
          We are your one and only solution to the tech problems your face everyday. We are leading tech company whose aim is to increase the problem solving ability in children.
        </p>
        </div>
      

    </div>


    <div className='home3' id='about'>
      <div><h1>Who we are?</h1>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio alias rerum, reiciendis cupiditate dolor dicta molestiae earum ipsum eius sed fuga quidem soluta sint odit illo! Deserunt quam magni, quibusdam quos nostrum ea facilis repellendus sed voluptatibus quo! Maxime dolorum, sed vitae cupiditate tenetur aspernatur amet mollitia, voluptatum consectetur nemo repellat corrupti quia maiores incidunt suscipit vero fugiat aperiam sit!</p>
      </div>

    </div>

    <div className="home4" id='brands'>
      <div>
        <h1>Brands</h1>
        <article>
          <div style={{animationDelay:"0.3s"}}>
            <AiFillGoogleCircle/>
            <p>Google</p>
          </div>


          <div style={{animationDelay:"0.5s"}}>
            <AiFillAmazonCircle/>
            <p>Amazon</p>
          </div>

          <div style={{animationDelay:"0.7s"}}>
            <AiFillYoutube/>
            <p>Youtube</p>
          </div>

          <div style={{animationDelay:"1s"}}>
            <AiFillInstagram/>
            <p>Instagram</p>
          </div>

        </article>
      </div>
    </div>
      
    </>
  )
}

export default Home
