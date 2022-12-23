<script>
    /** @type {import('./$types').PageServerData} */
    export let data;

</script>

<div class="dark:text-white text-black dark:bg-neutral-800 bg-blend-hue pt-6">
    <div class="flex flex-row">
        <div class="mx-auto basis-1/4">
            <img alt="Poster image" src="{data.content.poster}" width="400"/>
        </div>
        <!-- ... -->
        <div class="mx-auto basis-2/4">
            <div class="flex flex-col">
                <form>
                    <div class="py-6">
                        <label for="description">Description:</label>
                        <p id="description">{data.content.desc}</p>
                    </div>
                    <div class="py-6">
                        <label for="directors">Directors</label>
                        <p id="directors">
                            {#each data.content.directors as director }
                                    <span>{ director }</span>
                            {/each}
                        </p>
                    </div>
                    <div class="py-6">
                        <label for="releaseDate">Directors</label>
                        <p id="releaseDate">{ data.content.releaseDate }</p>
                    </div>
                </form>
            </div>
        </div>
    </div>
    <!--{JSON.stringify(data.content)}-->
</div>