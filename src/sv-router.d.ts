declare module "sv-router/generated" {
    export const navigate: (path: string) => void;
    export const route: {
        params: object,
        pathname: string,
        state: unknown,
        hash: string,
        meta: object,
    };
    export const p: unknown;
    export const isActive: unknown;
    export const preload: unknown;
}
