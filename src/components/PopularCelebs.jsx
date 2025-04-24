import { useEffect, useState } from "react";
import { popularCeleb } from "../popularCelebs";

const PopularCelebs = () => {
  const [celebData, setCelebData] = useState(popularCeleb.edges);
  useEffect(() => {
    setCelebData(
      celebData.sort(
        (a, b) =>
          a.node.meterRanking.currentRank - b.node.meterRanking.currentRank
      )
    );
  }, []);
  return (
    <div className="popular-celeb">
      {celebData.map((elem, i) => (
        <div className="celeb-container" key={i}>
          <div className="celeb">
            <img className="celeb-img" src={elem.node.primaryImage.url}></img>
          </div>
          <div className="celeb-name">{elem.node.nameText.text}</div>
        </div>
      ))}
    </div>
  );
};

export default PopularCelebs;
