type $$ComponentProps = {
    values: {
        value: string;
        label: string;
    }[];
    value: string[];
    disabled: boolean;
    onChange?: (val: string[]) => void;
};
declare const Typeahead: import("svelte").Component<$$ComponentProps, {}, "">;
type Typeahead = ReturnType<typeof Typeahead>;
export default Typeahead;
