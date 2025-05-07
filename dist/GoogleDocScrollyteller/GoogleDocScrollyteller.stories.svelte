<script module>
  import { defineMeta } from "@storybook/addon-svelte-csf";
  import GoogleDocScrollyteller from "./GoogleDocScrollyteller.svelte";
  import BuilderStyleRoot from "../BuilderStyleRoot/BuilderStyleRoot.svelte";

  // More on how to set up stories at: https://storybook.js.org/docs/writing-stories
  const { Story } = defineMeta({
    title: "Example/GoogleDocScrollyteller",
    component: GoogleDocScrollyteller,
    tags: ["autodocs"],
    argTypes: {},
    args: {},
    decorators: [() => BuilderStyleRoot],
  });
</script>

<!-- More on writing stories with args: https://storybook.js.org/docs/writing-stories/args -->
<Story
  name="Primary"
  args={{
    name: "myscrollyteller",
    markerName: "mark",
    loadScrollyteller: () => ({}),
  }}
/>
