import { initialAttributesState } from './attributes.model';
import { Attributes } from '../models';

export interface Stats {
    id: number;
    name?: string;
    attributes: Attributes;
}

export const initialStatsState: Stats = {
    id: 1,
    name: '',
    attributes: initialAttributesState,
};
