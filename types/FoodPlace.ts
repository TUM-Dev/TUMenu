export type FoodPlace = {
    enum_name: string,
    name: string,
    location: MensaLocation
    canteen_id: string,
    queue_status: string | null,
    open_hours: OpeningHoursType
}

export type OpeningHoursType = {
    mon: {
        start: string,
        end: string
    },
    tue: {
        start: string,
        end: string
    },
    wed: {
        start: string,
        end: string
    },
    thu: {
        start: string,
        end: string
    },
    fri: {
        start: string,
        end: string
    }
}

export const daysArr = ['mon', 'tue', 'wed', 'thu', 'fri']

export type MensaLocation = {
    address: string,
    latitude: number,
    longitude: number
}