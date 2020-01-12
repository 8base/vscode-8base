import { extensions, window, commands } from "vscode";

const YAML_EXTENSION_ID = "redhat.vscode-yaml";

export const loadYamlExtension = async (): Promise<void> => {
  const ext = extensions.getExtension(YAML_EXTENSION_ID);

  if (!ext) {
    const action = await window.showInformationMessage(
      "For the best experience please install an extension for advanced YAML support via the Extensions pane.",
      "Install",
    );

    if (action) {
      await commands.executeCommand("extension.open", YAML_EXTENSION_ID);
    }
  }
};
