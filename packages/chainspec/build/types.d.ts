export declare type Telemetry = [string, number];
export interface Chainspec {
    bootNodes: string[];
    id: string;
    genesis: {
        raw: Record<string, string>;
    };
    genesisRoot?: string;
    name: string;
    properties: null | Record<string, any>;
    protocolId: string | null;
    telemetryUrl?: string | null;
    telemetryEndpoints?: Telemetry[];
}
