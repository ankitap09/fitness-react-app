import React, { Component } from "react";
 
class Home extends Component {
  render() {
    return (<div class="description-bg-all">
      <div>
  
      <div class="description">
      <marquee direction="left" scrollamount="18"> <h1>    Hello ,Welcome To Aims Fitness Center</h1></marquee>
        <br/><br/>  
       <h1> <a href='/about-us'>
              <button class="btn btn-outline-secondary btn-lg">See more</button>  </a> 
              </h1>  
   </div>
   </div>
   </div>
    );
  }
}
 
export default Home;