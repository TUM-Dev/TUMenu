import { FoodPlace } from "../types/FoodPlace";

export default async function getPathIds() {
    const foodPlaces: FoodPlace[] = await (
        await fetch('https://tum-dev.github.io/eat-api/enums/canteens.json')
    ).json()
    return foodPlaces.map(foodPlace => ({
        id: foodPlace.canteen_id,
    }));
}