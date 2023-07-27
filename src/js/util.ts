export function fill(length: number): Array<number> {
    return Array(length).fill().map((_, i) => i + 1);
}

export function fillBlank(length: number): Array<number> {
    return Array(length).fill().map((_) => 0);
}