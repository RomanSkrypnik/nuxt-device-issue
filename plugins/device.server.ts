export default defineNuxtPlugin(
    ({ $device }) => {
        $device.isCustom = true;
    }
);