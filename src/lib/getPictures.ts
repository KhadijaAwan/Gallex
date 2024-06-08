import type { PicSchema } from "@/model/schema"
import { PictureSchema } from "@/model/schema"

const authString = process.env.PEXELS_API_KEY as string;

export default async function getPictures(url: string): Promise<PicSchema | undefined> {
    try {
        const response = await fetch(url, {
            headers: {
                Authorization: authString,
            }
        })

        if (!response.ok) throw new Error("Error in Receiving Images!\n")

        const totalPictures: PicSchema = await response.json();
        const getData = PictureSchema.parse(totalPictures);

        if (getData.total_results === 0) return undefined;
        return getData;

    } catch (error) {
        console.log(error)
    }
}