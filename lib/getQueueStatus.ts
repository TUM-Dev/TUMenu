import { Queue } from "../types/Queue";

export default async function getQueueStatus(path: string) {
    const queue: Queue = await (
        await fetch(path)
    ).json()
    return queue;
}