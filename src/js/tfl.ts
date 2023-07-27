import axios from "axios";

const TFL_API_URL_BASE = "https://api.tfl.gov.uk";
const TFL_API_APP_KEY = "7a0dfab7fa1d492e954ba4626e66539b"

export interface Departure {
    index: number;
    destination: string;
    time: string;
    minutes: number;
}

export interface Line {
    id: string,
    name: string,
}

export interface Station {
    id: string,
    name: string,
}

export async function getDepartures(lineId: string, stopId: string): Array<Departure> {
    const data = await axios
        .get(TFL_API_URL_BASE + "/Line/" + lineId + "/Arrivals/"+ stopId + "?app_key=" + TFL_API_APP_KEY)
        .catch(() => {
            console.error("could not get departures")
        });
    const departures = data.data
        .sort((a, b) => a.timeToStation - b.timeToStation)
        .map((tflPrediction, index) => ({
            index: index + 1,
            destination: tflPrediction.towards,
            time: transformTimeToStation(tflPrediction.timeToStation),
            minutes: tflPrediction.timeToStation / 60,
        }))
        .slice(0, 3);
    return departures
}

export async function getLines() {
    const data = await axios
        .get(TFL_API_URL_BASE + "/Line/Mode/tube?app_key=" + TFL_API_APP_KEY)
        .catch(() => {
            console.error("could not get lines");
        });
    return data.data
        .map(tflLine => ({
            id: tflLine.id,
            name: tflLine.name,
        }));
}

export async function getStops(lineId: string) {
    const data = await axios
        .get(TFL_API_URL_BASE + "/Line/" + lineId + "/StopPoints?app_key=" + TFL_API_APP_KEY)
        .catch(() => {
            console.error("could not get stops");
        });
    return data.data
        .map(tflStopPoint => ({
            id: tflStopPoint.id,
            name: tflStopPoint.commonName.replace("Underground Station", "").trim(),
        }));
}

function transformTimeToStation(timeToStation: number): String {
    const minutes = timeToStation / 60;
    const truncatedMinutes = Math.floor(minutes)
    return truncatedMinutes == 0 ? "Due" : truncatedMinutes + " min";
}