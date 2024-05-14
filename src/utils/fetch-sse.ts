/* eslint-disable @typescript-eslint/no-explicit-any */
import { StreamI } from "@/types/controller-types/chat.types";
import { createParser } from "eventsource-parser";
interface CauseI {
    message: string;
}
// interface optionMoreT {
//     onMessage: (val: StreamI) => void;
//     onError: (cause: CauseI) => void;
// }

export async function fetchSSE({
    url,
    options,
}: {
    url: string;
    options: any;
}) {
    const { onMessage, onError, ...fetchOptions } = options;

    const res: any = await fetch(url, fetchOptions);

    if (!res.ok) {
        const error = { cause: res };

        throw error;
    }

    const parser = createParser((event: any) => {
        onMessage(event.data);
    });

    const feed = (chunk: any) => {
        let _a;

        let response = null;

        try {
            response = JSON.parse(chunk);
        } catch {
            console.log("error catch");
        }

        if (
            ((_a = response == null ? void 0 : response.detail) == null
                ? void 0
                : _a.type) === "invalid_request_error"
        ) {
            const error: CauseI = { message: response };

            if (onError) {
                onError(error);
            } else {
                console.error(error);
            }

            return;
        }

        parser.feed(chunk);
    };

    if (!res.body.getReader) {
        const body = res.body;

        if (!body.on || !body.read) {
            throw "";
        }

        body.on("readable", () => {
            let chunk;

            while (null !== (chunk = body.read())) {
                feed(chunk.toString());
            }
        });
    } else {
        for await (const chunk of streamAsyncIterable(res.body)) {
            const str = new TextDecoder().decode(chunk);
            const data = processStringData(str);
            data.forEach((item: StreamI) => {
                try {
                    onMessage(item);
                    // feed(JSON.stringify(item));
                } catch (error) {
                    console.log(error);
                }
            });
        }
    }
}

function processStringData(inputString: string) {
    const jsonStrings = inputString.split("data: ").filter((s) => s);

    const results = jsonStrings.map((jsonString) => {
        try {
            const jsonObject = JSON.parse(jsonString);
            return jsonObject;
        } catch (e) {
            console.error("Invalid JSON string: " + jsonString, e);

            return null;
        }
    });

    return results.filter((result) => result !== null);
}

async function* streamAsyncIterable(stream: any) {
    const reader = stream.getReader();

    try {
        while (true) {
            const { done, value } = await reader.read();

            if (done) {
                return;
            }

            yield value;
        }
    } finally {
        reader.releaseLock();
    }
}
