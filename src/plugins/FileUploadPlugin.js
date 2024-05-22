import {FileDialogButtonView, FileRepository} from "@ckeditor/ckeditor5-upload";
import Plugin from '@ckeditor/ckeditor5-core/src/plugin';

export default class FileUploadPlugin extends Plugin {
	init() {
		const editor = this.editor;

		editor.ui.componentFactory.add('fileUpload', (locale) => {
			const view = new FileDialogButtonView(locale);
			const t = editor.t;

			view.buttonView.set({
				label: t('Upload file'),
				icon: '<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 99.09 122.88"><title>file-upload</title><path d="M64.64,13,86.77,36.21H64.64V13ZM42.58,71.67a3.25,3.25,0,0,1-4.92-4.25l9.42-10.91a3.26,3.26,0,0,1,4.59-.33,5.14,5.14,0,0,1,.4.41l9.3,10.28a3.24,3.24,0,0,1-4.81,4.35L52.8,67.07V82.52a3.26,3.26,0,1,1-6.52,0V67.38l-3.7,4.29ZM24.22,85.42a3.26,3.26,0,1,1,6.52,0v7.46H68.36V85.42a3.26,3.26,0,1,1,6.51,0V96.14a3.26,3.26,0,0,1-3.26,3.26H27.48a3.26,3.26,0,0,1-3.26-3.26V85.42ZM99.08,39.19c.15-.57-1.18-2.07-2.68-3.56L63.8,1.36A3.63,3.63,0,0,0,61,0H6.62A6.62,6.62,0,0,0,0,6.62V116.26a6.62,6.62,0,0,0,6.62,6.62H92.46a6.62,6.62,0,0,0,6.62-6.62V39.19Zm-7.4,4.42v71.87H7.4V7.37H57.25V39.9A3.71,3.71,0,0,0,61,43.61Z"/></svg>', // Add your custom SVG icon here
				tooltip: true,
			});

			// When a file is selected
			view.on('done', async (evt, files) => {
				if (!files.length) {
					return;
				}

				const file = files[0];
				const fileName = file.name;
				const fileRepository = editor.plugins.get(FileRepository);
				const fileLoader = fileRepository.createLoader(file);

				if (!fileLoader) {
					return;
				}

				fileLoader
					.upload()
					.then((data) => {
						const url = data.default;
						editor.model.change((writer) => {
							const linkAttributes = {
								linkHref: url,
								linkTarget: '_blank'
							};

							writer.insertText(fileName, linkAttributes, editor.model.document.selection.getFirstPosition());
						});
					})
					.catch((error) => {
						console.error('File upload failed:', error);
					});
			});

			return view;
		});
	}
}
