import type { MicroCMSQueries } from "microcms-js-sdk";
import { createClient } from "microcms-js-sdk";

const client = createClient({
	serviceDomain: "abc",
	apiKey: "def",
});
