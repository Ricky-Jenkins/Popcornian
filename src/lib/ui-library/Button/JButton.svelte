<script lang="ts">
        type JButtonStyles = 'circle' | 'square' | 'rounded';

        let clazz;
        export { clazz as class }

        export let type: JButtonStyles = 'rounded';

        const buttonStyle = () => {
                switch (type) {
                        case "circle":
                                return "rounded-full";
                        case "rounded":
                                return "rounded-lg";
                        case "square":
                                return "rounded-none";
                        default:
                                return "";
                }
        }


</script>
<button
        on:click
        type="button"
        class="text-center inline-flex items-center bg-blue-700 dark:bg-blue-700 text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium text-sm px-4 py-2 mr-2 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 {clazz} {buttonStyle()}">
        <slot name="prefix"></slot>
        <slot />
        <slot name="suffix"></slot>
</button>

