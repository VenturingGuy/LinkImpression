import type { ReactElement } from "react";
import type { Page } from "../../../types/page";
import type { Block } from "../../../types/block";
import BlockRenderer from "../../BlockRenderer";
import "./BasePage.scss";

export default function BasePage(page: Page): ReactElement {
    return (
        <div className="base-page">
            {page.blocks.map((block: Block) => (
                <BlockRenderer key={block.id} {...block}/>
            ))}
        </div>
    )
}