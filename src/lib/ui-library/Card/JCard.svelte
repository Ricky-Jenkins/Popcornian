<script>
    export let cardClass = "";
    export let bodyClass = "";
</script>
<div class="w-fit rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800" class:cardClass>
    <h5 class="text-2xl font-bold tracking-tight text-gray-900 dark:text-white"><slot name="header" /></h5>
    <div  class="{bodyClass}">
        <slot />
    </div>
</div>
