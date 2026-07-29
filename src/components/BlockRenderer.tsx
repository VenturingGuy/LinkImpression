import type { Block } from "../types/block"
import HeaderBlock from "./Header/HeaderBlock"
import TextBlock from "./TextBlock"
import DividerBlock from "./DividerBlock"
import LinkBlock from "./LinkBlock"
import type { JSX } from "react/jsx-runtime"

export default function BlockRenderer(block: Block): JSX.Element {
  switch (block.blockType) {
    case "Header":
        return <HeaderBlock {...block} />
    case "Text":
        return <TextBlock {...block} />
    case "Divider":
        return <DividerBlock {...block} />
    case "Links":
        return <LinkBlock {...block} />
    default:
        return <></>
  }
}