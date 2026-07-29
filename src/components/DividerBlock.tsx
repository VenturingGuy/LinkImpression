import type { ReactElement } from "react";
import type { DividerBlock } from "../types/block";

export default function DividerBlock(block: DividerBlock): ReactElement {
    return (
        <div className="divider">
            <hr />
        </div>
    )
}