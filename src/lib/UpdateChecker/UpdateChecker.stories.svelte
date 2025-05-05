<script module>
  import { defineMeta } from "@storybook/addon-svelte-csf";
  import UpdateChecker from "./UpdateChecker.svelte";
  import BuilderStyleRoot from "$lib/BuilderStyleRoot/BuilderStyleRoot.svelte";

  // More on how to set up stories at: https://storybook.js.org/docs/writing-stories
  const { Story } = defineMeta({
    title: "Example/UpdateChecker",
    component: UpdateChecker,
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
    // don't pass anything here, this is just so we can preview it
    overrideNewVersion: {
      thisVersion: "1.2.3",
      newVersion: "2.0.0",
    },
  }}
/>
