
<script>
    import { clickOutside } from "$lib/client/events";

    export let show = false;

    export let header = "";

    // Render props
    export let renderFooter = true;
    export let dismissDialog = true;

    // styling props
    export let modalClass = "";
    export let bodyClass = "";

    const onClickOutsideDialog = () => {
        if (dismissDialog) {
            show = false;
        }
    }
</script>

<!-- Modal toggle -->
{#if show}
    <div
            id="defaultModal"
            tabindex="-1"
            class="fixed z-50 p-4 overflow-x-hidden overflow-y-auto md:inset-0"
    >
        <div
             class="relative rounded-lg shadow {modalClass}"
             style="max-height: 80vh"
             use:clickOutside
             on:click_outside={onClickOutsideDialog}
        >
            <!-- Modal header -->
            <div class="flex items-start justify-between p-1 border-b rounded-t dark:border-gray-600">
                <slot name="header">
                    <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                        {header}
                    </h3>
                </slot>
                <button on:click={() => show = !show} type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="defaultModal">
                    <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    <span class="sr-only">Close modal</span>
                </button>
            </div>
            <div class="overflow-y-auto {bodyClass}">
                <slot>
                    <!-- Modal body -->
                    <div class="p-6 space-y-6">
                        <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                            With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.
                        </p>
                        <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                            The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.
                        </p>
                    </div>
                </slot>
            </div>
            <!-- Modal footer -->
            {#if renderFooter}
                <slot name="footer">
                    <div class="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                        <button
                                data-modal-toggle="defaultModal"
                                type="button"
                                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                            Accept
                        </button>
                        <button
                                on:click={() => show = !show}
                                data-modal-toggle="defaultModal"
                                type="button"
                                class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                        >
                            Close
                        </button>
                    </div>
                </slot>
            {/if}
        </div>
    </div>
{/if}