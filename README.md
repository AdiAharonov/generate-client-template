# Generate Client Template

A CLI tool to generate best-practice templates for client-side projects (Next.js, Vue, and more in the future).

## Installation

### Install Globally
You can install the package globally via Yarn:

```sh
yarn global add generate-client-template
```

Or via npm:

```sh
npm install -g generate-client-template
```

## Usage
To generate a new template, run:

```sh
generate-client-template
```
## Interactive CLI Steps:
1. Choose a framework (Next.js, Vue, etc.).
2. Choose a template type (Component, Page, etc.).
3. Enter a name for your template.
4. Choose the folder path where the template should be created.

## Example:

```sh
generate-client-template
```

## Output:

```pgsql
🚀 Welcome to Generate Client Template CLI
? Which framework are you using? Next.js
? What template do you want to generate? Component
? Enter the name of your template: Button
? Enter the folder path to generate the template: src/components/Button
✅ Successfully created Component: Button
```

## File Structure of a Generated Component:

```ruby
Button/
│── index.ts          # Re-exports the component
│── Button.tsx        # Main component file
│── Button.test.tsx   # Unit test file
│── Button.module.css # Styles for the component
```

## Contributing
Pull requests are welcome! If you have ideas for more template types or frameworks, feel free to contribute.

## License
MIT