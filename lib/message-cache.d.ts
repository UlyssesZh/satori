import type { Universal } from '@satorijs/core';
import type { QQBot } from './bot';
type Metadata = Pick<Universal.Message, 'id' | 'user' | 'member'>;
export declare function cacheMessage(bot: QQBot, channelId: string, isDirect: boolean, message: Metadata, reference: string): void;
export declare function getQuotedMessage(bot: QQBot, channelId: string, isDirect: boolean, reference: string): Metadata | undefined;
export declare function getQuoteReference(bot: QQBot, channelId: string, isDirect: boolean, id: string): string;
export {};
