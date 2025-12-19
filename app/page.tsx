import { getImages } from './actions/getImages';

export const revalidate = 5; // 页面缓存 60 秒

export default async function Home() {
  const images = await getImages();

  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-6">Vision Friend</h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {images.map((img: any) => (
          <img
            key={img.public_id}
            src={img.secure_url}
            alt=""
            className="rounded shadow-sm"
          />
        ))}
      </div>
    </main>
  );
}