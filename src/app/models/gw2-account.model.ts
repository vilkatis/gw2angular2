export interface Gw2Account {
    id: string;
    name: string;
    age: number;
    world: number;
    guilds: string[];
    guild_leader: string[];
    created: Date;
    access: string;
    commander: boolean;
    fractal_level: number;
    daily_ap: number;
    monthly_ap: number;
    wvw_rank: number;
}

export const initialGw2AccountState: Gw2Account = {
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
};
