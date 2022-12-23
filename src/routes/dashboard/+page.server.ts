import { films } from "$lib/server/repository/media";
import type { Film } from "$lib/server/types/media/Film";

/** @type {import('./$types').PageLoad} */
export async function load(): Promise<{ films: Film[] }> {
    return {
        films: [...films, ...films, ...films, ...films],
    };
}