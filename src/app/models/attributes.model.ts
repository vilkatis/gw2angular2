export interface Attributes {
    AgonyResistance?: number;
    BoonDuration?: number;
    ConditionDamage?: number;
    ConditionDuration?: number;
    CritDamage?: number;
    Healing?: number;
    Power?: number;
    Precision?: number;
    Toughness?: number;
    Vitality?: number;
}

export const initialAttributesState: Attributes = {
    AgonyResistance: 1,
    BoonDuration: 1,
    ConditionDamage: 1,
    ConditionDuration: 1,
    CritDamage: 1,
    Healing: 1,
    Power: 1,
    Precision: 1,
    Toughness: 1,
    Vitality: 1,
};
