import { FoodPlaceMenu } from "../types/FoodPlaceMenu";

export default async function getFoodPlace(locale: string, id: string) {
    let foodPlaceMenu: FoodPlaceMenu;
    if (locale === 'de') {
        foodPlaceMenu = await (
            await fetch(`https://tum-dev.github.io/eat-api/${id}/combined/combined.json`)
        ).json()
    } else {
        foodPlaceMenu = await (
            await fetch(`https://tum-dev.github.io/eat-api/en/${id}/combined/combined.json`)
        ).json()
    }
    return foodPlaceMenu
}