import {Departure, getDepartures} from "./tfl";
import {characterMap} from "./characters";

export async function departuresToDmi(departures: Array<Departure>): Array<Array<Array<Number>>> {
    return departures.map(departure => departureToString(departure))
        .map(departureString => stringToDmi(departureString));
}

export function stringToDmi(value: string): Array<Array<number>> {
    return string40Bits(value.padEnd(40).slice(0, 40));
}

function string40Bits(departureString: string): Array<Array<number>> {
    let characterArray = [[], [], [], [], [], [], []];
    for (let i = 0; i < departureString.length; i++) {
        const currentCharacterAscii = departureString.charCodeAt(i).toString(16);
        const characterMappers = characterMap[currentCharacterAscii].rows;
        for (let j = 0; j < characterMappers.length; j ++) {
            const currentRow = characterMappers[j].toString(2).padStart(5, 0);
            for (let k = 0; k < currentRow.length; k++) {
                characterArray[j].push(Number(currentRow[k]));
            }
            characterArray[j].push(0);
        }
    }
    return characterArray;
}

// Example string
// 0  Walthamstow Central             2 min

// Characters are 7px high x 5px wide
// The display will accommodate 40 characters, making it 200px wide
const ROW_TEMPLATE = "[NUMBER] [DESTINATION] [TIME]"

function departureToString(departure: Departure) {
    return ROW_TEMPLATE
        .replace("[NUMBER]", String(departure.index))
        .replace("[DESTINATION]", padDestination(departure.destination))
        .replace("[TIME]", padTime(departure.time));
}

function padDestination(destination: string): string {
  return (destination + " ".repeat(30)).slice(0, 29)
}

function padTime(time: string): string {
    return (time + " ".repeat(10)).slice(0, 8)
}