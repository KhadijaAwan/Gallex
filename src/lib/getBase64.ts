import { getPlaiceholder } from "plaiceholder"
import type { PictureSpecs, PicSchema } from "@/model/schema"

async function getBase64(imageUrl: string) {
    try {
        const response = await fetch(imageUrl)

        if (!response.ok) {
            throw new Error(`Image Retrievel Failed: ${response.status} ${response.statusText}`)
        }
        const buffer = await response.arrayBuffer()

        const { base64 } = await getPlaiceholder(Buffer.from(buffer))
        return base64;
    } catch (error) {
        console.log(error);
    }
}

export default async function addBlurredDataUrls(images: PicSchema): Promise<PictureSpecs[]> {
    const base64Promises = images.photos.map(photo => getBase64(photo.src.large))
    const base64Results = await Promise.all(base64Promises)

    const photosWithBlur: PictureSpecs[] = images.photos.map((photo, i) => {
        photo.blurredDataUrl = base64Results[i];
        return photo;
    })

    return photosWithBlur;
}