import type { ReactElement } from "react";
import type { TextBlock } from "../types/block";

export default function TextBlock(block: TextBlock): ReactElement {
    return (
        <div id={block.id}></div>
    )
}