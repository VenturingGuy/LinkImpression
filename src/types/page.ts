import type { Block } from "./block";

export type Page = {
    id: string
    title: string
    slug?: string
    theme: {
        primaryColor: string
        backgroundColor: string
        textColor: string
    }
    blocks: Block[]
}