import { Attributes } from '../models';

export interface Stats {
    id: number;
    name?: string;
    attributes: Attributes;
}