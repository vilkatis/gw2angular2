import { Gw2State } from './gw2-state';
import { Item } from './../models/item.model';
import { Account } from './../models/account.model';

export interface Gw2State {

    account: Account;
    bankItems: Item[];

}

export const initialGw2State: Gw2State = {
    account: {
        id: '',
        name: '',
        age: 0,
        world: 0,
        guilds: [''],
        guild_leader: [''],
        created: new Date(Date.now()),
        access: '',
        commander: true,
        fractal_level: 0,
        daily_ap: 0,
        monthly_ap: 0,
        wvw_rank: 0
    },
    bankItems: [{id: 12345, count: 1}]
}

