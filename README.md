# components-builder

A set of common styles and components for creating builders - tools to configure and preview visualisations with a GUI interface.

**These components are not thoroughly tested as a library, and are provided as-is. Please contribute pull requests to fix issues**

## Global Styles (BuilderStyleRoot)

This project uses global styles in the same way as bootstrap or tailwind. These styles mainly focus on form elements and things you'll likely to hit in a builder.

Wrap your application inside of the BuilderStyleRoot component to make use of these styles. Note that all the components in this repository also depend on these styles.

## UpdateChecker

The update checker extracts the current version number from the URL, and recursively checks for new versions, major, minor, and patch. If a new version is found it will show a modal prompting the user to update.

Please ensure all your application state is kept in the URL, otherwise it may be lost on upgrade.

## ScreenshotTool (fallback images)

The screenshot tool allows users to paste an entire article, then extracts all the markers and sends them to a third-party service to screenshot.

For this to work you must set up a standalone page that can display the visualisation that the external service to screenshot, similar to how you would develop an iframe version of the visualisation.

Note that the screenshot tool is not fast. We haven't been able to speed up the server side enough to make this a great experience.

## Typeahead

The typeahead component uses a native HTML input element, in conjunction with the datalist element, to provide native searching and keyboard accessibility. The component implements its own multi-select functionality as that isn't available natively.

```svelte
<Typeahead
  {disabled}
  values={[{value: 'bne', label: 'Brisbane'},{value: 'syd', label: 'Sydney'}]}
  value={['bne']}
  onChange={newValue => console.log(newValue)}
```

## ContextMenu

The context menu component uses a native dialog element and provides a number of classes for you to style the contents of your menu. Check the storybook for more examples of these.

You can specify coordinates for the menu to appear, and you can usually find these on the click event when you click an element.

The context menu is designed for you to manually handle the isOpen state in your application.

```svelte
<ContextMenu>
  <div class="section" style="white-space:pre-wrap;">
    <strong>Brisbane</strong>
    <small>BNE</small>
  </div>
  <hr />
  <div class="section">Some notes about this seat</div>
  <hr />

  <label class="item">
    <div class="section">
      <input type="checkbox" /> An option
    </div>
  </label>

  <hr />

  <ul class="menu">
    <li><button class="item">Item 1</button></li>
    <li><button class="item">Item 2</button></li>
  </ul>

  <hr />

  <ul class="menu menu--double">
    <li><button class="item">Item 1</button></li>
    <li><button class="item">Item 2</button></li>
  </ul>
</ContextMenu>
```

## Modal

The modal component is useful for building more complex tools inside a builder.

You can provide your own footer elements to make either an okay/cancel alert, or next/next/done wizard style dialogue.

This uses the native dialogue element, so focus will always be inside the modal. Take care not to show more than one at a time.

```svelte
{#snippet children()}
  Hello this is the modal content
{/snippet}
{#snippet footerChildren()}
  <button onclick={() => (isOpen = false)}>Ok!</button>
{/snippet}

<Modal title="Example modal" {children} {footerChildren} />
```

## Developing

Once you've nstalled dependencies with `npm install`, start a development storybook:

```bash
npm run storybook
```

Everything inside `src/lib` is part of the library, everything inside `src/routes` can be used as a showcase or preview app.

## Building

To build the library:

```bash
npm run package
```

To create a production version of the showcase app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy the app, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for the target environment.

## Publishing

Go into the `package.json` and give the package the desired name through the `"name"` option. Also consider adding a `"license"` field and point it to a `LICENSE` file which you can create from a template (one popular option is the [MIT license](https://opensource.org/license/mit/)).

To publish the library to [npm](https://www.npmjs.com):

```bash
npm publish
```
