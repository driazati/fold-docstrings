const { CompositeDisposable, Point, Range } = require('atom');
const docstring_regex = new RegExp(/r"""[\s\S]+?"""/gm);

atom.commands.add('atom-text-editor', 'fold-docstring', () => {
	const editor = atom.workspace.getActiveTextEditor();
	editor.scan(docstring_regex, undefined, function(match) {
		editor.setSelectedBufferRange(match.range);
		let selection = editor.selections[0];
		selection.fold();
	});
});