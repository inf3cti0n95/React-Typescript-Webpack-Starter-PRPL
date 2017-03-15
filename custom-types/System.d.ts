interface System {
    import: (path: string) => Promise<any>
}

declare var System: System

declare function _import<T>(path: string): Promise<T>;


interface Window {
    __CHUNKS: Array<any>
}


declare var window: Window


