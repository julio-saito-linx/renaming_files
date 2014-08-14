var fs = require('fs');
var path = require('path');

var INITIAL_FOLDER = '/home/julio/Dropbox/Compartilhado Karen - Fotos';
var REGEXP_MATCH_FILE = /^(.+?) \(Cópia em conflito de pc-saito 2014-08-14\)(.+)$/;

var allFileNames = fs.readdirSync(INITIAL_FOLDER);

allFileNames.forEach(function(old_name) {
	if( REGEXP_MATCH_FILE.test(old_name) ){
		
		// remove unwanted text
		var new_name = old_name.replace(REGEXP_MATCH_FILE, '$1$2');
		var full_path_old_name = path.join(INITIAL_FOLDER, old_name);
		var full_path_new_name = path.join(INITIAL_FOLDER, new_name);
		
		fs.renameSync(full_path_old_name, full_path_new_name);
		console.log('renamed from', old_name, '-->', new_name);
	}
})

