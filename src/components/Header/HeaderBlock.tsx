import type { ReactElement } from 'react';
import type { HeaderBlock } from "../../types/block"
import HeaderLink from './HeaderLink';
import "./HeaderBlock.scss";

export default function HeaderBlock(block: HeaderBlock): ReactElement {
    return (
        <div className="header-block">
            <div className="header-block__avatar">
                <img src={block.avatar} alt="Avatar" />
            </div>
            <h1>{block.title}</h1>
            <h3>{block.subtitle}</h3>
            <div className="header-block__links">
                {block.headerLinks && block.headerLinks.map((link) => (
                    <div className="header-block__links__link" key={link.id}>
                        <HeaderLink key={link.id} {...link} />
                    </div>
                ))}
            </div>
        </div>
    )
}