import type { ReactElement } from "react";
import type { LinkBlock } from "../../types/block";
import "./LinkBlock.scss";

export default function LinkBlock(block: LinkBlock): ReactElement {
    return (
        <div className="link-block">
            <div className="link-block__content">
                {block.links && block.links.map((link) => (
                    <a className="link-block__content__link" key={link.id} onClick={() => window.open(link.href, "_blank")}>
                        {link.text}
                    </a>
                ))}   
            </div>
        </div>
    )
}