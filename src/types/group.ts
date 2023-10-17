import { IChatMessageRecord } from "@/message/type";
import { IRecord } from "@/types/storage";

export interface IGroupRecord extends IRecord{
    name: string,
    agents: string[],
    conversation: IChatMessageRecord[],
}
