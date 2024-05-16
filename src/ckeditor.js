/**
 * @license Copyright (c) 2014-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';
import UploadAdapter from '@ckeditor/ckeditor5-adapter-ckfinder/src/uploadadapter';
import CKFinder from '@ckeditor/ckeditor5-ckfinder/src/ckfinder';
import Alignment from '@ckeditor/ckeditor5-alignment/src/alignment';
import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat';
import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Code from '@ckeditor/ckeditor5-basic-styles/src/code';
import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import Heading from '@ckeditor/ckeditor5-heading/src/heading';
import Image from '@ckeditor/ckeditor5-image/src/image';
import ImageCaption from '@ckeditor/ckeditor5-image/src/imagecaption';
import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle';
import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar';
import Indent from '@ckeditor/ckeditor5-indent/src/indent';
import IndentBlock from '@ckeditor/ckeditor5-indent/src/indentblock';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import Link from '@ckeditor/ckeditor5-link/src/link';
import List from '@ckeditor/ckeditor5-list/src/list';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import PasteFromOffice from '@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice';
import Table from '@ckeditor/ckeditor5-table/src/table';
import TableToolbar from '@ckeditor/ckeditor5-table/src/tabletoolbar';
import TextTransformation from '@ckeditor/ckeditor5-typing/src/texttransformation';
import HorizontalLine from '@ckeditor/ckeditor5-horizontal-line/src/horizontalline';
import Markdown from '@ckeditor/ckeditor5-markdown-gfm/src/markdown';
import Mention from '@ckeditor/ckeditor5-mention/src/mention';
import ImageUpload from '@ckeditor/ckeditor5-image/src/imageupload';
import MediaEmbed from '@ckeditor/ckeditor5-media-embed/src/mediaembed';
import GeneralHtmlSupport from '@ckeditor/ckeditor5-html-support/src/generalhtmlsupport';
import {HtmlComment} from "@ckeditor/ckeditor5-html-support";
import WidgetContainer from "./plugins/email/WidgetContainer";
import FileUploadPlugin from "./plugins/FileUploadPlugin";


const plugins = [
	Mention,
	Alignment,
	UploadAdapter,
	CKFinder,
	Autoformat,
	BlockQuote,
	Bold,
	Code,
	Essentials,
	Heading,
	Image,
	ImageCaption,
	ImageStyle,
	ImageToolbar,
	ImageUpload,
	Indent,
	IndentBlock,
	Italic,
	Link,
	List,
	Paragraph,
	PasteFromOffice,
	Table,
	TableToolbar,
	TextTransformation,
	HorizontalLine,
	MediaEmbed,
	GeneralHtmlSupport,
  	HtmlComment,
  	WidgetContainer,
];

const config = {
	toolbar: {
		items: [
			'heading',
			'|',
			'bold',
			'italic',
			'link',
			'bulletedList',
			'numberedList',
			'alignment',
			'horizontalLine',
			'indent',
			'outdent',
			'undo',
			'redo'
		]
	},
};

class HtmlEditor extends ClassicEditor {}

HtmlEditor.builtinPlugins = plugins;
HtmlEditor.defaultConfig = config;

class MarkdownEditor extends ClassicEditor {}

MarkdownEditor.builtinPlugins = [...plugins, Markdown];
MarkdownEditor.defaultConfig = config;

export default { HtmlEditor, MarkdownEditor, FileUploadPlugin };
