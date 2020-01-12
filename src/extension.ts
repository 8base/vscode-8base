import * as vscode from "vscode";
import { loadYamlExtension } from "./yaml/schema/loadYamlExtension";

export const activate = async (context: vscode.ExtensionContext): Promise<void> => {
  await loadYamlExtension();
};

export const deactivate = (): void => {
  // No-op
};
