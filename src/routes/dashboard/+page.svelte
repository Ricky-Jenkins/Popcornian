<svelte:head>
    <title>About</title>
    <meta name="description" content="About this app" />
</svelte:head>

<script>
    import JCard from "$lib/ui-library/Card/JCard.svelte";
    import JDialog from "$lib/ui-library/Dialog/Dialog.svelte";

    export let data;

    let selectedContent = null;


</script>

<div class="m-4">
    <JDialog
            show="{!!selectedContent}"
            renderFooter={false}
            bodyClass="w-full h-full"
             modalClass="sm:w-full lg:w-3/6 mx-auto mt-20 h-full"
    >
        <div slot="header" class="w-full"><p class="text-center text-lg py-2 dark:text-white">{selectedContent.title}</p></div>
        <div class="dark:text-white w-full bg-blend-multiply" id="dialog-body">
            <div
                    style={`background-image: url("${selectedContent?.poster}"); height:500px;`}
                    class="mx-auto bg-no-repeat bg-cover">
            </div>
            <!--<img src={selectedContent.poster} class="bg-cover bg-center" />-->
            <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                {selectedContent.desc}
            </p>
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