import { useEffect, useState } from 'react'



// Fetchers


export default function Image( { url }) {
    const fetchRandomImage = async () => {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    }
    // states
    const [image, setImage] = useState({})
    // effects
    useEffect(() => {
        fetchRandomImage().then((data => setImage(data)))
    })
  return (
    <div>
        <img src={image} alt="" />
    </div>
  )
}
