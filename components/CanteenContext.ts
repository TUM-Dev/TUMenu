import { createContext } from 'react'
import { FoodPlace } from '../types/FoodPlace';
import { FoodPlaceMenu } from '../types/FoodPlaceMenu';
import { Labels } from '../types/Labels';
import { Queue } from '../types/Queue';

interface CanteenContextProps {
    foodPlaceMenu: FoodPlaceMenu;
    foodPlaceData: FoodPlace;
    labels: Labels[];
    queueData: Queue;
}

const CanteenContext = createContext<CanteenContextProps>({
    foodPlaceMenu: {} as FoodPlaceMenu,
    foodPlaceData: {} as FoodPlace,
    labels: [],
    queueData: {} as Queue,
})


export default CanteenContext