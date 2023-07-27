export function fill(length: Number): Array<Number> {
    return Array(length).fill().map((_, i) => i + 1);
}