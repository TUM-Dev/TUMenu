import { FoodPlace } from "../types/FoodPlace"

export default async function getFoodPlaces() {
    const foodPlaces: FoodPlace[] = await (
        await fetch('https://tum-dev.github.io/eat-api/enums/canteens.json')
    ).json()
    return foodPlaces
}