/**
 *
 * @param options
 * @param {string} options.name - Name in the scrollyteller opener tag. E.g. `#scrollytellerNAMEelectionmap1` would be "electionmap"
 * @param {string} options.className - Deprecated class to apply to every panel. This can be done at the top level scrollyteller nowadays.
 * @param {string} options.markerName - What does a #mark look like?
 * @param {function} [preprocessCoreEl] -
 * @param {function} [postprocessScrollytellerDefinition] -
 * @returns
 */
export declare function loadData({ name, className, markerName, url, preprocessCoreEl, postprocessScrollytellerDefinition, loadScrollyteller, }: {
    name: any;
    className?: string | undefined;
    markerName?: string | undefined;
    url: any;
    preprocessCoreEl?: ((el: any) => any) | undefined;
    postprocessScrollytellerDefinition?: ((a: any) => any) | undefined;
    loadScrollyteller: any;
}): Promise<{
    title: string | null | undefined;
    coreText: string;
    coreHTML: string;
    scrollytellerDefinition: any;
} | undefined>;
