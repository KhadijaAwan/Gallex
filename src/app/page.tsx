import getPictures from "@/lib/getPictures";
import type { PicSchema } from "@/model/schema"
import addBlurredDataUrls from "@/lib/getBase64"
import PictureSpecifications from "@/components/PictureSpecifications";

interface PicturesDisplayProps {
  request?: string | undefined
}

export default async function PicturesDisplay({ request }: PicturesDisplayProps) {

  const url = !request
    ? 'https://api.pexels.com/v1/curated'
    : `https://api.pexels.com/v1/search?query=${request}`

  const pictures: PicSchema | undefined = await getPictures(url)

  if (!pictures) return <h2 className="m-4 text-2xl font-bold">No Images Found</h2>

  const blurPictures = await addBlurredDataUrls(pictures);

  return (
    <section className="max-w-6xl mx-auto after:px-1 py-5 grid grid-cols-gallery auto-rows-[10px]">
      {blurPictures.map(pic => (
        <PictureSpecifications key={pic.id} picture={pic} />
      ))}
    </section>
  )
}