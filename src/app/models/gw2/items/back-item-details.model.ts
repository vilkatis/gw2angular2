import { InfusionSlots } from './infusion-slots.details';
import { InfixUpgrade } from './infix-upgrade.model';
export interface BackItemDetails {
  infusion_slots: InfusionSlots[];
  infix_upgrade?: InfixUpgrade;
  suffix_item_id?: number;
  secondary_suffix_item_id: string;
  stat_choices?: string[];
}
