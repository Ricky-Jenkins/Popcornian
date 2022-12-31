<svelte:head>
    <title>About</title>
    <meta name="description" content="About this app" />
</svelte:head>

<script lang="ts">
    import JCard from "$lib/ui-library/Card/JCard.svelte";
    import JDialog from "$lib/ui-library/Dialog/Dialog.svelte";
    import type { Film } from "$lib/types/media/Film";
    import JButton from "$lib/ui-library/Button/JButton.svelte";
    import Fa from 'svelte-fa/src/fa.svelte'
    import {faEllipsisH, faFlag, faHeart, faShareAlt} from '@fortawesome/free-solid-svg-icons'


    export let data;

    let selectedContent: Film | null = null;


</script>

<div class="m-4">
    <JDialog
            show="{!!selectedContent}"
            renderFooter={false}
             modalClass="lg:w-2/5 mx-auto mt-20 h-full bg-neutral-900 overflow-y-auto"
    >
        <div slot="header" class="w-full">
            <p class="text-center text-lg dark:text-white">
                {selectedContent.title}
            </p>
        </div>
        <div class="dark:text-white w-full bg-blend-multiply" id="dialog-body">
            <div
                    style={`background-image: url("${selectedContent?.poster}"); height:500px;`}
                    class="mx-auto bg-no-repeat bg-cover">
            </div>

            <div class="px-2 pt-2">
                <ul>
                    <label class="inline">Directors:</label>
                    {#each selectedContent.directors as director }
                        <li class="inline">
                            { director }
                            { selectedContent.directors.length > 1 ? ',' : '' }
                        </li>
                    {/each}
                </ul>
                <div class="py-4">
                    <JButton class="rounded-3xl text-lg">
                        Watch
                    </JButton>
                    <JButton type="circle" class="dark:bg-transparent dark:hover:bg-neutral-700 border border-neutral-600 px-3 py-3">
                        <div slot="prefix">
                            <Fa icon={faHeart} />
                        </div>
                    </JButton>
                    <JButton type="circle" class="dark:bg-transparent dark:hover:bg-neutral-700 border border-neutral-600 px-3 py-3">
                        <div slot="prefix">
                            <Fa icon={faShareAlt} />
                        </div>
                    </JButton>
                    <JButton type="circle" class="dark:bg-transparent dark:hover:bg-neutral-700 border border-neutral-600 px-3 py-3">
                        <div slot="prefix">
                            <Fa icon={faEllipsisH} />
                        </div>
                    </JButton>
                </div>
                <div class="m-4">
                    <p class="text-xl text-white uppercase py-2">Storyline</p>
                    <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400 py-2">
                        {selectedContent.desc}
                    </p>
                </div>
            </div>
        </div>
    </JDialog>
    <div class="grid grid-cols-12 gap-1">
        {#each data.films as film}
            <div class="transition delay-150 duration-300 ease-in-out" on:click={() => selectedContent = film}>
                <JCard bodyClass="{''}">
                    <img alt="poster" src="{film.poster}" class="max-h-64" />
                </JCard>
            </div>
        {/each}
    </div>
</div>