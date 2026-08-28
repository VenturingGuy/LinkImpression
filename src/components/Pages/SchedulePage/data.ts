export type ScheduleEntry = {
    date: number;
    day: string;
    streamingOrNot: boolean;
    title: string;
    time: string;
    collab?: boolean;
}

export const scheduleData: ScheduleEntry[] = [
    {
        date: 10,
        day: "Monday",
        streamingOrNot: false,
        title: "No Stream",
        time: "",
    },
    {
        date: 11,
        day: "Tuesday",
        streamingOrNot: true,
        title: "Promise Mascot Agency",
        time: "1:30 PM PST",
    },
    {
        date: 12,
        day: "Wednesday",
        streamingOrNot: true,
        title: "Read With Me!",
        time: "1:30 PM PST",
    },
    {
        date: 13,
        day: "Thursday",
        streamingOrNot: true,
        title: "Promise Mascot Agency",
        time: "1:30 PM PST",
    },
    {
        date: 14,
        day: "Friday",
        streamingOrNot: true,
        title: "Elder Scrolls IV: Oblivion",
        time: "6 PM PST",
    },
    {
        date: 15,
        day: "Saturday",
        streamingOrNot: true,
        title: "Zenless Zone Zero",
        time: "6 PM PST",
    },
    {
        date: 16,
        day: "Sunday",
        streamingOrNot: false,
        title: "No Stream",
        time: "",
    }
]