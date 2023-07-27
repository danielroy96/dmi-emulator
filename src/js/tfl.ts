import axios from "axios";

const TFL_API_URL_BASE = "https://api.tfl.gov.uk/Line/victoria/Arrivals/940GZZLUSVS";
const TFL_API_APP_KEY = "7a0dfab7fa1d492e954ba4626e66539b"

export interface Departure {
    index: number;
    destination: string;
    time: string;
}

export async function getDepartures(): Array<Departure> {
    const data = await axios.get(TFL_API_URL_BASE + "?app_key=" + TFL_API_APP_KEY)
        .catch(() => {
            console.error("could not get data")
        });
    const departures = data.data
        .sort((a, b) => a.timeToStation - b.timeToStation)
        .map((tflPrediction, index) => ({
            index: index + 1,
            destination: tflPrediction.towards,
            time: transformTimeToStation(tflPrediction.timeToStation)
        }));
    return departures
}

function transformTimeToStation(timeToStation: number): String {
    const minutes = timeToStation / 60;
    const truncatedMinutes = Math.floor(minutes)
    return truncatedMinutes == 0 ? "Due" : truncatedMinutes + " min";
}