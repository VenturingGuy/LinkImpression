import type { Page } from "../types/page";
import giftalkGif from "../Assets/giftalk.gif";
import throneIcon from "../Assets/throne_icon.png";
import twitterIcon from "../Assets/social-twitter.svg";
import twitchIcon from "../Assets/logo-twitch.svg";
import youtubeIcon from "../Assets/youtube-icon.svg";
import discordIcon from "../Assets/discord-icon.svg";
import tiktokIcon from "../Assets/tiktok.svg";
import instagramIcon from "../Assets/instagram-logo.svg";
import facebookIcon from "../Assets/facebook-logo.svg";

export const demoPage: Page = {
    id: "demo",
    title: "Demo Page",
    theme: {
        primaryColor: "#000000",
        backgroundColor: "#ffffff",
        textColor: "#000000",
    },
    blocks: [
        {
            avatar: giftalkGif,
            blockType: "Header",
            headerLinks: [
                {
                    href: "https://throne.com/wildwesson",
                    icon: throneIcon,
                    id: "throne",
                    text: "WildWesson - Wishlist | Throne",
                    title: "Throne",
                },
                {
                    href: "https://twitter.com/WildWesson",
                    icon: twitterIcon,
                    id: "twitter",
                    text: "WildWesson - Twitter",
                    title: "Twitter",
                },
                {
                    href: "https://www.twitch.tv/wildwesson",
                    icon: twitchIcon,
                    id: "twitch",
                    text: "WildWesson - Twitch",
                    title: "Twitch",
                },
                {
                    href: "https://youtube.com/@WildWesson",
                    icon: youtubeIcon,
                    id: "youtube",
                    text: "WildWesson - YouTube",
                    title: "YouTube",
                },
                {
                    href: "https://discord.com/invite/dQz3xSFCd",
                    icon: discordIcon,
                    id: "discord",
                    text: "WildWesson - Discord",
                    title: "Discord",
                },
                {
                    href: "https://www.tiktok.com/@wildwessonwyatt",
                    icon: tiktokIcon,
                    id: "tiktok",
                    text: "WildWesson - TikTok",
                    title: "TikTok",
                },
                {
                    href: "https://www.instagram.com/wildwessontv/",
                    icon: instagramIcon,
                    id: "instagram",
                    text: "WildWesson - Instagram",
                    title: "Instagram",
                },
                {
                    href: "https://www.facebook.com/profile.php?id=61566549357444",
                    icon: facebookIcon,
                    id: "facebook",
                    text: "WildWesson - Facebook",
                    title: "Facebook",
                }
            ],
            id: "header",
            title: "WildWesson",
            subtitle: "An adventurer from out of town who wants to explore the world! 🕹️Variety VTuber | Let's go on adventures together!",
        },
        {
            id: "links",
            blockType: "Links",
            links: [
                {
                id: "yt",
                text: "YouTube",
                title: "WildWesson YouTube Channel",
                href: "https://youtube.com/@WildWesson"
                },
                {
                id: "tw",
                text: "Twitch",
                href: "https://twitch.tv/WildWesson",
                title: "WildWesson Twitch Channel"
                }
            ]
        },
        {
            id: "divider",
            blockType: "Divider"
        },
        {
            id: "about",
            blockType: "Text",
            text: "Currently playing Lobotomy Corporation."
        }
    ],
}