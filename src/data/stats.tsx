import { BsBarChartFill, BsFillStarFill } from "react-icons/bs";
import { PiGlobeFill } from "react-icons/pi";

import { IStats } from "@/types";

export const stats: IStats[] = [
    {
        title: "20M+",
        icon: <BsBarChartFill size={34} className="text-blue-500" />,
        description: "Transazioni elaborate in modo sicuro ogni giorno, con statistiche in tempo reale."
    },
    {
        title: "5.0",
        icon: <BsFillStarFill size={34} className="text-yellow-500" />,
        description: "Valutazione media, mantenuta costantemente su tutti gli store."
    },
    {
        title: "200+ ",
        icon: <PiGlobeFill size={34} className="text-green-600" />,
        description: "Istituti finanziari integrati senza sforzo, per gestire tutti i tuoi conti in un unico posto."
    }
];