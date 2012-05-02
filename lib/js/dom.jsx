// Document Object Model Level 2 Core
// http://www.w3.org/TR/DOM-Level-2-Core/

import "js.jsx";

native class DOMImplementation {
	// TODO
}

native class Node {
	const var ELEMENT_NODE :int;
	const var ATTRIBUTE_NODE :int;
	const var TEXT_NODE :int;
	const var CDATA_SECTION_NODE :int;
	const var ENTITY_REFERENCE_NODE :int;
	const var ENTITY_NODE :int;
	const var PROCESSING_INSTRUCTION_NODE :int;
	const var COMMENT_NODE :int;
	const var DOCUMENT_NODE :int;
	const var DOCUMENT_TYPE_NODE :int;
	const var DOCUMENT_FRAGMENT_NODE :int;
	const var NOTATION_NODE :int;

	const var nodeName :string;
	const var parentNode :string;
	const var childNodes :NodeList;
	const var firstChild :Node;
	const var lastChild :Node;
	const var previousSibling :Node;
	const var nextSibling :Node;
	const var attributes :NamedNodeMap;

	function insertBefore(newChild :Node, refChild :Node) :Node;
	function replaceChild(newChild :Node, oldChild :Node) :Node;
	function removeChild(oldChild :Node) :Node;
	function appendChild(newChild :Node) :Node;

	function hasChildNodes() :boolean;
	function cloneNode(deep :boolean) :Node;

	// modified in DOM level 2
	function normalize() :void;

	// introduced in DOM level 2
	function isSupported(feature :string, version :string) :boolean;
	const var prefix :string;
	const var localName :string;
	function hasAttributes() :boolean;
}

native class NodeList {
	function item(index :int) :Node;
	const var length :int;
}

native class NamedNodeMap {
	// TODO
}

native class CharacterData extends Node {
	// TODO
}

native class Attr extends Node {
	// TODO
}

native class Element extends Node {
	const var tagName :string;

	function getAttribute(name :string) :string;
	function setAttribute(name :string, value :string) :void;
	function removeAttribute(name :string) :void;

	function getAttributeNode(name :string) :Attr;
	function setAttributeNode(newAttr :Attr) :Attr;
	function removeAttributeNode(oldAttr :Attr) :Attr;

	function getElementsByTagName(name :string) :NodeList;

	// introduced in DOM level 2

	function getAttributeNS(namespaceURI :string, localName :string) :string;
	function setAttributeNS(namespaceURI :string, qualifiedName :string, value :string) :void;
	function removeAttributeNS(namespaceURI :string, localName :string) :string;
	function getAttributeNodeNS(namespaceURI :string, localName :string) :string;
	function setAttributeNS(newAttr :Attr) :Attr;
	function removeAttributeNS(namespaceURI :string, localName :string) :string;
	function getElementsByTagNameNS(namespaceURI :string, localName :string) :NodeList;

	function hasAttribute(name :string) :boolean;
	function hasAttributeNS(namespaceURI :string, name :string) :boolean;
}


native class Text extends CharacterData {
	function splitText(offset :number) :Text;
}

native class Comment extends CharacterData { }
native class CDATASection extends Text { }

native class DocumentType extends Node {
	// TODO
}

native class Notation extends Node {
	// TODO
}

native class Entity extends Node {
	// TODO
}

native class EntityReference extends Node {
	// TODO
}

native class ProcessingInstruction extends Node {
	// TODO
}

native class DocumentFragment extends Node { }

native class Document extends Node {
	const var doctype :DocumentType;
	const var implementation :DOMImplementation;
	const var documentElement :Element;

	function createElement(tagname :string) :Element;
	function createDocumentFragment() :DocumentFragment;
	function createTextNode(data :string) :Text;
	function createComment(data :string) :Comment;
	function createCDATASection(data :string) :CDATASection;
	function createProcessingInstruction(target :string, data :string) :ProcessingInstruction;
	function createAttribute(name :string) :Attr;
	function createEntityReference(name :string) :EntityReference;

	function getElementsByTagName(tagname :string) :NodeList;

	// introduced in DOM level 2

	function importNode(importedNode :Node, deep :boolean) :Node;

	function createElementNS(namespaceURI :string, qualifiedName :string) :Element;
	function createAttributeNS(namespaceURI :string, qualifiedName :string) :Attr;

	function getElementsByTagName(namespaceURI :string, localName :string) :NodeList;
	function getElementById(elementId :string) :Element;
}


final native class DOMWindow {
	const var document :Document;
}

final class dom {

	static function getWindow() :DOMWindow{
		// DOMWindow doesn't exist; it's a virtual class.
		return js.global["window"] as __nocheck__ DOMWindow;
	}
	static function getDocument() :Document {
		return dom.getWindow().document;
	}
}