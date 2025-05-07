<script module>
  import { defineMeta } from "@storybook/addon-svelte-csf";
  import Typeahead from "./Typeahead.svelte";
  import BuilderStyleRoot from "../BuilderStyleRoot/BuilderStyleRoot.svelte";

  // More on how to set up stories at: https://storybook.js.org/docs/writing-stories
  const { Story } = defineMeta({
    title: "Example/Typeahead",
    component: Typeahead,
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
    values: [
      { value: "chicken", label: "Chicken" },
      { value: "egg", label: "Egg" },
    ],
  }}
/>
