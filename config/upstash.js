import { Client as workflowClient } from "@upstash/workflow";

import { QSTASH_TOKEN, QSTASH_URL } from "./env.js";

export const workflowClient = new workflowClient({
    QSTASH_URL: QSTASH_URL,
    QSTASH_TOKEN: QSTASH_TOKEN
});