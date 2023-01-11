import { Queue } from "../types/Queue";

export default async function getQueueStatus(id: string) {
    const queue: Queue = await (
        await fetch(`https://api.tum.app/v1/canteen/headCount/${id}`)
    ).json()
    return queue;
}