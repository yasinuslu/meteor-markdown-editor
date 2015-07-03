// Write your package code here!
markdownEditor = new ReactiveDict("markdown_editor");

Template.MarkdownEditor.onRendered(function () {
  markdownEditor.set("loaded", false);
  markdownEditor.ace = null;
  // AceEditor.instance("markdown-editor-ace", );

  // migration
  var initialText = markdownEditor.get("value") || "";

  this.autorun(function (e) {
    markdownEditor.ace = AceEditor.instance("markdown-editor-ace", {
      theme:"monokai",
      mode:"markdown"
    });
    if(markdownEditor.ace.loaded !== undefined){
      e.stop();
      markdownEditor.set("loaded", true);
      markdownEditor.ace.getSession().setValue(initialText);
      markdownEditor.ace.on("change", function (e) {
        markdownEditor.set("value", markdownEditor.ace.getSession().getValue());
      });
    }
  });
});

Template.MarkdownEditor.helpers({
  getText: function () {
    return markdownEditor.get("value");
  }
});