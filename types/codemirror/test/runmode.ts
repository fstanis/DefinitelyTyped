/// <reference types="../codemirror-runmode" />

var query = "SELECT * FROM Table";

CodeMirror.runMode(query, "text/x-sql", document.body);
