import type { Page } from "../types/page";
const giftalkGif = "/favicon.svg";
const throneIcon = "/favicon.svg";
const twitterIcon = "/favicon.svg";
const twitchIcon = "/favicon.svg";
const youtubeIcon = "/favicon.svg";
const discordIcon = "/favicon.svg";
const tiktokIcon = "/favicon.svg";
const instagramIcon = "/favicon.svg";
const facebookIcon = "/favicon.svg";

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