import HtmlEditor from "./ckeditor";

HtmlEditor
  .create( document.querySelector( '#editor' ), {
	plugins: [ ...plugins, SimpleBox],
	toolbar: [ 'heading', '|', 'bold', 'italic', 'numberedList', 'bulletedList'],

	htmlSupport: {
	  allow: [
		{
		  name: /.*/,
		  attributes: true,
		  classes: true,
		  styles: true,
		},
	  ],
	},
  } )
  .then( editor => {
	console.log( 'Editor was initialized', editor );

	window.editor = editor;
  } )
  .catch( err => {
	console.error( err.stack );
  } );
