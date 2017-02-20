import { initialStatsState } from './stats.model';
import { Stats } from '../models';

export interface Item {
    id: number;
    count: number;
    infusions?: number[];
    upgrades?: number[];
    skin?: number;
    stats?: Stats;
    charges?: number;
    binding?: string;
    bound_to?: string;
}

export const initialItemState: Item = {
    id: 1,
    count: 1,
    infusions: [1],
    upgrades: [1],
    skin: 1,
    stats: initialStatsState,
    charges: 1,
    binding: '',
    bound_to: '',
};
