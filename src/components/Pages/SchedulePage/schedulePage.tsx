import type { ReactElement } from "react"
import "./schedulePage.scss"

function ScheduleTop(): ReactElement {
    return(
        <svg
            className="schedule-background"
            viewBox="0 0 1920 110"
            preserveAspectRatio="none"
            aria-hidden="true"
        >
        <path
            d="
                M 0 0
                H 1920
                V 110
                H 1370
                C 1350 110, 1335 105, 1315 92
                L 1285 72
                C 1268 61, 1250 60, 1225 60
                H 320
                C 295 60, 275 64, 255 78
                L 220 103
                C 210 109, 200 110, 190 110
                H 0
                Z
            "
            fill="#515AC0"
        />
        </svg>
    );
}

function ScheduleBottom(): ReactElement {
    return(
        <svg
            className="schedule-background__mirrored"
            viewBox="0 0 1920 110"
            preserveAspectRatio="none"
            aria-hidden="true"
        >
        <path
            d="
                M 0 0
                H 1920
                V 110
                H 1370
                C 1350 110, 1335 105, 1315 92
                L 1285 72
                C 1268 61, 1250 60, 1225 60
                H 320
                C 295 60, 275 64, 255 78
                L 220 103
                C 210 109, 200 110, 190 110
                H 0
                Z
            "
            fill="#7C83DA"
        />
        </svg>
    );
}

export default function SchedulePage(): ReactElement {
    return(
    <div className="schedule-page">
        <ScheduleTop />
        <ScheduleBottom />
    </div>
    );
}

