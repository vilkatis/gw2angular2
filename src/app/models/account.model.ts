export interface Account {
    id: string,
    name: string,
    world: number,
    commander: boolean,
    guilds: string[],
    created: Date,
    access: string
}
