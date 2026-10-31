import { Bot, Context, h, Session, Universal } from '@satorijs/core';
import * as QQ from './types';
import { QQBot } from './bot';
export declare const decodeGuild: (guild: QQ.Guild) => Universal.Guild;
export declare const decodeChannel: (channel: QQ.Channel) => Universal.Channel;
export declare const decodeUser: (user: QQ.User) => Universal.User;
export declare const decodeGuildMember: (member: QQ.Member) => Universal.GuildMember;
/** 将 <faceType...> 串用 faceId 取 attachments 转成 h.image, 如果没有对应 attachment 则删除 <faceType...> */
export declare const decodeGroupMessageContent: (content: string, attachments?: QQ.Attachment[], attachedFace?: Set<number>) => h[];
export declare const decodeAttachments: (attachments: QQ.Attachment[], attachedFace?: Set<number>) => h[];
export declare function decodeGroupMessage(bot: QQBot, data: QQ.UserMessage, message?: Universal.Message, payload?: Universal.MessageLike): Universal.Message;
export declare function decodeMessage(bot: Bot, data: QQ.Message, message?: Universal.Message, payload?: Universal.MessageLike): Promise<Universal.Message>;
export declare function setupReaction(session: Session, data: QQ.MessageReaction): Session<import("cordis").Context>;
export declare function adaptSession<C extends Context = Context>(bot: QQBot<C>, input: QQ.DispatchPayload): Promise<C[typeof import("cordis").Context.session]>;
