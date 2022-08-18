import { useEffect, useState } from "react";

// Components
import ContentButton from "../ContentButton";

export default function Image({ url }) {
  const fetchRandomImage = async () => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  };
  // states
  const [imageArray, setImage] = useState([]);
  const [randomNumber, setNumber] = useState(0);

  // effects
  useEffect(() => {
    fetchRandomImage().then((data) => setImage(data.message));
  }, []);

  // handlers
  const handleClick = () => {
    const number = Math.floor(Math.random() * imageArray.length);
    setNumber(number);
  };

  return (
    <div className="wrapper flx column cnt-cnt">
      <div className="img-cont flx cnt-cnt ">
        <img src={imageArray[randomNumber]} alt="" />
      </div>
      <ContentButton handleClick={handleClick} />
    </div>
  );
}
