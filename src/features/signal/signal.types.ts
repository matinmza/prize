import { HubConnection } from "@microsoft/signalr";

export interface SignalStateI {
    connection: HubConnection | null;
}
