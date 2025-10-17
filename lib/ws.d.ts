import { Adapter, Context, Schema } from '@satorijs/core';
import { DiscordBot } from './bot';
import type { WebSocket } from '@satorijs/protocol';
export declare class WsClient<C extends Context = Context> extends Adapter.WsClient<C, DiscordBot<C>> {
    _d: number;
    _ping: WeakMap<WebSocket, NodeJS.Timeout>;
    _sessionId: string;
    _resumeUrl?: string;
    _lastHeartbeatAck: boolean;
    responseTimeout: number;
    prepare(): Promise<globalThis.WebSocket>;
    heartbeat(socket: WebSocket): void;
    accept(): void;
}
export declare namespace WsClient {
    interface Options extends Adapter.WsClientConfig {
        intents?: number;
    }
    const Options: Schema<Options>;
}
