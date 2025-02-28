import * as fs from "fs-extra";
import * as path from "path";
import chalk from "chalk";

export const generateTemplate = async (
  framework: string,
  templateType: string,
  templateName: string,
  targetDir: string
) => {
  try {
    // Ensure the target directory exists
    await fs.ensureDir(targetDir);

    // Define file paths
    const componentFile = path.join(targetDir, `${templateName}.tsx`);
    const indexFile = path.join(targetDir, `index.ts`);
    const testFile = path.join(targetDir, `${templateName}.test.tsx`);
    const stylesFile = path.join(targetDir, `${templateName}.module.css`);

    // Component/Page Template
    const componentContent = `
import styles from "./${templateName}.module.css";

export default function ${templateName}() {
  return <div className={styles.container}>${templateType}: ${templateName}</div>;
}
`;

    // Index File (Re-exports the component)
    const indexContent = `export { default } from "./${templateName}";`;

    // Test File
    const testContent = `
import { render, screen } from "@testing-library/react";
import ${templateName} from "./${templateName}";

test("renders ${templateName} component", () => {
  render(<${templateName} />);
  expect(screen.getByText("${templateType}: ${templateName}")).toBeInTheDocument();
});
`;

    // Styles File
    const stylesContent = `
.container {
  padding: 10px;
  background-color: #f5f5f5;
  border-radius: 5px;
}
`;

    // Write files
    await fs.writeFile(componentFile, componentContent.trim());
    await fs.writeFile(indexFile, indexContent.trim());
    await fs.writeFile(testFile, testContent.trim());
    await fs.writeFile(stylesFile, stylesContent.trim());

    console.log(chalk.green(`✅ Successfully created ${templateType}: ${templateName} at ${targetDir}`));
  } catch (error) {
    console.error(chalk.red("❌ Error generating template:", error));
  }
};
