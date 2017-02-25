import { InfixUpgrade } from './infix-upgrade.model';
import { InfusionSlots } from './infusion-slots.details';
export interface ArmorDetails {
  type: string;
  weight_class: string;
  defense: number;
  infusion_slots: InfusionSlots[];
  infix_upgrade?: InfixUpgrade;
  suffix_item_id?: number;
  stat_choices?: string[];
}
