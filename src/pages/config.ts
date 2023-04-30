type GameScene = {
    title: string;
    path: string;
}

type GameScenes = Record<string, GameScene>

export const gameScenes: GameScenes = {
    "index": {
        title: "игра",
        path: "/"
    },
    "shop": {
        title: "Магазин",
        path: "/shop"
    }
}
