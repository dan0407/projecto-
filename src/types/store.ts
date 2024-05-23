export type Observer = ({ render: () => void } & HTMLElement);

export type AppState = {
    screen: string,
    user: any
}

export enum ScreenActions {
    "NAVIGATE" = "NAVIGATE",
}

export type Actions = ScreenActions;