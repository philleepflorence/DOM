DOM
===

A collection of DOM Elements, CSS Properties, DOM Content Models and more in JavaScript Objects for use with Web Applications.

Created object primarily for use with a CSS Editor UI. Can be expanded for use with any Web Application that needs DOM elements information and CSS properties.


## Glossary

#### DOM.colors
Lists all pre-named css colors. Designers would love this!

#### DOM.cssProperties
List the most common CSS Properties. This was created for the CSS Editor UI, so most shorthand properties are not included so it mimics getComputedStyle. May create a full list in the future.
* DOM.cssProperties.version - CSS Version 1, 2 or 3.
* DOM.cssProperties.group - CSS Property Groups.
* DOM.cssProperties.definition - Definition of CSS Property.
* DOM.cssProperties.values - Allowed values (dropdown or selectable), if null, user must enter value.
* DOM.cssProperties.validate - Personal validation keyword matches the Form.validate function.
* DOM.cssProperties.units - Allowed units (some may be ommitted for cross browser compatability).

#### DOM.contentModels
A description of the element's expected contents. Allows for rules to be made as to what element goes outside of what element or inside of what element.
* DOM.contentModels.description - Definition or description of the Content Model.
* DOM.contentModels.elements - Elements (DOM.elements) that belong to the Content Model

#### DOM.elements
The actual Element object represents an element or tag in the HTML document (DOM).
* DOM.elements.title - Full title of element.
* DOM.elements.description - Description or definitions of element.
* DOM.elements.disclaimer - Disclaimers or additional definitions, warnings, hints, e.t.c. Kept in an array so view structuring can be easily manupulated.
* DOM.elements.display - How element is displayed, inline, block, e.t.c.
* DOM.elements.model - Content Model(s) to which the element belong(s).
* DOM.elements.children - Elements allowed within this element.
* DOM.elements.parent - Content Model(s) that must be a parent to element.
* DOM.elements.ancestor - Element that must be an ancestor. If more than one, listed in ascending order.
* DOM.elements.attributes - Element attibutes that are allowed; this is in addition to the Global Attributes.
* DOM.elements.required - Required attributes that element should have.
* DOM.elements.tags - If element should have a closing tag.
* DOM.elements.interface - DOM Interface; reference information for external resources and the relationship of those resources to a document and vice-versa.
* DOM.elements.links - Links to additional recources for element.
