import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import {toWidget} from '@ckeditor/ckeditor5-widget/src/utils';
import Widget from '@ckeditor/ckeditor5-widget/src/widget';

class WidgetContainer extends Plugin {
  static get requires() {
	return [ WidgetContainerEditing ];
  }
}

class WidgetContainerEditing extends Plugin {
  static get requires() {
	return [ Widget ];
  }

  init() {
	this._defineSchema();
	this._defineConverters();
  }

  _defineSchema() {
	const schema = this.editor.model.schema;

	schema.register( 'widgetContainer', {
	  isObject: true,
	  isLimit: true,
	  allowWhere: '$block',
	  allowContentOf: '$root'
	} );
  }

  _defineConverters() {
	const conversion = this.editor.conversion;

	conversion.for( 'upcast' ).elementToElement( {
	  model: 'widgetContainer',
	  view: {
		name: 'div',
		classes: 'widget-container'
	  }
	} );

	conversion.for( 'dataDowncast' ).elementToElement( {
	  model: 'widgetContainer',
	  view: {
		name: 'div',
		classes: 'widget-container'
	  }
	} );

	conversion.for( 'editingDowncast' ).elementToElement( {
	  model: 'widgetContainer',
	  view: ( modelElement, { writer: viewWriter } ) => {
		const section = viewWriter.createContainerElement( 'div', { class: 'widget-container' } );

		return toWidget( section, viewWriter, { label: 'widget container' } );
	  }
	} );
  }
}

export default WidgetContainer;
