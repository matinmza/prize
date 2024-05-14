import * as signalR from "@microsoft/signalr";
import { useRef } from "react";
import useAppDispatch from "./store/useAppDispatch";
import useAppSelector from "./store/useAppSelector";
import { selectConnection } from "@/features/signal/signal.selectors";
import { selectTokenWidget } from "@/features/widget/widget.selectors";
import { signalActions } from "@/features/signal/signal.slice";

const useSignalR = () => {
    const dispatch = useAppDispatch();
    const connection = useAppSelector(selectConnection);
    const token = useAppSelector(selectTokenWidget);

    const isConnectionInitializing = useRef(false);

    const canBuildConnection = () => {
        if (
            connection &&
            connection.state === signalR.HubConnectionState.Connected
        ) {
            return false;
        }

        if (!token) return false;

        if (isConnectionInitializing.current) {
            // A connection initialization is already in progress, so return.
            return false;
        }
        return true;
    };

    const buildConnection = async () => {
        if (!canBuildConnection()) return;

        const hubConnectionOptions = {
            transport: signalR.HttpTransportType.LongPolling,
            logging: signalR.LogLevel.Trace,
            accessTokenFactory: function () {
                return token;
            },
        };

        const newConnection = new signalR.HubConnectionBuilder()
            .withUrl(
                import.meta.env.VITE_BASE_URL_HUB,
                hubConnectionOptions as signalR.IHttpConnectionOptions
            )
            .configureLogging(signalR.LogLevel.None)
            .withAutomaticReconnect()
            .build();

        isConnectionInitializing.current = true;

        newConnection
            .start()
            .then(() => {
                dispatch(signalActions.setConnection(newConnection));
            })
            .catch(async (error) => {
                console.log("catch buildConnection", error);
            });
    };

    const stopConnection = () => {
        connection?.stop();
        dispatch(signalActions.setConnection(null));
        isConnectionInitializing.current = false;
    };

    return { buildConnection, stopConnection };
};

export default useSignalR;
