const apiKey = process.env.NEXT_PUBLIC_API_KEY;

async function getPhoto(id) {
  const res = await fetch(`https://api.unsplash.com/photos/${id}`, {
    headers: {
      Authorization: `Client-ID ${apiKey}`,
    },
  });
  const data = await res.json();
  return data;
}

export default async function Page({ params }) {
  const photo = await getPhoto(params.id);

  return (
    <div className="flex justify-center">
      <h1>Photo details</h1>
      <div>
        {photo.description && <p>{photo.description}</p>}
        <img src={photo.urls.small} alt={photo.description} />
        <p>Likes ❤️: {photo.likes}</p>
        <p>Fotographer: {photo.user.name}</p>
      </div>
    </div>
  );
}
