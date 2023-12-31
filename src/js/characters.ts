// 5*7 dot-matrix pixel values for ASCII characters
export const characterMap = {
    "20": {
        character: "Space",
        rows: [0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00]
    },
    "21": {character: "!", rows: [0x04, 0x04, 0x04, 0x04, 0x04, 0x00, 0x04]},
    "22": {character: '"', rows: [0x09, 0x09, 0x12, 0x00, 0x00, 0x00, 0x00]},
    "23": {character: "#", rows: [0x0a, 0x0a, 0x1f, 0x0a, 0x1f, 0x0a, 0x0a]},
    "24": {character: "$", rows: [0x04, 0x0f, 0x14, 0x0e, 0x05, 0x1e, 0x04]},
    "25": {character: "%", rows: [0x19, 0x19, 0x02, 0x04, 0x08, 0x13, 0x13]},
    "26": {character: "&", rows: [0x04, 0x0a, 0x0a, 0x0a, 0x15, 0x12, 0x0d]},
    "27": {character: "'", rows: [0x04, 0x04, 0x08, 0x00, 0x00, 0x00, 0x00]},
    "28": {character: "(", rows: [0x02, 0x04, 0x08, 0x08, 0x08, 0x04, 0x02]},
    "29": {character: ")", rows: [0x08, 0x04, 0x02, 0x02, 0x02, 0x04, 0x08]},
    "2a": {character: "*", rows: [0x04, 0x15, 0x0e, 0x1f, 0x0e, 0x15, 0x04]},
    "2b": {character: "+", rows: [0x00, 0x04, 0x04, 0x1f, 0x04, 0x04, 0x00]},
    "2c": {character: ",", rows: [0x00, 0x00, 0x00, 0x00, 0x04, 0x04, 0x08]},
    "2d": {character: "-", rows: [0x00, 0x00, 0x00, 0x1f, 0x00, 0x00, 0x00]},
    "2e": {character: ".", rows: [0x00, 0x00, 0x00, 0x00, 0x00, 0x0c, 0x0c]},
    "2f": {character: "/", rows: [0x01, 0x01, 0x02, 0x04, 0x08, 0x10, 0x10]},
    "30": {character: "0", rows: [0x0e, 0x11, 0x13, 0x15, 0x19, 0x11, 0x0e]},
    "31": {character: "1", rows: [0x04, 0x0c, 0x04, 0x04, 0x04, 0x04, 0x0e]},
    "32": {character: "2", rows: [0x0e, 0x11, 0x01, 0x02, 0x04, 0x08, 0x1f]},
    "33": {character: "3", rows: [0x0e, 0x11, 0x01, 0x06, 0x01, 0x11, 0x0e]},
    "34": {character: "4", rows: [0x02, 0x06, 0x0a, 0x12, 0x1f, 0x02, 0x02]},
    "35": {character: "5", rows: [0x1f, 0x10, 0x1e, 0x01, 0x01, 0x11, 0x0e]},
    "36": {character: "6", rows: [0x06, 0x08, 0x10, 0x1e, 0x11, 0x11, 0x0e]},
    "37": {character: "7", rows: [0x1f, 0x01, 0x02, 0x04, 0x08, 0x08, 0x08]},
    "38": {character: "8", rows: [0x0e, 0x11, 0x11, 0x0e, 0x11, 0x11, 0x0e]},
    "39": {character: "9", rows: [0x0e, 0x11, 0x11, 0x0f, 0x01, 0x02, 0x0c]},
    "3a": {character: ":", rows: [0x00, 0x0c, 0x0c, 0x00, 0x0c, 0x0c, 0x00]},
    "3b": {character: ";", rows: [0x00, 0x0c, 0x0c, 0x00, 0x0c, 0x04, 0x08]},
    "3c": {character: "<", rows: [0x02, 0x04, 0x08, 0x10, 0x08, 0x04, 0x02]},
    "3d": {character: "=", rows: [0x00, 0x00, 0x1f, 0x00, 0x1f, 0x00, 0x00]},
    "3e": {character: ">", rows: [0x08, 0x04, 0x02, 0x01, 0x02, 0x04, 0x08]},
    "3f": {character: "?", rows: [0x0e, 0x11, 0x01, 0x02, 0x04, 0x00, 0x04]},
    "40": {character: "@", rows: [0x0e, 0x11, 0x17, 0x15, 0x17, 0x10, 0x0f]},
    "41": {character: "A", rows: [0x04, 0x0a, 0x11, 0x11, 0x1f, 0x11, 0x11]},
    "42": {character: "B", rows: [0x1e, 0x11, 0x11, 0x1e, 0x11, 0x11, 0x1e]},
    "43": {character: "C", rows: [0x0e, 0x11, 0x10, 0x10, 0x10, 0x11, 0x0e]},
    "44": {character: "D", rows: [0x1e, 0x09, 0x09, 0x09, 0x09, 0x09, 0x1e]},
    "45": {character: "E", rows: [0x1f, 0x10, 0x10, 0x1c, 0x10, 0x10, 0x1f]},
    "46": {character: "F", rows: [0x1f, 0x10, 0x10, 0x1f, 0x10, 0x10, 0x10]},
    "47": {character: "G", rows: [0x0e, 0x11, 0x10, 0x10, 0x13, 0x11, 0x0f]},
    "48": {character: "H", rows: [0x11, 0x11, 0x11, 0x1f, 0x11, 0x11, 0x11]},
    "49": {character: "I", rows: [0x0e, 0x04, 0x04, 0x04, 0x04, 0x04, 0x0e]},
    "4a": {character: "J", rows: [0x1f, 0x02, 0x02, 0x02, 0x02, 0x12, 0x0c]},
    "4b": {character: "K", rows: [0x11, 0x12, 0x14, 0x18, 0x14, 0x12, 0x11]},
    "4c": {character: "L", rows: [0x10, 0x10, 0x10, 0x10, 0x10, 0x10, 0x1f]},
    "4d": {character: "M", rows: [0x11, 0x1b, 0x15, 0x11, 0x11, 0x11, 0x11]},
    "4e": {character: "N", rows: [0x11, 0x11, 0x19, 0x15, 0x13, 0x11, 0x11]},
    "4f": {character: "O", rows: [0x0e, 0x11, 0x11, 0x11, 0x11, 0x11, 0x0e]},
    "50": {character: "P", rows: [0x1e, 0x11, 0x11, 0x1e, 0x10, 0x10, 0x10]},
    "51": {character: "Q", rows: [0x0e, 0x11, 0x11, 0x11, 0x15, 0x12, 0x0d]},
    "52": {character: "R", rows: [0x1e, 0x11, 0x11, 0x1e, 0x14, 0x12, 0x11]},
    "53": {character: "S", rows: [0x0e, 0x11, 0x10, 0x0e, 0x01, 0x11, 0x0e]},
    "54": {character: "T", rows: [0x1f, 0x04, 0x04, 0x04, 0x04, 0x04, 0x04]},
    "55": {character: "U", rows: [0x11, 0x11, 0x11, 0x11, 0x11, 0x11, 0x0e]},
    "56": {character: "V", rows: [0x11, 0x11, 0x11, 0x11, 0x11, 0x0a, 0x04]},
    "57": {character: "W", rows: [0x11, 0x11, 0x11, 0x15, 0x15, 0x1b, 0x11]},
    "58": {character: "X", rows: [0x11, 0x11, 0x0a, 0x04, 0x0a, 0x11, 0x11]},
    "59": {character: "Y", rows: [0x11, 0x11, 0x0a, 0x04, 0x04, 0x04, 0x04]},
    "5a": {character: "Z", rows: [0x1f, 0x01, 0x02, 0x04, 0x08, 0x10, 0x1f]},
    "5b": {character: "[", rows: [0x0e, 0x08, 0x08, 0x08, 0x08, 0x08, 0x0e]},
    "5c": {character: "\\", rows: [0x10, 0x10, 0x08, 0x04, 0x02, 0x01, 0x01]},
    "5d": {character: "]", rows: [0x0e, 0x02, 0x02, 0x02, 0x02, 0x02, 0x0e]},
    "5e": {character: "^", rows: [0x04, 0x0a, 0x11, 0x00, 0x00, 0x00, 0x00]},
    "5f": {character: "_", rows: [0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x1f]},
    "60": {character: "`", rows: [0x04, 0x04, 0x02, 0x00, 0x00, 0x00, 0x00]},
    "61": {character: "a", rows: [0x00, 0x0e, 0x01, 0x0d, 0x13, 0x13, 0x0d]},
    "62": {character: "b", rows: [0x10, 0x10, 0x10, 0x1c, 0x12, 0x12, 0x1c]},
    "63": {character: "c", rows: [0x00, 0x00, 0x00, 0x0e, 0x10, 0x10, 0x0e]},
    "64": {character: "d", rows: [0x01, 0x01, 0x01, 0x07, 0x09, 0x09, 0x07]},
    "65": {character: "e", rows: [0x00, 0x00, 0x0e, 0x11, 0x1f, 0x10, 0x0f]},
    "66": {character: "f", rows: [0x06, 0x09, 0x08, 0x1c, 0x08, 0x08, 0x08]},
    "67": {character: "g", rows: [0x0e, 0x11, 0x13, 0x0d, 0x01, 0x01, 0x0e]},
    "68": {character: "h", rows: [0x10, 0x10, 0x10, 0x16, 0x19, 0x11, 0x11]},
    "69": {character: "i", rows: [0x00, 0x04, 0x00, 0x0c, 0x04, 0x04, 0x0e]},
    "6a": {character: "j", rows: [0x02, 0x00, 0x06, 0x02, 0x02, 0x12, 0x0c]},
    "6b": {character: "k", rows: [0x10, 0x10, 0x12, 0x14, 0x18, 0x14, 0x12]},
    "6c": {character: "l", rows: [0x0c, 0x04, 0x04, 0x04, 0x04, 0x04, 0x04]},
    "6d": {character: "m", rows: [0x00, 0x00, 0x0a, 0x15, 0x15, 0x11, 0x11]},
    "6e": {character: "n", rows: [0x00, 0x00, 0x16, 0x19, 0x11, 0x11, 0x11]},
    "6f": {character: "o", rows: [0x00, 0x00, 0x0e, 0x11, 0x11, 0x11, 0x0e]},
    "70": {character: "p", rows: [0x00, 0x1c, 0x12, 0x12, 0x1c, 0x10, 0x10]},
    "71": {character: "q", rows: [0x00, 0x07, 0x09, 0x09, 0x07, 0x01, 0x01]},
    "72": {character: "r", rows: [0x00, 0x00, 0x16, 0x19, 0x10, 0x10, 0x10]},
    "73": {character: "s", rows: [0x00, 0x00, 0x0f, 0x10, 0x0e, 0x01, 0x1e]},
    "74": {character: "t", rows: [0x08, 0x08, 0x1c, 0x08, 0x08, 0x09, 0x06]},
    "75": {character: "u", rows: [0x00, 0x00, 0x11, 0x11, 0x11, 0x13, 0x0d]},
    "76": {character: "v", rows: [0x00, 0x00, 0x11, 0x11, 0x11, 0x0a, 0x04]},
    "77": {character: "w", rows: [0x00, 0x00, 0x11, 0x11, 0x15, 0x15, 0x0a]},
    "78": {character: "x", rows: [0x00, 0x00, 0x11, 0x0a, 0x04, 0x0a, 0x11]},
    "79": {character: "y", rows: [0x00, 0x11, 0x11, 0x0f, 0x01, 0x11, 0x0e]},
    "7a": {character: "z", rows: [0x00, 0x00, 0x1f, 0x02, 0x04, 0x08, 0x1f]},
    "7b": {character: "{", rows: [0x06, 0x08, 0x08, 0x10, 0x08, 0x08, 0x06]},
    "7c": {character: "|", rows: [0x04, 0x04, 0x04, 0x00, 0x04, 0x04, 0x04]},
    "7d": {character: "}", rows: [0x0c, 0x02, 0x02, 0x01, 0x02, 0x02, 0x0c]},
    "7e": {character: "~", rows: [0x08, 0x15, 0x02, 0x00, 0x00, 0x00, 0x00]},
    "7f": {character: "DEL", rows: [0x1f, 0x1f, 0x1f, 0x1f, 0x1f, 0x1f, 0x1f]}
};
