import type { Component } from "svelte";
type $$ComponentProps = {
    name: string;
    markerName: string;
    ScrollytellerRoot: Component;
    loadScrollyteller: (name?: string, className?: string, markerName?: string) => any;
};
declare const GoogleDocScrollyteller: Component<$$ComponentProps, {}, "">;
type GoogleDocScrollyteller = ReturnType<typeof GoogleDocScrollyteller>;
export default GoogleDocScrollyteller;
