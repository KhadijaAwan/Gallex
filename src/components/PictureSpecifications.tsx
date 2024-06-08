import type { PictureSpecs } from "@/model/schema"
import Image from "next/image"

export default function PictureSpecifications({ picture }: { picture: PictureSpecs }) {
    const pictureHeightRatio = picture.height / picture.width
    const pictureHeight = Math.ceil(250 * pictureHeightRatio)
    const photoSpans = Math.ceil(pictureHeight / 10) + 1

    return (
        <div className="w-[250px] justify-self-center"
            style={{ gridRow: `span ${photoSpans}` }}
        >
            <div className="rounded-xl overflow-hidden group grid place-content-center">
                <Image
                    src={picture.src.large}
                    alt={picture.alt}
                    width={picture.width}
                    height={picture.height}
                    sizes="250px"
                    placeholder="blur"
                    blurDataURL={picture.blurredDataUrl}
                    className="group-hover:opacity-80"
                />
            </div>
        </div>
    )
}