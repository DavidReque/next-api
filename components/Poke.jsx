import React, { useEffect, useState } from "react";

export default function Poke() {
  const apiKey = process.env.NEXT_PUBLIC_API_KEY
  const [photos, setPhotos] = useState([]);
  const [page, setPage] = useState(1);

  function handleClick() {
    setPage(page + 1);
  }

  useEffect(() => {
    async function getPoke() {
      try {
        const res = await fetch(
          `https://api.unsplash.com/photos/?client_id=${apiKey}&page=${page}`
        );
        const data = await res.json();
        setPhotos(data);
      } catch (error) {
        console.error(error);
      }
    }

    getPoke();
  }, [photos, page]);

  return (
    <div>
      {photos.map((photo) => (
        <div key={photo.id}>
          <p>{photo.alt_description}</p>
          <img src={photo.urls.small_s3} />
        </div>
      ))}
      <button onClick={handleClick}>Next page</button>
      <h3>Page: {page}</h3>
    </div>
  );
}
