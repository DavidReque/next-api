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
    <div className="gap-5">
      <h1 className="flex justify-center items-center text-2xl font-semibold">Photo details</h1>
      <div className="flex flex-col justify-center items-center gap-4">
        {photo.description && <p>{photo.description}</p>}
        <img className="w-6/12	h-6/12 object-cover hover:opacity-75 m-8" src={photo.urls.small} alt={photo.description} />
        <p className="">{photo.created_at}</p>
        <p>Likes ❤️: {photo.likes}</p>
        <p>Fotographer: {photo.user.name}</p>
      </div>
    </div>
  );
}
