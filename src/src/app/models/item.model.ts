import { Stats } from '../models';

export interface Item {
    id: number;
    count: number;
    skin?: number;
    infusions?: Array<number>;
    upgrades?: Array<number>;
    charges?: number;
    binding?: string;
    bound_to?: string;
    stats?: Stats;
}
