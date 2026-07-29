import type { ReactElement } from 'react';
import type { BlockLink } from "../../types/block"

export default function HeaderLink(link: BlockLink): ReactElement {
    if (link.icon) {
        return (
            <button onClick={() => window.open(link.href, "_blank")}>
                <img src={link.icon} alt={link.text} />
            </button>
        );
    } 
    return <></>;
}