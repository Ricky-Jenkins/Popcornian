import { films } from "$lib/server/repository/media";
import type {Film} from "$lib/types/media/Film";

/** @type {import('./$types').PageServerLoad} */
export function load({ params }: { params: { slug: number }}): { content: Film | undefined } {
   return {
       content: films.find(x => x.id == params.slug)
   }
}