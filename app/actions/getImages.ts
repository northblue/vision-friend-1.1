'use server';
import cloudinary from '@/lib/cloudinary';

export async function getImages() {
  const result = await cloudinary.search
    .expression('folder:vision-friend') // 这里是你的 Cloudinary 文件夹
    .sort_by('created_at', 'desc')
    .max_results(50) // 最多 50 张
    .execute();

  return result.resources;
}