import type { ReactElement } from "react";
import type { DividerBlock } from "../types/block";

export default function DividerBlock(block: DividerBlock): ReactElement {
    void block;
    return (
        <div className="divider">
            <hr />
        </div>
    )
}