// import React from 'react';
//import { Link } from 'react-router-dom'; // Correct import

function NavBar() {
  return (
    
       <nav style={styles}>
          <a href="https://techcrunch.com"> TechCrunch - Latest News</a>
           <a href="https://www.artificialintelligence-news.com">[AI News]</a>
           <a href="https://news.mit.edu/topic/artificial-intelligence2">[Robotics]</a>
       </nav>
  );
}

 const styles = {
   display: "flex",
   justifyContent: "space-around", 
   fontSize: "50px",
   fontWeight: "bold",
   backgroundColor: "aqua",
 }

export default NavBar;
