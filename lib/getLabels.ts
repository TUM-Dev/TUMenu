import { Labels } from "../types/Labels"

export default async function getLabels() {
    const labels: Labels[] = await (
        await fetch('https://tum-dev.github.io/eat-api/enums/labels.json')
    ).json()
    return labels
}