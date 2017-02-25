import { Attributes } from './item-attributes.model';

export interface Stats {
    id: number;
    name?: string;
    attributes: Attributes;
}
