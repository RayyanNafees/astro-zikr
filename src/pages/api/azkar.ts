import zikr from "../../data/zikr.json";
import type { APIRoute } from "astro";

export const ALL: APIRoute = async () => {
	return new Response(JSON.stringify(zikr));
};