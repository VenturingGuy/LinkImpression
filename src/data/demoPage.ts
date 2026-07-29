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
import blueskyIcon from "../Assets/bluesky-icon.webp";

const demoLinks = [
    {
        href: "https://throne.com/wildwesson",
        icon: throneIcon,
        id: "throne",
        text: "Throne Wishlist",
        title: "Throne",
    },
    {
        href: "https://twitter.com/WildWesson",
        icon: twitterIcon,
        id: "twitter",
        text: "Twitter",
        title: "Twitter",
    },
    {
        href: "https://www.twitch.tv/wildwesson",
        icon: twitchIcon,
        id: "twitch",
        text: "Twitch",
        title: "Twitch",
    },
    {
        href: "https://youtube.com/@WildWesson",
        icon: youtubeIcon,
        id: "youtube",
        text: "YouTube",
        title: "YouTube",
    },
    {
        href: "https://discord.com/invite/dQz3xSFCd",
        icon: discordIcon,
        id: "discord",
        text: "Discord Server!",
        title: "Discord",
    },
    {
        href: "https://www.tiktok.com/@wildwessonwyatt",
        icon: tiktokIcon,
        id: "tiktok",
        text: "TikTok",
        title: "TikTok",
    },
    {
        href: "https://bsky.app/profile/wildwesson.bsky.social",
        icon: blueskyIcon,
        id: "bluesky",
        text: "Bluesky",
        title: "Bluesky",
    },
    {
        href: "https://www.instagram.com/wildwessontv/",
        icon: instagramIcon,
        id: "instagram",
        text: "Instagram",
        title: "Instagram",
    },
    {
        href: "https://www.facebook.com/profile.php?id=61566549357444",
        icon: facebookIcon,
        id: "facebook",
        text: "Facebook",
        title: "Facebook",
    }
]

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
            headerLinks: demoLinks,
            id: "header",
            title: "WildWesson",
            subtitle: "An adventurer from out of town who wants to explore the world! 🕹️Variety VTuber | Let's go on adventures together!",
        },
        {
            id: "divider",
            blockType: "Divider"
        },
        {
            id: "links",
            blockType: "Links",
            links: demoLinks
        },
    ],
}