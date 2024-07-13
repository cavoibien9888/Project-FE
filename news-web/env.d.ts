/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_SERVER_RSS: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}