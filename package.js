Package.describe({
  name: 'yasinuslu:markdown-editor',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.use([
    'templating',
    'reactive-dict',
    'less',
    'arch:ace-editor',
    'perak:markdown'
  ], 'client');
  api.addFiles('markdown-editor.html', 'client');
  api.addFiles('markdown-editor.less', 'client');
  api.addFiles('markdown-editor.js', 'client');

  api.export('markdownEditor', 'client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('yasinuslu:markdown-editor');
  api.addFiles('markdown-editor-tests.js');
});
