import axios from 'axios';
import { useEffect, useState } from "react";

import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import.meta.env.VITE_NEWS_API_KEY

 function News() {
   const [newsData, setNewsData] = useState([]);
   const [loading, setLoading] = useState(false);


   // Make api call to news api
   async function getNews() {
     setLoading(true);
try {
  const API_KEY = import.meta.env.VITE_NEWS_API_KEY;
    const resp = await axios.get(`https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${API_KEY}`);   
      setNewsData(resp.data.articles);
console.log(newsData)
     //Set loading boolean to false so that we know to show news articles
        setLoading(false);
     
  
} catch (error) {
  console.error(error)
}
   }
// Make news API call using axios
    


  useEffect(() => {
    getNews();
  }, []);

  return (
    <div className="App" style={styles}>
      <header className="App-header">
        {loading ? "Loading..." : <Container>
          
          {newsData.map((newsData, index) =>
            <Row className="">
              <Col xs={12} className="mt-5 w-500" key={index}>
                <a target="_blank" href={newsData.url}>
                  <Card >
                    <Card.Title className="my-3">  {newsData.title}</Card.Title>
                    <Card.Img src={newsData.urlToImage} />
                    <Card.Body>

                      <Card.Text>
                        {newsData.description}
                      </Card.Text>
                      <hr />
                    </Card.Body>
                  </Card>
                </a>
              </Col>
            </Row>
          )}

        </Container>
        }
      </header>
    </div>
  );
}


const styles = {
  display: "flex",
  justifyContent: "space-around", 
  fontSize: "20px",
  backgroundColor: "rgb(233, 110, 198)",
  padding: "10px 100px",
  textAlign: "center",
  
}


export default News;