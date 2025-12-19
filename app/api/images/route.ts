import { NextResponse } from 'next/server';
import cloudinary from '@/lib/cloudinary';

export async function GET() {
  try {
    const folder = process.env.CLOUDINARY_FOLDER || "vision-friend";
    const result = await cloudinary.search
      .expression(`folder:${folder}/*`)
      .sort_by('created_at', 'desc')
      .max_results(50)
      .execute();

    return NextResponse.json(result.resources);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: 'Failed to fetch images' },
      { status: 500 }
    );
  }
}