export default ScreenshotTool;
type ScreenshotTool = {
    $on?(type: string, callback: (e: any) => void): () => void;
    $set?(props: Partial<$$ComponentProps>): void;
};
declare const ScreenshotTool: import("svelte").Component<{
    defaultMarkerName?: Function;
    prefixes?: Record<string, any>;
    onMarker?: Function;
    iframeUrl?: string;
}, {}, "">;
type $$ComponentProps = {
    defaultMarkerName?: Function;
    prefixes?: Record<string, any>;
    onMarker?: Function;
    iframeUrl?: string;
};
