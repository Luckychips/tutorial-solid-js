export interface GameIndices {
    game_index: number;
    version: {
        name: string;
        url: string;
    }
}

export interface GameItem {
    item: {
        name: string;
        url: string;
    };
    version_details: {
        rarity: number;
        version: {
            name: string;
            url: string;
        }
    }[];
}