export type Block = HeaderBlock | TextBlock | DividerBlock | LinkBlock

type TemplateBlock = {
    blockType: string
    id: string
}

export type HeaderBlock = TemplateBlock & {
    avatar?: string
    blockType: "Header"
    headerLinks?: BlockLink[]
    subtitle?: string
    title: string
}

export type TextBlock = TemplateBlock & {
    text?: string
    blockType: "Text"
}

export type DividerBlock = TemplateBlock & {
    blockType: "Divider"
}

export type BlockLink = {
    href: string
    id: string
    text: string
    title: string
    icon?: string
}

export type LinkBlock = TemplateBlock & {
    links?: BlockLink[]
    blockType: "Links"
}