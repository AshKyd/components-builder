type NewVersion = {
    newVersion: string;
    thisVersion: string;
};
type $$ComponentProps = {
    overrideNewVersion?: NewVersion;
    buttonText?: string;
};
declare const UpdateChecker: import("svelte").Component<$$ComponentProps, {}, "">;
type UpdateChecker = ReturnType<typeof UpdateChecker>;
export default UpdateChecker;
