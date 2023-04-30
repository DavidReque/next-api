import React, { useEffect, useState } from "react";

export default function Poke() {
  const apiKey = process.env.NEXT_PUBLIC_API_KEY;
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
      <div className="flex flex-wrap -mx-2">
        {photos.map((photo) => (
          <div className="w-full sm:w-1/2 md:w-1/3 xl:w-1/4 p-2" key={photo.id}>
            <img
              className="w-full h-64 object-cover hover:opacity-75"
              src={photo.urls.small_s3}
              alt={photo.alt_description}
            />
          </div>
        ))}
      </div>

      <div className="flex justify-center items-center mt-8 gap-3">
        {page > 1 && (
          <button
            className="font-normal p-1 bg-white w-24 rounded-xl text-slate-950 hover:bg-black hover:text-white hover:border"
            onClick={() => setPage(page - 1)}
          >
            Previous page
          </button>
        )}
        <button
          className="font-normal p-3 bg-white w-24 rounded-xl text-slate-950 hover:bg-black hover:text-white hover:border"
          onClick={handleClick}
        >
          Next page
        </button>
      </div>
    </div>
  );
}
