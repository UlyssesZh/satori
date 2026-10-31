import * as QQ from './types';
import { Context, Dict, h, MessageEncoder } from '@satorijs/core';
import { QQBot } from './bot';
import { QQGuildBot } from './bot/guild';
export declare const escapeMarkdown: (val: string) => string;
export declare class QQGuildMessageEncoder<C extends Context = Context> extends MessageEncoder<C, QQGuildBot<C>> {
    private content;
    private file;
    private filename;
    fileUrl: string;
    private passiveId;
    private passiveEventId;
    reference: string;
    private retry;
    flush(): Promise<void>;
    audit(audit_id: string): Promise<QQ.MessageAudited>;
    resolveFile(attrs: Dict, download?: boolean): Promise<any>;
    visit(element: h): Promise<void>;
}
export declare class QQMessageEncoder<C extends Context = Context> extends MessageEncoder<C, QQBot<C>> {
    private content;
    private passiveId;
    private passiveSeq;
    private passiveEventId;
    private useMarkdown;
    private inMarkdown;
    private rows;
    private attachedFile;
    private retry;
    reference: string;
    flush(): Promise<void>;
    private reset;
    audit(audit_id: string): Promise<QQ.MessageAudited>;
    sendFile(type: string, attrs: Dict, download?: boolean): any;
    chunkedUpload(fileType: QQ.Message.File.Type, fileName: string, fileData: Uint8Array, send?: boolean): Promise<QQ.Message.File.Response>;
    decodeButton(attrs: Dict, label: string): QQ.Button;
    lastRow(): QQ.Button[];
    trimButtons(): void;
    exportButtons(): QQ.InlineKeyboardRow[];
    ensureMarkdown(): Promise<void>;
    visit(element: h): Promise<void>;
}
