import { Client } from "@upstash/workflow";
import { QSTASH_TOKEN, QSTASH_URL } from "./env.js";

export const workflowClient = new Client({
    QSTASH_URL,
    QSTASH_TOKEN
});