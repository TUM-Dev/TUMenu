export type FoodPlaceMenu = {
    version: string,
    canteen_id: string,
    weeks: Weeks[]
}

export type Weeks = {
    number: number,
    year: number,
    days: Days[]
}

export type Days = {
    date: string,
    dishes: Dishes[]
}

export type Dishes = {
    name: string,
    prices: Prices
    labels: string[]
    dish_type: string
}

export type Prices = {
    students: Price,
}

export type Price = {
    base_price: number,
    price_per_unit: number,
    unit: string
}