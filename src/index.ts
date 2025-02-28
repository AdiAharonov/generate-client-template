#!/usr/bin/env node

import inquirer from "inquirer";
import * as path from "path";
import chalk from "chalk";
import { generateTemplate } from "./generateTemplate";

const runCLI = async () => {
  console.log(chalk.blueBright("\n🚀 Welcome to Generate Client Template CLI\n"));

  try {
    // Step 1: Choose a framework
    const { framework } = await inquirer.prompt([
      {
        type: "list",
        name: "framework",
        message: "Which framework are you using?",
        choices: ["Next.js", "Vue (Coming Soon)"],
      },
    ]);

    // Step 2: Choose a template type
    const { templateType } = await inquirer.prompt([
      {
        type: "list",
        name: "templateType",
        message: "What template do you want to generate?",
        choices: ["Component", "Page"],
      },
    ]);

    // Step 3: Enter the template name
    const { templateName } = await inquirer.prompt([
      {
        type: "input",
        name: "templateName",
        message: "Enter the name of your template:",
        validate: (input) => (input.trim() !== "" ? true : "Template name cannot be empty"),
      },
    ]);

    // Step 4: Choose where to generate the template
    const { targetPath } = await inquirer.prompt([
      {
        type: "input",
        name: "targetPath",
        message: "Enter the folder path to generate the template:",
        default: `src/components/${templateName}`,
      },
    ]);

    const fullPath = path.resolve(process.cwd(), targetPath);
    console.log(chalk.green(`\n📁 Generating template in: ${fullPath}...\n`));

    await generateTemplate(framework, templateType, templateName, fullPath);

    console.log(chalk.green("\n✅ Template created successfully!\n"));
  } catch (error) {
    console.error(chalk.red("❌ An error occurred:", error));
  }
};

// Execute the CLI
runCLI();
