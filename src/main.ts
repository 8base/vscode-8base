import * as vscode from "vscode";
import { loadYamlExtension } from "./extension/yaml/schema/load-yaml-extension";

export const activate = async (context: vscode.ExtensionContext): Promise<void> => {
  await loadYamlExtension();
};

export const deactivate = (): void => {
  // No-op
};
