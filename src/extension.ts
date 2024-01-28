import * as vscode from 'vscode';
import { CommandCodeLensProvider } from './commandCodeLensProvider';
import cp = require('child_process');

export function activate(context: vscode.ExtensionContext) {
	context.subscriptions.push(
		vscode.commands.registerCommand('markdown.run.command', (args) => {
			var term = vscode.window.activeTerminal || vscode.window.createTerminal();
			term.show();
			term.sendText(args.command);
		})
	);

	context.subscriptions.push(
		vscode.languages.registerCodeLensProvider({ language: 'markdown', scheme: 'file' },
			new CommandCodeLensProvider())
	);
}

export function deactivate() { }
