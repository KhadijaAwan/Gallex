import { z } from 'zod'

const PictureDisplaySchema = z.object({
    page: z.number(),
    per_page: z.number(),
    prev_page: z.string().optional(),
    next_page: z.string().optional(),
    total_results: z.number(),
})

const PictureSpecsSchema = z.object({
    id: z.number(),
    width: z.number(),
    height: z.number(),
    url: z.string(),
    src: z.object({
        large: z.string(),
    }),
    alt: z.string(),
    blurredDataUrl: z.string().optional(),
})

export const PictureSchema = PictureDisplaySchema.extend({
    photos: z.array(PictureSpecsSchema)
})

export type PictureSpecs = z.infer<typeof PictureSpecsSchema>
export type PicSchema = z.infer<typeof PictureSchema>