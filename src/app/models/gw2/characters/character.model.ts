import { Bag } from '../gw2-bag.model';
import { Attributes } from '../itemstats/item-attributes.model';
export interface Character {
  name: string;
  race: string;
  profession: string;
  gender: string;
  level: number;
  guild?: string;
  age: number;
  created: string;
  deaths: number;
  crafting: [
    {
      discipline: string;
      rating: number;
      active: boolean;
    }
    ];
  title?: number;
  backstory: string[];
  wvw_abilities: [
    {
      id: number;
      rank: number;
    }
    ];
  specializations: {
    pve: [
      {
        id: number;
        traits: number[];
      }
      ];
    pvp: [
      {
        id: number;
        traits: number[];
      }
      ];
    wvw: [
      {
        id: number;
        traits: number[];
      }
      ];
  };
  skills: {
    pve: {
      heal: number;
      utilities: number[];
      elite: number;
    };
    pvp: {
      heal: number;
      utilities: number[];
      elite: number;
    };
    wvw: {
      heal: number;
      utilities: number[];
      elite: number;
    }
  };
  equipment: [
    {
      id: number;
      slot: string;
      infusions?: number[];
      upgrades?: number[];
      skin?: number;
      stats: {
        id: number;
        attributes: Attributes;
      };
      charges?: number;
      binding: string;
      bound_to: string;

    }
    ];
  recipes: number[];
  equipment_pvp: {
    amulet: number;
    rune: number;
    sigils: number[];
  };
  training: [
    {
      id: number;
      spent: number;
      done: boolean;
    }
    ];
  bags: Bag[];
}
