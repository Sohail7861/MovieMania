import React from 'react';
import "./Home.scss";

const Card=({img}) => (
    <img src={img} alt="cover"/>
)

const Row = ({title}) => (
    <div>
        <h2>{title}</h2>
        <Card img={"https://miro.medium.com/v2/resize:fit:1100/format:webp/1*Wed2L5hgVHz97eBt-EpbPg.jpeg"}/>
    </div>
)


const Home = () => {
  return (
    <div className="home">
        <div className="banner">
            <Row title={"Popular on MovieMania"}/>
        </div>
    </div>
  )
}

export default Home