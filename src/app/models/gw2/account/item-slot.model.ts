import { Stats } from '../itemstats/item-stats.model';

export interface ItemSlot {
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

