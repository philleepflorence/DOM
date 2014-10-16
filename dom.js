var DOM = (function() {

    this.colors = ["aliceblue", "antiquewhite", "aqua", "aqu, amarine", "azure", "beige", "bisque", "black", "blanchedalmond", "blue", "blueviolet", "brown", "burlywood", "cadetblue", "chartreuse", "chocolate", "coral", "cornflowerblue", "cornsilk", "crimson", "cyan", "darkblue", "darkcyan", "darkgoldenrod", "darkgray", "darkgreen", "darkkhaki", "darkmagenta", "darkolivegreen", "darkorange", "darkorchid", "darkred", "darksalmon", "darkseagreen", "darkslateblue", "darkslategray", "darkturquoise", "darkviolet", "deeppink", "deepskyblue", "dimgray", "dodgerblue", "firebrick", "floralwhite", "forestgreen", "fuchsia", "gainsboro", "ghostwhite", "gold", "goldenrod", "gray", "green", "greenyellow", "honeydew", "hotpink", "indianred", "indigo", "ivory", "khaki", "lavender", "lavenderblush", "lawngreen", "lemonchiffon", "lightblue", "lightcoral", "lightcyan", "lightgoldenrodyellow", "lightgray", "lightgreen", "lightpink", "lightsalmon", "lightseagreen", "lightskyblue", "lightslategray", "lightsteelblue", "lightyellow", "lime", "limegreen", "linen", "magenta", "maroon", "mediumaquamarine", "mediumblue", "mediumorchid", "mediumpurple", "mediumseagreen", "mediumslateblue", "mediumspringgreen", "mediumturquoise", "mediumvioletred", "midnightblue", "mintcream", "mistyrose", "moccasin", "navajowhite", "navy", "oldlace", "olive", "olivedrab", "orange", "orangered", "orchid", "palegoldenrod", "palegreen", "paleturquoise", "palevioletred", "papayawhip", "peachpuff", "peru", "pink", "plum", "powderblue", "purple", "red", "rosybrown", "royalblue", "saddlebrown", "salmon", "sandybrown", "seagreen", "seashell", "sienna", "silver", "skyblue", "slateblue", "slategray", "snow", "springgreen", "steelblue", "tan", "teal", "thistle", "tomato", "turquoise", "violet", "wheat", "white", "whitesmoke", "yellow", "yellowgreen"];

    this.cssProperties = {
        'color': {
            version: 1,
            group: 'color',
            definition: 'Sets the color of text',
            values: this.colors,
            validate: 'colors',
            units: null
        },
        'opacity': {
            version: 3,
            group: 'color',
            definition: 'Sets the opacity level for an element',
            values: null,
            validate: 'binary',
            units: null
        },
        'background-color': {
            version: 1,
            group: 'background',
            definition: 'Sets the background color of an element',
            values: this.colors,
            validate: 'colors',
            units: null
        },
        'background-image': {
            version: 1,
            group: 'background',
            definition: 'Sets the background image for an element',
            values: null,
            validate: 'cssurl',
            units: null
        },
        'background-repeat': {
            version: 1,
            group: 'background',
            definition: 'Sets how a background image will be repeated',
            values: ['repeat', 'repeat-x', 'repeat-y', 'no-repeat'],
            validate: null,
            units: null
        },
        'background-position': {
            version: 1,
            group: 'background',
            definition: 'Sets the starting position of a background image',
            values: ['left top', 'left center', 'left bottom', 'right top', 'right center', 'right bottom', 'center top', 'center center', 'center bottom'],
            validate: null,
            units: null
        },
        'background-attachment': {
            version: 1,
            group: 'background',
            definition: 'Sets whether a background image is fixed or scrolls with the rest of the page',
            values: ['scroll', 'fixed', 'local'],
            validate: '',
            units: null
        },
        'background-size': {
            version: 3,
            group: 'background',
            definition: 'Specifies the size of the background images',
            values: ['auto', 'cover', 'contain'],
            validate: '',
            units: null
        },
        'box-shadow': {
            version: 3,
            group: 'border',
            definition: 'Attaches one or more drop-shadows or glows to the content box',
            values: null,
            validate: null,
            units: null,
            fields: {
                'h-shadow': {
                    units: 'px'
                },
                'v-shadow': {
                    units: 'px'
                },
                blur: {
                    units: 'px'
                },
                spread: {
                    units: 'px'
                },
                color: {
                    values: this.colors
                },
                inset: {
                    type: 'boolean',
                    units: 'inset'
                }
            }
        },
        'border-width': {
            version: 1,
            group: 'border',
            definition: 'Sets the width of the four borders',
            values: null,
            validate: 'numeric',
            units: ['px', 'em']
        },
        'border-color': {
            version: 1,
            group: 'border',
            definition: 'Sets the color of the four borders',
            values: this.colors,
            validate: 'colors',
            units: null
        },
        'border-style': {
            version: 1,
            group: 'border',
            definition: 'Sets the style of the four borders',
            values: ['none', 'hidden', 'dotted', 'dashed', 'solid', 'double'],
            validate: '',
            units: null
        },
        'border-radius': {
            version: 3,
            group: 'border',
            definition: 'Defines the shape of the border',
            values: null,
            validate: 'numeric',
            units: ['px', 'em', '%']
        },
        'border-top-width': {
            version: 1,
            group: 'border',
            definition: 'Sets the width of the top border',
            values: null,
            validate: 'numeric',
            units: ['px', 'em']
        },
        'border-top-style': {
            version: 1,
            group: 'border',
            definition: 'Sets the style of the top border',
            values: ['none', 'hidden', 'dotted', 'dashed', 'solid', 'double'],
            validate: '',
            units: null
        },
        'border-top-color': {
            version: 1,
            group: 'border',
            definition: 'Sets the color of the top border',
            values: this.colors,
            validate: 'colors',
            units: null
        },
        'border-top-left-radius': {
            version: 3,
            group: 'border',
            definition: 'Defines the shape of the border of the top-left corner',
            values: null,
            validate: 'numeric',
            units: ['px', 'em', '%']
        },
        'border-top-right-radius': {
            version: 3,
            group: 'border',
            definition: 'Defines the shape of the border of the top-right corner',
            values: null,
            validate: 'numeric',
            units: ['px', 'em', '%']
        },
        'border-right-width': {
            version: 1,
            group: 'border',
            definition: 'Sets the width of the right border',
            values: null,
            validate: 'numeric',
            units: ['px', 'em']
        },
        'border-right-color': {
            version: 1,
            group: 'border',
            definition: 'Sets the color of the right border',
            values: this.colors,
            validate: 'colors',
            units: null
        },
        'border-right-style': {
            version: 1,
            group: 'border',
            definition: 'Sets the style of the right border',
            values: ['none', 'hidden', 'dotted', 'dashed', 'solid', 'double'],
            validate: '',
            units: null
        },
        'border-bottom-width': {
            version: 1,
            group: 'border',
            definition: 'Sets the width of the bottom border',
            values: null,
            validate: 'numeric',
            units: ['px', 'em']
        },
        'border-bottom-color': {
            version: 1,
            group: 'border',
            definition: 'Sets the color of the bottom border',
            values: this.colors,
            validate: 'colors',
            units: null
        },
        'border-bottom-style': {
            version: 1,
            group: 'border',
            definition: 'Sets the style of the bottom border',
            values: ['none', 'hidden', 'dotted', 'dashed', 'solid', 'double'],
            validate: '',
            units: null
        },
        'border-bottom-left-radius': {
            version: 3,
            group: 'border',
            definition: 'Defines the shape of the border of the bottom-left corner',
            values: null,
            validate: 'numeric',
            units: ['px', 'em', '%']
        },
        'border-bottom-right-radius': {
            version: 3,
            group: 'border',
            definition: 'Defines the shape of the border of the bottom-right corner',
            values: null,
            validate: 'numeric',
            units: ['px', 'em', '%']
        },
        'border-left-width': {
            version: 1,
            group: 'border',
            definition: 'Sets the width of the left border',
            values: null,
            validate: 'numeric',
            units: ['px', 'em']
        },
        'border-left-color': {
            version: 1,
            group: 'border',
            definition: 'Sets the color of the left border',
            values: this.colors,
            validate: 'colors',
            units: null
        },
        'border-left-style': {
            version: 1,
            group: 'border',
            definition: 'Sets the style of the left border',
            values: ['none', 'hidden', 'dotted', 'dashed', 'solid', 'double'],
            validate: '',
            units: null
        },
        'display': {
            version: 1,
            group: 'basic box',
            definition: 'Specifies how a certain HTML element should be displayed',
            values: ['block', 'inline', 'inline-block', 'none'],
            validate: '',
            units: null
        },
        'visibility': {
            version: 2,
            group: 'basic box',
            definition: 'Specifies whether or not an element is visible',
            values: ['hidden', 'visible'],
            validate: '',
            units: null
        },
        'width': {
            version: 1,
            group: 'basic box',
            definition: 'Sets the width of an element',
            values: null,
            validate: 'numeric',
            units: ['px', 'em', '%']
        },
        'height': {
            version: 1,
            group: 'basic box',
            definition: 'Sets the height of an element',
            values: null,
            validate: 'numeric',
            units: ['px', 'em', '%']
        },
        'top': {
            version: 2,
            group: 'basic box',
            definition: 'Specifies the top position of a positioned element',
            values: null,
            validate: 'numeric',
            units: ['px', 'em', '%']
        },
        'right': {
            version: 2,
            group: 'basic box',
            definition: 'Specifies the right position of a positioned element',
            values: null,
            validate: 'numeric',
            units: ['px', 'em', '%']
        },
        'bottom': {
            version: 2,
            values: null,
            group: 'basic box',
            definition: 'Specifies the bottom position of a positioned element',
            validate: 'numeric',
            units: ['px', 'em', '%']
        },
        'left': {
            version: 2,
            group: 'basic box',
            definition: 'Specifies the left position of a positioned element',
            values: null,
            validate: 'numeric',
            units: ['px', 'em', '%']
        },
        'padding-top': {
            version: 1,
            group: 'basic box',
            definition: 'Sets the top padding of an element',
            values: null,
            validate: 'numeric',
            units: ['px', 'em', '%']
        },
        'padding-right': {
            version: 1,
            group: 'basic box',
            definition: 'Sets the right padding of an element',
            values: null,
            validate: 'numeric',
            units: ['px', 'em', '%']
        },
        'padding-bottom': {
            version: 1,
            group: 'basic box',
            definition: 'Sets the bottom padding of an element',
            values: null,
            validate: 'numeric',
            units: ['px', 'em', '%']
        },
        'padding-left': {
            version: 1,
            group: 'basic box',
            definition: 'Sets the left padding of an element',
            values: null,
            validate: 'numeric',
            units: ['px', 'em', '%']
        },
        'float': {
            version: 1,
            group: 'basic box',
            definition: 'Specifies whether or not a box should float',
            values: ['none', 'left', 'right'],
            validate: '',
            units: null
        },
        'clear': {
            version: 1,
            group: 'basic box',
            definition: 'Specifies which sides of an element where other floating elements are not allowed',
            values: ['none', 'left', 'right', 'both'],
            validate: null,
            units: null
        },
        'position': {
            version: 2,
            group: 'basic box',
            definition: 'Specifies the type of positioning method used for an element (static, relative, absolute or fixed)',
            values: ['static', 'absolute', 'fixed', 'relative'],
            validate: '',
            units: null
        },
        'overflow': {
            version: 2,
            group: 'basic box',
            definition: "Specifies what happens if content overflows an element's box",
            values: ['visible', 'hidden', 'scroll', 'auto'],
            validate: null,
            units: null
        },
        'overflow-x': {
            version: 3,
            group: 'basic box',
            definition: "Specifies whether or not to clip the left/right edges of the content, if it overflows the element's content area",
            values: ['visible', 'hidden', 'scroll', 'auto'],
            validate: null,
            units: null
        },
        'overflow-y': {
            version: 3,
            group: 'basic box',
            definition: "Specifies whether or not to clip the top/bottom edges of the content, if it overflows the element's content area",
            values: ['visible', 'hidden', 'scroll', 'auto'],
            validate: null,
            units: null
        },
        'vertical-align': {
            version: 1,
            group: 'basic box',
            definition: 'Sets the vertical alignment of an element',
            values: ['baseline', 'length', 'sub', 'super', 'top', 'text-top', 'middle', 'bottom', 'text-bottom'],
            validate: null,
            units: null
        },
        'z-index': {
            version: 2,
            group: 'basic box',
            definition: 'Sets the stack order of a positioned element',
            values: null,
            validate: 'numeric',
            units: null
        },
        'margin-top': {
            version: 1,
            group: 'flexible box',
            definition: 'Sets the top margin of an element',
            values: null,
            validate: 'numeric',
            units: ['px', 'em', '%']
        },
        'margin-right': {
            version: 1,
            group: 'flexible box',
            definition: 'Sets the right margin of an element',
            values: null,
            validate: 'numeric',
            units: ['px', 'em', '%']
        },
        'margin-bottom': {
            version: 1,
            group: 'flexible box',
            definition: 'Sets the bottom margin of an element',
            values: null,
            validate: 'numeric',
            units: ['px', 'em', '%']
        },
        'margin-left': {
            version: 1,
            group: 'flexible box',
            definition: 'Sets the left margin of an element',
            values: null,
            validate: 'numeric',
            units: ['px', 'em', '%']
        },
        'min-width': {
            version: 1,
            group: 'basic box',
            definition: 'Sets the minimum width of an element',
            values: null,
            validate: 'numeric',
            units: ['px', 'em', '%']
        },
        'min-height': {
            version: 1,
            group: 'basic box',
            definition: 'Sets the minimum height of an element',
            values: null,
            validate: 'numeric',
            units: ['px', 'em', '%']
        },
        'max-width': {
            version: 1,
            group: 'basic box',
            definition: 'Sets the maximum width of an element',
            values: null,
            validate: 'numeric',
            units: ['px', 'em', '%']
        },
        'max-height': {
            version: 1,
            group: 'basic box',
            definition: 'Sets the maximum height of an element',
            values: null,
            validate: 'numeric',
            units: ['px', 'em', '%']
        },
        'text-transform': {
            version: 1,
            group: 'text',
            definition: 'Controls the capitalization of text',
            values: ['none', 'capitalize', 'uppercase', 'lowercase'],
            validate: null,
            units: null
        },
        'letter-spacing': {
            version: 1,
            group: 'text',
            definition: 'Increases or decreases the space between characters in a text',
            values: null,
            validate: 'numeric',
            units: ['px', 'pt', 'em', 'cm', '%']
        },
        'word-spacing': {
            version: 3,
            group: 'text',
            definition: 'Increases or decreases the space between words in a text',
            values: null,
            validate: 'numeric',
            units: ['px', 'pt', 'em', 'cm', '%']
        },
        'text-indent': {
            version: 1,
            group: 'text',
            definition: 'Specifies the indentation of the first line in a text-block',
            values: null,
            validate: 'numeric',
            units: ['px', 'pt', 'em', 'cm', '%']
        },
        'line-height': {
            version: 1,
            group: 'text',
            definition: 'Sets the line height',
            values: null,
            validate: 'numeric',
            units: ['px', 'pt', 'em', 'cm', '%']
        },
        'text-align': {
            version: 1,
            group: 'text',
            definition: 'Specifies the horizontal alignment of text',
            values: ['left', 'right', 'center', 'justify'],
            validate: null,
            units: null
        },
        'white-space': {
            version: 1,
            group: 'text',
            definition: 'Specifies how white-space inside an element is handled',
            values: ['normal', 'nowrap', 'pre', 'pre-line', 'pre-wrap'],
            validate: null,
            units: null
        },
        'text-decoration': {
            version: 1,
            group: 'text decoration',
            definition: 'Specifies the decoration added to text',
            values: ['none', 'underline', 'overline', 'line-through'],
            validate: null,
            units: null
        },
        'text-shadow': {
            version: 3,
            group: 'text decoration',
            definition: 'Adds shadow to text',
            values: null,
            validate: null,
            units: null,
            fields: {
                'h-shadow': {
                    units: 'px'
                },
                'v-shadow': {
                    units: 'px'
                },
                blur: {
                    units: 'px'
                },
                spread: {
                    units: 'px'
                },
                color: {
                    values: this.colors
                }
            }
        },
        'font-family': {
            version: 1,
            group: 'font',
            definition: 'Specifies the font family or group of fonts for text',
            values: ['Georgia, serif', '"Palatino Linotype", "Book Antiqua", Palatino, serif', '"Times New Roman", Times, serif', 'Arial, Helvetica, sans-serif', '"Arial Black", Gadget, sans-serif', '"Comic Sans MS", cursive, sans-serif', 'Impact, Charcoal, sans-serif', '"Lucida Sans Unicode", "Lucida Grande", sans-serif', 'Tahoma, Geneva, sans-serif', '"Trebuchet MS", Helvetica, sans-serif', 'Verdana, Geneva, sans-serif', '"Courier New", Courier, monospace', '"Lucida Console", Monaco, monospace'],
            validate: 'alphaspaces',
            units: null
        },
        'font-size': {
            version: 1,
            group: 'font',
            definition: 'Specifies the font size of text',
            values: null,
            validate: 'numeric',
            units: ['px', 'pt', 'em', 'cm', '%']
        },
        'font-weight': {
            version: 1,
            group: 'font',
            definition: 'Specifies the weight or thickness of a font',
            values: ['normal', 'bold', 'bolder', 'lighter', '100', '200', '300', '400', '500', '600', '700', '800', '900'],
            validate: null,
            units: null
        },
        'font-style': {
            version: 1,
            group: 'font',
            definition: 'Specifies the font style for text',
            values: ['normal', 'italic', 'oblique'],
            validate: null,
            units: null
        },
        'font-variant': {
            version: 1,
            group: 'font',
            definition: 'Specifies whether or not a text should be displayed in a small-caps font',
            values: ['normal', 'small-caps'],
            validate: null,
            units: null
        },
        'list-style-image': {
            version: 1,
            group: 'lists',
            definition: 'Specifies an image as the list-item marker',
            values: null,
            validate: 'cssurl',
            units: null
        },
        'list-style-position': {
            version: 1,
            group: 'lists',
            definition: 'Specifies if the list-item markers should appear inside or outside the content flow',
            values: ['inside', 'outside'],
            validate: null,
            units: null
        },
        'list-style-type': {
            version: 1,
            group: 'lists',
            definition: '',
            values: ['armenian', 'cjk-ideographic', 'decimal', 'decimal-leading-zero', 'georgian', 'hebrew', 'hiragana', 'hiragana-iroha', 'katakana', 'katakana-iroha', 'lower-alpha', 'lower-greek', 'lower-latin', 'lower-roman', 'none', 'upper-alpha', 'upper-latin', 'upper-roman'],
            validate: null,
            units: null
        }
    };

    var contentModels = {
        metadata: {
            description: "Modify the presentation or the behavior of the rest of the document, set up links to other documents, or convey other out of band information. HTML Metadata Elements. Elements restricted for use only where metadata content is allowed",
            elements: ["base", "command", "link", "meta", "noscript", "script", "style", "title"]
        },
        flow: {
            description: "Typically contain text or embedded content. The body element, which is the beginning of the visible content of the document, expects content that consists of flow content. Flow content is less restrictive than phrasing content because sectioning content, heading and footer elements as well as text and the HTML Element that can be used in phrasing content can be used where flow content is permitted. Flow content in HTML is made up of flow elements, phrasing content and text content, possibly interspersed with HTML comments and/or white space.",
            elements: ["a", "abbr", "address", "article", "aside", "audio", "b", "bdo", "bdi", "blockquote", "br", "button", "canvas", "cite", "code", "command", "data", "datalist", "del", "details", "dfn", "div", "dl", "em", "embed", "fieldset", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "main", "map", "mark", "math", "menu", "meter", "nav", "noscript", "object", "ol", "output", "p", "pre", "progress", "q", "ruby", "s", "samp", "script", "section", "select", "small", "span", "strong", "sub", "sup", "svg", "table", "template", "textarea", "time", "ul", "var", "video", "wbr", "textnode"]
        },
        sectioning: {
            description: "Create a section in the current outline that defines the scope of HTML Header Elements, HTML Footer Elements, and Heading Content.",
            elements: ["article", "aside", "nav", "section"]
        },
        heading: {
            description: "Defines the title of a section, whether marked by an explicit sectioning content element or implicitly defined by the heading content itself.",
            elements: ["h1", "h2", "h3", "h4", "h5", "h6", "hgroup"]
        },
        phrasing: {
            description: "Defines the text and the mark-up it contains. Runs of phrasing content make up paragraphs. Phrasing content is the content at the lower level that consists of text and HTML elements that mark up the text within paragraphs. Phrasing content is more restrictive than flow content, since there are many elements, such as block elements, that are not permitted in phrasing content.",
            elements: ["abbr", "audio", "b", "bdo", "br", "button", "canvas", "cite", "code", "command", "datalist", "dfn", "em", "embed", "i", "iframe", "img", "input", "kbd", "keygen", "label", "mark", "math", "meter", "noscript", "object", "output", "progress", "q", "ruby", "samp", "script", "select", "small", "span", "strong", "sub", "sup", "svg", "textarea", "time", "var", "video", "wbr"]
        },
        embedded: {
            description: "Imports another resource or inserts content from another mark-up language or namespace into the document.",
            elements: ["audio", "canvas", "embed", "figure", "figcaption", "iframe", "img", "math", "object", "svg", "track", "video"]
        },
        interactive: {
            description: "Specifically designed for user interaction.",
            elements: ["a", "audio", "button", "details", "embed", "iframe", "input", "keygen", "label", "select", "textarea", "video"]
        },
        form: {
            description: "Specifically have a form owner, exposed by a form attribute. A form owner is either the containing HTML Form Element or the HTML Element whose id is specified in the HTML Form Element attribute.",
            elements: ["button", "fieldset", "input", "keygen", "label", "meter", "object", "output", "progress", "select", "textarea"]
        },
        listed: {
            description: "HTML Form Control Elements.",
            elements: ["button", "fieldset", "input", "keygen", "object", "output", "select", "textarea"]
        },
        labelable: {
            description: "Elements that can be associated with HTML Label Elements.",
            elements: ["button", "input", "keygen", "meter", "output", "progress", "select", "textarea"]
        },
        submittable: {
            description: "Elements that can be used for constructing the form data set when the HTML Form Element is submitted.",
            elements: ["button", "input", "keygen", "object", "select", "textarea"]
        },
        resettable: {
            description: "Elements that can be affected when a form is reset.",
            elements: ["input", "keygen", "output", "select", "textarea"]
        },
        transparent: {
            description: "If an element has a transparent content model, then its contents must be structured such that they would be valid HTML 5, even if the transparent element were removed and replaced by the child elements.",
            elements: ["a", "audio", "canvas", "del", "ins", "map", "noscript", "object", "video"]
        },
        palpable: {
            description: "As a general rule, elements whose content model allows any flow content or phrasing content should have at least one child node that is palpable content and that does not have the hidden attribute specified. This requirement is not a hard requirement, however, as there are many cases where an element can be empty legitimately, for example when it is used as a placeholder which will later be filled in by a script, or when the element is part of a template and would on most pages be filled in but on some pages is not relevant.",
            elements: ["a", "abbr", "address", "article", "aside", "audio", "b", "bdi", "bdo", "blockquote", "button", "canvas", "cite", "code", "details", "dfn", "div", "dl", "em", "embed", "fieldset", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "map", "mark", "math", "menu", "meter", "nav", "object", "ol", "output", "p", "pre", "progress", "q", "ruby", "s", "samp", "section", "select", "small", "span", "strong", "sub", "sup", "svg", "table", "textarea", "time", "u", "ul", "var", "video"]
        }
    };

    var elements = {
        a: {
            title: "HTML Anchor Element",
            description: "Defines a hyperlink, the named target destination for a hyperlink, or both.",
            disclaimer: [
                "The most important attribute of the HTML Anchor &lt;a&gt; Element is the href attribute, which indicates the link's destination.",
                "An unvisited link is underlined and blue by default in most browsers.",
                "A visited link is underlined and purple by default in most browsers.",
                "An active link is underlined and red by default in most browsers.",
                "The following attributes: download, hreflang, media, rel, target, and type cannot be present if the href attribute is not present.",
                "A linked page is normally displayed in the current browser window, unless you specify another target."
            ],
            display: "inline",
            model: [
                "flow",
                "phrasing",
                "interactive",
                "palpable"
            ],
            children: [
                "flow",
                "phrasing"
            ],
            parent: [
                "flow",
                "phrasing"
            ],
            ancestor: [
                "body"
            ],
            attributes: [
                "href",
                "hreflang",
                "media",
                "rel",
                "target",
                "type"
            ],
            required: [
                "href"
            ],
            tags: true,
            interface: [
                "HTMLAnchorElement"
            ],
            links: [
                "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a",
                "http://www.w3schools.com/tags/tag_a.asp"
            ]
        },
        abbr: {
            title: "HTML Abbreviation Element",
            description: "Represents an abbreviation and optionally provides a full description for it. If present, the title attribute must contain this full description and nothing else.",
            disclaimer: [
                "Use the title attribute to define the full description of the abbreviation. Many user agents present this as a tooltip.",
                "By marking up abbreviations you can give useful information to browsers, spell checkers, translation systems and search-engine indexers."
            ],
            display: "inline",
            model: [
                "flow",
                "phrasing",
                "palpable"
            ],
            children: [
                "phrasing"
            ],
            parent: [
                "phrasing"
            ],
            ancestor: [
                "body"
            ],
            attribute: null,
            required: [
                "title"
            ],
            tags: true,
            interface: [
                "HTMLElement",
                "HTMLSpanElement"
            ],
            links: [
                "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/abbr",
                "http://www.w3schools.com/tags/tag_abbr.asp"
            ]
        },
        address: {
            title: "HTML Address Element",
            description: "May be used by authors to supply contact information for its nearest HTML Article &lt;article&gt; or Body &lt;body&gt; ancestor; in the latter case, it defines the contact information for the author/owner of a document.",
            disclaimer: [
                "To represent an arbitrary address, one that is not related to the contact information, use a HTML Paragraph &lt;p&gt; Element rather than the HTML &lt;address&gt; Address element.",
                "This element should not contain more information than the contact information, like a publication date (which belongs in a HTML Time &lt;time&gt; Element).",
                "Typically the HTML Address &lt;address&gt; Element can be placed inside the HTML Footer &lt;footer&gt; Element of the current section, if any.",
                "The text in the HTML Address &lt;address&gt; Element element usually renders in italic. Most browsers will add a line break before and after the address element."
            ],
            display: "block",
            model: [
                "flow",
                "phrasing",
                "palpable"
            ],
            children: [
                "phrasing"
            ],
            parent: [
                "phrasing"
            ],
            ancestor: [
                "body"
            ],
            attribute: null,
            required: null,
            tags: true,
            interface: [
                "HTMLElement",
                "HTMLSpanElement"
            ],
            links: [
                "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/address",
                "http://www.w3schools.com/tags/tag_address.asp"
            ]
        },
        area: {
            title: "HTML Area Element",
            description: "Defines a hot-spot region on an HTML Image &lt;image&gt; Element, and optionally associates it with a hypertext link. This element is used only within a HTML Map &lt;map&gt; Element.",
            disclaimer: [
                "The usemap attribute in the HTML Image &lt;image&gt; Element is associated with the HTML Map &lt;map&gt; Element's name attribute, and creates a relationship between the &lt;image&gt; and the &lt;map&gt;."
            ],
            display: "hidden",
            model: [
                "flow",
                "phrasing"
            ],
            children: null,
            parent: [
                "phrasing"
            ],
            ancestor: [
                "map",
                "body"
            ],
            attribute: [
                "alt",
                "coords",
                "download",
                "href",
                "hreflang",
                "media",
                "rel",
                "shape",
                "target",
                "type"
            ],
            required: [
                "alt",
                "coords",
                "href",
                "shape"
            ],
            tags: false,
            interface: [
                "HTMLAreaElement"
            ],
            links: [
                "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/area",
                "http://www.w3schools.com/tags/tag_area.asp"
            ]
        },
        article: {
            title: "HTML Article Element",
            description: "Represents a self-contained composition in a document, page, application, or site, which is intended to be independently distributable or reusable, e.g., in syndication. This could be a forum post, a magazine or newspaper article, a blog entry, a user-submitted comment, an interactive widget or gadget, or any other independent item of content. ",
            disclaimer: [
                "Each HTML Article &lt;article&gt; Element should be identified, typically by including a heading (HTML &lt;h1&gt; - &lt;h6&gt; Element) as a child of the HTML Article &lt;article&gt; Element.",
                "When an HTML Article &lt;article&gt; Element is nested, the inner element represents an article related to the outer element. For example, the comments of a blog post can be HTML Article &lt;article&gt; Elements nested in the HTML Article &lt;article&gt; Element representing the blog post.",
                "Author information of an HTML Article &lt;article&gt; Element element can be provided through the HTML Address &lt;address&gt; Element, but it doesn't apply to nested HTML Article &lt;article&gt; Element.",
                "The publication date and time of an HTML Article &lt;article&gt; Element element can be described using the pubdate attribute of a HTML Time &lt;time&gt; Element."
            ],
            display: "block",
            model: [
                "flow",
                "sectioning",
                "palpable"
            ],
            children: [
                "flow"
            ],
            parent: [
                "flow"
            ],
            ancestor: [
                "body"
            ],
            attribute: null,
            required: null,
            tags: true,
            interface: [
                "HTMLElement"
            ],
            links: [
                "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/article",
                "http://www.w3schools.com/tags/tag_article.asp"
            ]
        },
        aside: {
            title: "HTML Aside Element",
            description: "Represents a section of the page with content connected tangentially to the rest , which could be considered separate from that content. These sections are often represented as sidebars or inserts. They often contain the definitions on the sidebars, such as definitions from the glossary ; there may also be other types of information , such as related advertisements ; the biography of the author ; web applications ; profile information or related links on the blog.",
            disclaimer: [
                "Do not use the HTML Aside &lt;aside&gt; Element to tag parenthesized text, as this kind of text is considered part of the main flow.",
                "The HTML Aside &lt;aside&gt; Element's content should be related to the surrounding content.",
                "The HTML Aside &lt;aside&gt; Element's content could be placed as a sidebar in an HTML Article &lt;article&gt; Element."
            ],
            display: "block",
            model: [
                "flow",
                "sectioning",
                "palpable"
            ],
            children: [
                "flow"
            ],
            parent: [
                "flow"
            ],
            ancestor: [
                "body"
            ],
            attribute: null,
            required: null,
            tags: true,
            interface: [
                "HTMLElement"
            ],
            links: [
                "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/aside",
                "http://www.w3schools.com/tags/tag_aside.asp"
            ]
        },
        audio: {
            title: "HTML Audio Element",
            description: "The HTML Audio &lt;audio&gt; Element is used to embed sound content in documents. It may contain several audio sources 'MP3, Wav, and Ogg', represented using the src attribute or the HTML Source &lt;source&gt; Element; the browser will choose the most suitable one.",
            disclaimer: [
                "Fallback content for browser not supporting the HTML Audio &lt;audio&gt; Element can be added too.",
                "Any text inside the HTML Audio &lt;audio&gt; Element will be displayed in browsers that do not support the HTML Audio &lt;audio&gt; Element."
            ],
            display: "inline",
            model: [
                "flow",
                "interactive",
                "embedded",
                "phrasing",
                "palpable"
            ],
            children: [
                "transparent"
            ],
            parent: [
                "embedded"
            ],
            ancestor: [
                "body"
            ],
            attribute: [
                "autoplay",
                "buffered",
                "controls",
                "loop",
                "muted",
                "played",
                "preload",
                "src",
                "volume"
            ],
            required: null,
            tags: true,
            interface: [
                "HTMLAudioElement"
            ],
            links: [
                "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio",
                "http://www.w3schools.com/tags/tag_audio.asp"
            ]
        },
        b: {
            title: "HTML Bold Element",
            description: "Represents a span of text stylistically different from normal text, without conveying any special importance or relevance. It is typically used for keywords in a summary, product names in a review, or other spans of text whose typical presentation would be boldfaced. Another example of its use is to mark the lead sentence of each paragraph of an article.",
            disclaimer: [
                "According to the HTML 5 specification, the HTML Bold &lt;b&gt; Element should be used as a LAST resort when no other element is more appropriate.",
                "The HTML 5 specification states that headings should be denoted with the HTML H1 &lt;h1&gt; to H6 &lt;h6&gt; Elements, emphasized text should be denoted with the HTML Emphasis &lt;em&gt; Element, important text should be denoted with the HTML Strong &lt;strong&gt; Element, and marked/highlighted text should use the HTML Marked &lt;mark&gt; Element tag."
            ],
            display: "inline",
            model: [
                "flow",
                "phrasing",
                "palpable"
            ],
            children: [
                "phrasing"
            ],
            parent: [
                "phrasing"
            ],
            ancestor: [
                "body"
            ],
            attribute: [
                "title"
            ],
            required: null,
            tags: true,
            interface: [
                "HTMLElement",
                "HTMLSpanElement"
            ],
            links: [
                "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/b",
                "http://www.w3schools.com/tags/tag_b.asp"
            ]
        },
        base: {
            title: "HTML Base Element",
            description: "Specifies the base URL to use for all relative URLs contained within a document.There is maximum one HTML Base &lt;base/&gt; Element in a document.",
            disclaimer: [
                "The base URL of a document can be queried from a script using document.baseURI.",
                "There can be at maximum one HTML Base &lt;base/&gt; Element in a document, and it must be inside the HTML Head &lt;head&gt; Element.",
                "Put the HTML Base &lt;base/&gt; Element as the first element inside the HTML Head &lt;head&gt; Element, so that other elements in the head section uses the information from the HTML Base &lt;base/&gt; Element.",
                "If the HTML Base &lt;base/&gt; Element tag is present, it must have either an href attribute or a target attribute, or both."
            ],
            display: "void",
            model: [
                "metadata"
            ],
            children: null,
            parent: null,
            ancestor: [
                "head"
            ],
            attribute: [
                "href",
                "target"
            ],
            required: [
                "href",
                "target"
            ],
            tags: null,
            interface: [
                "HTMLBaseElement"
            ],
            links: [
                "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/base",
                "http://www.w3schools.com/tags/tag_base.asp"
            ]
        },
        blockquote: {
            title: "HTML Block Quotation Element",
            description: "Indicates that the enclosed text is an extended quotation. Usually, this is rendered visually by indentation. A URL for the source of the quotation may be given using the cite attribute, while a text representation of the source can be given using the HTML Citation &lt;cite/&gt; Element.",
            disclaimer: [
                "Use &lt;q&gt; for inline (short) quotations.",
                "To change &lt;blockquote&gt; indent, use CSS margin property."
            ],
            display: "inline",
            model: [
                "flow",
                "sectioning",
                "palpable"
            ],
            children: [
                "flow"
            ],
            parent: [
                "flow"
            ],
            ancestor: [
                "body"
            ],
            attribute: [
                "cite"
            ],
            required: null,
            tags: true,
            interface: [
                "HTMLQuoteElement"
            ],
            links: [
                "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/blockquote",
                "http://www.w3schools.com/tags/tag_blockquote.asp"
            ]
        },
        body: {
            title: "HTML Body Element",
            description: "Represents the content of an HTML document; defines the document's body. It contains all the contents of an HTML document, such as text, hyperlinks, images, tables, lists, etc.",
            disclaimer: [
                "There is only one &lt;body&gt; element in a document.",
                "Most browsers will display a margin of 8px around the HTML Body Element.",
                "",
                "",
                "",
                ""
            ],
            display: "inline",
            model: [
                "sectioning"
            ],
            children: [
                "flow"
            ],
            parent: null,
            ancestor: [
                "html"
            ],
            required: null,
            attribute: null,
            tags: true,
            interface: [
                "HTMLBodyElement"
            ],
            links: [
                "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/body",
                "http://www.w3schools.com/tags/tag_body.asp"
            ]
        },
        br: {
            title: "HTML Line Break Element",
            description: "Produces a line break in text (carriage-return). It is useful for writing a poem or an address, where the division of lines is significant. It inserts a single line break.",
            disclaimer: [
                "It is an empty tag which means that it has no end tag.",
                "Do not use HTML Line Break &lt;br&gt; Element to increase the gap between lines of text; use the CSS margin property or the HTML Paragraph &lt;p&gt; Element."
            ],
            display: "block",
            model: [
                "flow",
                "phrasing"
            ],
            children: null,
            parent: [
                "phrasing"
            ],
            ancestor: [
                "body"
            ],
            attribute: [
                "title"
            ],
            required: null,
            tags: null,
            interface: [
                "HTMLBRElement"
            ],
            links: [
                "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/br",
                "http://www.w3schools.com/tags/tag_br.asp"
            ]
        },
        button: {
            title: "HTML Button Element",
            description: "Represents a clickable button.",
            disclaimer: [
                "Inside a &lt;button&gt; element you can put content, like text or images. This is the difference between this element and buttons created with the &lt;input&gt; element.",
                "Always specify the type attribute for a &lt;button&gt; element. Different browsers use different default types for the &lt;button&gt; element.",
                "If you use the &lt;button&gt; element in an HTML form, different browsers may submit different values. Use &lt;input&gt; to create buttons in an HTML form.",
                "&lt;button&gt; elements are much easier to style than &lt;input&gt; elements. You can add inner HTML content (think &lt;em&gt;, &lt;strong&gt; or even &lt;img&gt;), and make use of :after and :before pseudo-element to achieve complex rendering while &lt;input&gt; only accepts a text value attribute."
            ],
            display: "inline",
            model: [
                "flow",
                "phrasing",
                "palpable",
                "interactive",
                "form",
                "labelable",
                "submittable"
            ],
            children: [
                "phrasing"
            ],
            parent: [
                "phrasing"
            ],
            ancestor: [
                "body"
            ],
            attribute: [
                "autofocus",
                "disabled",
                "form",
                "formaction",
                "form",
                "formenctype",
                "formmethod",
                "formnovalidate",
                "formtarget",
                "name",
                "type",
                "form",
                "value"
            ],
            required: [
                "type"
            ],
            tags: true,
            interface: [
                "HTMLButtonElement"
            ],
            links: [
                "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button",
                "http://www.w3schools.com/tags/tag_button.asp"
            ]
        },
        canvas: {
            title: "HTML Canvas Element",
            description: "The HTML Canvas Element can be used to draw graphics via scripting (usually JavaScript). For example, it can be used to draw graphs, make photo compositions or even perform animations. ",
            disclaimer: [
                "You may (and should) provide alternate content inside the HTML Canvas Element. That content will be rendered both on older browsers that don't support canvas and in browsers with JavaScript disabled."
            ],
            display: "block",
            model: [
                "flow",
                "phrasing",
                "embedded",
                "palpable"
            ],
            children: [
                "transparent"
            ],
            parent: [
                "phrasing"
            ],
            ancestor: [
                "body"
            ],
            attribute: [
                "height",
                "width"
            ],
            required: [
                "height",
                "width"
            ],
            tags: true,
            interface: [
                "HTMLCanvasElement"
            ],
            links: [
                "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/canvas",
                "http://www.w3schools.com/tags/tag_canvas.asp"
            ]
        },
        div: {
            title: "HTML Document Division Element",
            description: "The HTML Document Division Element is the generic container for flow content, which does not inherently represent anything. It can be used to group elements for styling purposes (using the class or id attributes), or because they share attribute values, such as lang. It should be used only when no other semantic element (such as &lt;article&gt; or &lt;nav&gt;) is appropriate.",
            disclaimer: [
                "The &lt;div&gt; tag is used to group block-elements to format them with CSS.",
                "The &lt;div&gt; element is very often used together with CSS, to layout a web page.",
                "By default, browsers always place a line break before and after the &lt;div&gt; element. However, this can be changed with CSS."
            ],
            display: "block",
            model: [
                "flow",
                "palpable"
            ],
            children: [
                "flow"
            ],
            parent: [
                "flow"
            ],
            ancestor: [
                "body"
            ],
            attribute: null,
            required: null,
            tags: true,
            interface: [
                "HTMLDivElement"
            ],
            links: [
                "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div",
                "http://www.w3schools.com/tags/tag_div.asp"
            ]
        },
        em: {
            title: "HTML Emphasis Element",
            description: "The HTML Emphasis Element marks text that has stress emphasis. The &lt;em&gt; element can be nested, with each level of nesting indicating a greater degree of emphasis.",
            disclaimer: [
                "Typically this element is displayed in italic type. However, it should not be used simply to apply italic styling; use the CSS styling for that purpose. Use the &lt;cite&gt; element to mark the title of a work (book, play, song, etc.); it is also typically styled with italic type, but carries different meaning. Use the &lt;strong&gt; element to mark text that has greater importance than surrounding text."
            ],
            display: "inline",
            model: [
                "flow",
                "phrasing",
                "palpable"
            ],
            children: [
                "phrasing"
            ],
            parent: [
                "phrasing"
            ],
            ancestor: [
                "body"
            ],
            attribute: null,
            required: null,
            tags: true,
            interface: [
                "HTMLElement",
                "HTMLSpanElement"
            ],
            links: [
                "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/em",
                "http://www.w3schools.com/tags/tag_em.asp"
            ]
        },
        footer: {
            title: "HTML Footer Element",
            description: "The HTML Footer Element represents a footer for its nearest sectioning content or sectioning root element (i.e, its nearest parent &lt;article&gt;, &lt;aside&gt;, &lt;nav&gt;, &lt;section&gt;, &lt;blockquote&gt;, &lt;body&gt;, &lt;details&gt;, &lt;fieldset&gt;, &lt;figure&gt;, &lt;td&gt;). A footer typically contains information about the author of the section, copyright data or links to related documents.",
            disclaimer: [
                "Enclose information about the author in an &lt;address&gt; element that can be included into the &lt;footer&gt; element.",
                "The &lt;footer&gt; element is not sectioning content and therefore doesn't introduce a new section in the outline.",
                "The HTML Footer should have no &lt;footer&gt; or &lt;header&gt; descendants.",
                "The &lt;footer&gt; element must not be a descendant of an &lt;address&gt;, &lt;header&gt; or another &lt;footer&gt; element.",
                "",
                ""
            ],
            display: "block",
            model: [
                "flow",
                "palpable"
            ],
            children: [
                "flow"
            ],
            parent: [
                "phrasing"
            ],
            ancestor: [
                "body"
            ],
            attribute: null,
            required: null,
            tags: true,
            interface: [
                "HTMLElement"
            ],
            links: [
                "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/footer",
                "http://www.w3schools.com/tags/tag_footer.asp"
            ]
        },
        form: {
            title: "HTML Form Element",
            description: "The HTML Form Element represents a document section that contains interactive controls to submit information to a web server.",
            disclaimer: [
                "It is possible to use the :valid and :invalid CSS pseudo-classes to style a HTML Form Element.",
                "The HTML Form Element cannot contain another HTML Form Element. ",
                "",
                "",
                "",
                ""
            ],
            display: "block",
            model: [
                "flow",
                "palpable"
            ],
            children: [
                "flow"
            ],
            parent: [
                "flow"
            ],
            ancestor: [
                "body"
            ],
            attribute: [
                "accept-charset",
                "action",
                "autocomplete",
                "enctype",
                "method",
                "name",
                "novalidate",
                "target"
            ],
            required: [
                "action",
                "enctype",
                "method",
                "target"
            ],
            tags: true,
            interface: [
                "HTMLFormElement"
            ],
            links: [
                "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form",
                "http://www.w3schools.com/tags/tag_form.asp"
            ]
        },
        h1: {
            title: "HTML Heading Element",
            description: "A heading element briefly describes the topic of the section it introduces. Heading information may be used by user agents, for example, to construct a table of contents for a document automatically.",
            disclaimer: [
                "Do not use lower levels to decrease heading font size: use the CSS font-size property instead.",
                "Avoid skipping heading levels: always start from &lt;h1&gt;, next use &lt;h2&gt; and so on. Also try to have only one first level heading on a page.",
                "Use the &lt;section&gt; element to define the outline of a document. Headings provide titles for sections and subsections. You can also group a heading and its content using the &lt;div&gt; element.",
                "&lt;h1&gt; defines the most important heading.",
                "&lt;h6&gt; defines the least important heading.",
                "Default CSS font-size property is 2em"
            ],
            display: "inline",
            model: [
                "flow",
                "heading",
                "palpable"
            ],
            children: [
                "phrasing"
            ],
            parent: [
                "flow"
            ],
            ancestor: [
                "body"
            ],
            attribute: [
                "title"
            ],
            required: null,
            tags: true,
            interface: [
                "HTMLHeadingElement"
            ],
            links: [
                "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/h1",
                "http://www.w3schools.com/tags/tag_hn.asp"
            ]
        },
        h2: {
            title: "HTML Heading Element",
            description: "A heading element briefly describes the topic of the section it introduces. Heading information may be used by user agents, for example, to construct a table of contents for a document automatically.",
            disclaimer: [
                "Do not use lower levels to decrease heading font size: use the CSS font-size property instead.",
                "Avoid skipping heading levels: always start from &lt;h1&gt;, next use &lt;h2&gt; and so on. Also try to have only one first level heading on a page.",
                "Use the &lt;section&gt; element to define the outline of a document. Headings provide titles for sections and subsections. You can also group a heading and its content using the &lt;div&gt; element.",
                "&lt;h1&gt; defines the most important heading.",
                "&lt;h6&gt; defines the least important heading.",
                "Default CSS font-size property is 1.5em"
            ],
            display: "inline",
            model: [
                "flow",
                "heading",
                "palpable"
            ],
            children: [
                "phrasing"
            ],
            parent: [
                "flow"
            ],
            ancestor: [
                "body"
            ],
            attribute: [
                "title"
            ],
            required: null,
            tags: true,
            interface: [
                "HTMLHeadingElement"
            ],
            links: [
                "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/h2",
                "http://www.w3schools.com/tags/tag_hn.asp"
            ]
        },
        h3: {
            title: "HTML Heading Element",
            description: "A heading element briefly describes the topic of the section it introduces. Heading information may be used by user agents, for example, to construct a table of contents for a document automatically.",
            disclaimer: [
                "Do not use lower levels to decrease heading font size: use the CSS font-size property instead.",
                "Avoid skipping heading levels: always start from &lt;h1&gt;, next use &lt;h2&gt; and so on. Also try to have only one first level heading on a page.",
                "Use the &lt;section&gt; element to define the outline of a document. Headings provide titles for sections and subsections. You can also group a heading and its content using the &lt;div&gt; element.",
                "&lt;h1&gt; defines the most important heading.",
                "&lt;h6&gt; defines the least important heading.",
                "Default CSS font-size property is 1.17em"
            ],
            display: "inline",
            model: [
                "flow",
                "heading",
                "palpable"
            ],
            children: [
                "phrasing"
            ],
            parent: [
                "flow"
            ],
            ancestor: [
                "body"
            ],
            attribute: [
                "title"
            ],
            required: null,
            tags: true,
            interface: [
                "HTMLHeadingElement"
            ],
            links: [
                "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/h3",
                "http://www.w3schools.com/tags/tag_hn.asp"
            ]
        },
        h4: {
            title: "HTML Heading Element",
            description: "A heading element briefly describes the topic of the section it introduces. Heading information may be used by user agents, for example, to construct a table of contents for a document automatically.",
            disclaimer: [
                "Do not use lower levels to decrease heading font size: use the CSS font-size property instead.",
                "Avoid skipping heading levels: always start from &lt;h1&gt;, next use &lt;h2&gt; and so on. Also try to have only one first level heading on a page.",
                "Use the &lt;section&gt; element to define the outline of a document. Headings provide titles for sections and subsections. You can also group a heading and its content using the &lt;div&gt; element.",
                "&lt;h1&gt; defines the most important heading.",
                "&lt;h6&gt; defines the least important heading.",
                "Default CSS font-size property is 1em"
            ],
            display: "inline",
            model: [
                "flow",
                "heading",
                "palpable"
            ],
            children: [
                "phrasing"
            ],
            parent: [
                "flow"
            ],
            ancestor: [
                "body"
            ],
            attribute: [
                "title"
            ],
            required: null,
            tags: true,
            interface: [
                "HTMLHeadingElement"
            ],
            links: [
                "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/h4",
                "http://www.w3schools.com/tags/tag_hn.asp"
            ]
        },
        h5: {
            title: "HTML Heading Element",
            description: "A heading element briefly describes the topic of the section it introduces. Heading information may be used by user agents, for example, to construct a table of contents for a document automatically.",
            disclaimer: [
                "Do not use lower levels to decrease heading font size: use the CSS font-size property instead.",
                "Avoid skipping heading levels: always start from &lt;h1&gt;, next use &lt;h2&gt; and so on. Also try to have only one first level heading on a page.",
                "Use the &lt;section&gt; element to define the outline of a document. Headings provide titles for sections and subsections. You can also group a heading and its content using the &lt;div&gt; element.",
                "&lt;h1&gt; defines the most important heading.",
                "&lt;h6&gt; defines the least important heading.",
                "Default CSS font-size property is 0.83em"
            ],
            display: "inline",
            model: [
                "flow",
                "heading",
                "palpable"
            ],
            children: [
                "phrasing"
            ],
            parent: [
                "flow"
            ],
            ancestor: [
                "body"
            ],
            attribute: [
                "title"
            ],
            required: null,
            tags: true,
            interface: [
                "HTMLHeadingElement"
            ],
            links: [
                "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/h5",
                "http://www.w3schools.com/tags/tag_hn.asp"
            ]
        },
        h6: {
            title: "HTML Heading Element",
            description: "A heading element briefly describes the topic of the section it introduces. Heading information may be used by user agents, for example, to construct a table of contents for a document automatically.",
            disclaimer: [
                "Do not use lower levels to decrease heading font size: use the CSS font-size property instead.",
                "Avoid skipping heading levels: always start from &lt;h1&gt;, next use &lt;h2&gt; and so on. Also try to have only one first level heading on a page.",
                "Use the &lt;section&gt; element to define the outline of a document. Headings provide titles for sections and subsections. You can also group a heading and its content using the &lt;div&gt; element.",
                "&lt;h1&gt; defines the most important heading.",
                "&lt;h6&gt; defines the least important heading.",
                "Default CSS font-size property is 0.67em"
            ],
            display: "inline",
            model: [
                "flow",
                "heading",
                "palpable"
            ],
            children: [
                "phrasing"
            ],
            parent: [
                "flow"
            ],
            ancestor: [
                "body"
            ],
            attribute: [
                "title"
            ],
            required: null,
            tags: true,
            interface: [
                "HTMLHeadingElement"
            ],
            links: [
                "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/h6",
                "http://www.w3schools.com/tags/tag_hn.asp"
            ]
        },
        header: {
            title: "HTML Header Element",
            description: "The HTML Header Element represents a group of introductory or navigational aids. It may contain some heading elements but also other elements like a logo, wrapped section's header, a search form, and so on.",
            disclaimer: [
                "The &lt;header&gt; element is not sectioning content and therefore doesn't introduce a new section in the outline.",
                "A &lt;header&gt; tag cannot be placed within a &lt;footer&gt;, &lt;address&gt; or another &lt;header&gt; element."
            ],
            display: "block",
            model: [
                "flow",
                "palpable"
            ],
            children: [
                "flow"
            ],
            parent: [
                "flow"
            ],
            ancestor: [
                "body"
            ],
            attribute: null,
            required: null,
            tags: true,
            interface: [
                "HTMLElement"
            ],
            links: [
                "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/header",
                "http://www.w3schools.com/tags/tag_header.asp",
                "http://html5doctor.com/the-header-element/"
            ]
        },
        hr: {
            title: "HTML Horizontal Rule Element",
            description: "HTML Horizontal Rule Element represents a thematic break between paragraph-level elements (for example, a change of scene in a story, or a shift of topic with a section). In previous versions of HTML, it represented a horizontal rule. It may still be displayed as a horizontal rule in visual browsers, but is now defined in semantic terms, rather than presentational terms.",
            disclaimer: [
                "To change look of rule or gaps between it and paragraphs, use CSS Margin, Height, e.t.c."
            ],
            display: "block",
            model: [
                "flow"
            ],
            children: null,
            parent: [
                "flow"
            ],
            ancestor: [
                "body"
            ],
            attribute: null,
            required: null,
            tags: true,
            interface: [
                "HTMLHRElement"
            ],
            links: [
                "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/hr",
                "http://www.w3schools.com/tags/tag_hr.asp"
            ]
        },
        i: {
            title: "HTML Italics Element",
            description: "HTML Italics Element represents a range of text that is set off from the normal text for some reason, for example, technical terms, foreign language phrases, or fictional character thoughts. It is typically displayed in italic type.",
            disclaimer: [
                "In earlier versions of the HTML specification, the &lt;i&gt; tag was merely a presentational element used to display text in italics, much like the &lt;b&gt; tag was used to display text in bold letters. This is no longer true, as these tags now define semantics rather than typographic appearance. The &lt;i&gt; tag should represent a range of text with a different semantic meaning whose typical typographic representation is italicized.  This means a browser will typically still display its contents in italic type, but is, by definition, no longer required to.",
                "It is a good idea to use the class attribute to identify why the element is being used, so that if the presentation needs to change at a later date, it can be done selectively with style sheets."
            ],
            display: "inline",
            model: [
                "flow",
                "phrasing",
                "palpable"
            ],
            children: [
                "phrasing"
            ],
            parent: [
                "phrasing"
            ],
            ancestor: [
                "body"
            ],
            attribute: null,
            required: null,
            tags: true,
            interface: [
                "HTMLElement",
                "HTMLSpanElement"
            ],
            links: [
                "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/i",
                "http://www.w3schools.com/tags/tag_i.asp"
            ]
        },
        iframe: {
            title: "HTML Inline Frame Element",
            description: "The HTML Inline Frame Element represents a nested browsing context, effectively embedding another HTML page into the current page. Each browsing context has its own session history and active document. The browsing context that contains the embedded content is called the parent browsing context. The top-level browsing context (which has no parent) is typically the browser window.",
            disclaimer: [
                "To deal with browsers that do not support &lt;iframe&gt;, add a text between the opening &lt;iframe&gt; tag and the closing &lt;/iframe&gt; tag.",
                "Use CSS to style the &lt;iframe&gt; (even to include scrollbars).",
                "",
                "",
                "",
                ""
            ],
            display: "inline",
            model: [
                "flow",
                "phrasing",
                "embedded",
                "interactive",
                "palpable"
            ],
            children: [
                "html"
            ],
            parent: [
                "embedded"
            ],
            ancestor: [
                "body"
            ],
            attribute: [
                "allowfullscreen",
                "height",
                "name",
                "sandbox",
                "seamless",
                "srcdoc",
                "width"
            ],
            required: [
                "src"
            ],
            tags: true,
            interface: [
                "HTMLIFrameElement"
            ],
            links: [
                "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe",
                "http://www.w3schools.com/tags/tag_iframe.asp"
            ]
        },
        img: {
            title: "HTML Image Element",
            description: "The HTML Image Element represents an image of the document.",
            disclaimer: [
                "Browsers do not always display the image referenced by the element. This is the case for non-graphical browsers (including those used by people with vision impairments), or if the user chooses not to display images, or if the browser is unable to display the image because it is invalid or an unsupported type. In these cases, the browser may replace the image with the text defined in this element's alt attribute.",
                "Regarding CSS, an &lt;img&gt; is a replaced element. It has no baseline, meaning, when used in an inline formatting context with vertical-align: baseline, the bottom of the image will be posed on the container's baseline.",
                "Depending of its type, an image may have an intrinsic dimension, but this is not a necessary condition: a SVG image has no intrinsic dimension, a raster image has one.",
                "Images are not technically inserted into an HTML page, images are linked to HTML pages. The &lt;img&gt; tag creates a holding space for the referenced image.",
                "To link an image to another document, simply nest the &lt;img&gt; tag inside &lt;a&gt; tags."
            ],
            display: "inline",
            model: [
                "flow",
                "phrasing",
                'embedded',
                "palpable"
            ],
            children: null,
            parent: [
                "embedded"
            ],
            ancestor: [
                "body"
            ],
            attribute: [
                "alt",
                "crossorigin",
                "height",
                "ismap",
                "src",
                "srcsetHTML5",
                "width",
                "usemap"
            ],
            required: [
                "alt",
                "src"
            ],
            tags: null,
            interface: [
                "HTMLImageElement"
            ],
            links: [
                "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img",
                "http://www.w3schools.com/tags/tag_img.asp"
            ]
        },
        input: {
            title: "HTML Input Element",
            description: "The HTML Input Element is used to create interactive controls for web-based forms in order to accept data from the user. The semantics of an &lt;input&gt; varies considerably depending on the value of its type attribute.",
            disclaimer: [
                "The &lt;input&gt; elements are used within a &lt;form&gt; element to declare input controls that allow users to input data."
            ],
            display: "inline",
            model: [
                "flow",
                "listed",
                "submittable",
                "resettable",
                "form",
                "phrasing"
            ],
            children: null,
            parent: [
                "phrasing"
            ],
            ancestor: [
                "body"
            ],
            attribute: [
                "type",
                "accept",
                "autocomplete",
                "autofocus",
                "autosave",
                "checked",
                "disabled",
                "form",
                "formaction",
                "formenctype",
                "formmethod",
                "formnovalidate",
                "formtarget",
                "height",
                "inputmode",
                "list",
                "max",
                "maxlength",
                "min",
                "minlength",
                "multiple",
                "name",
                "pattern",
                "placeholder",
                "readonly",
                "required",
                "selectionDirection",
                "size",
                "spellcheck",
                "src",
                "step",
                "tabindex",
                "value",
                "width"
            ],
            required: [
                "type"
            ],
            tags: true,
            interface: [
                "HTMLInputElement"
            ],
            links: [
                "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input",
                "http://www.w3schools.com/tags/tag_input.asp"
            ]
        },
        label: {
            title: "HTML Label Element",
            description: "The HTML Label Element represents a caption for an item in a user interface. It can be associated with a control either by placing the control element inside the label element, or by using the for attribute. Such a control is called the labeled control of the label element.",
            disclaimer: [
                "The &lt;label&gt; element does not render as anything special for the user. However, it provides a usability improvement for mouse users, because if the user clicks on the text within the &lt;label&gt; element, it toggles the control.",
                "The 'for' attribute of the &lt;label&gt; tag should be equal to the id attribute of the related element to bind them together.",
                "A label can be bound to an element either by using the 'for' attribute, or by placing the element inside the &lt;label&gt; element.",
                "No descendant label elements. No labelable elements other than the labeled control are allowed."
            ],
            display: "inline",
            model: [
                "flow",
                "interactive",
                "form",
                "phrasing"
            ],
            children: [
                "phrasing"
            ],
            parent: [
                "phrasing"
            ],
            ancestor: [
                "body"
            ],
            attribute: [
                "accesskey",
                "for",
                "form"
            ],
            required: [
                "for"
            ],
            tags: true,
            interface: [
                "HTMLLabelElement"
            ],
            links: [
                "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label",
                "http://www.w3schools.com/tags/tag_label.asp"
            ]
        },
        li: {
            title: "HTML List Item Element",
            description: "The HTML List Item Element is used to represent a list item. It should be contained in an ordered list (&lt;ol&gt;), an unordered list (&lt;ul&gt;) or a menu (&lt;menu&gt;), where it represents a single entity in that list. In menus and unordered lists, list items are ordinarily displayed using bullet points. In ordered lists, they are usually displayed with some ascending counter on the left such as a number or letter.",
            disclaimer: [
                "",
                "",
                "",
                "",
                "",
                ""
            ],
            display: "inline",
            model: null,
            children: [
                "flow"
            ],
            parent: [
                "flow"
            ],
            ancestor: [
                "ol|ul|menu",
                "body"
            ],
            attribute: [
                "value"
            ],
            required: null,
            tags: true,
            interface: [
                "HTMLLIElement"
            ],
            links: [
                "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/li",
                "http://www.w3schools.com/tags/tag_li.asp"
            ]
        },
        map: {
            title: "HTML Map Element",
            description: "The HTML Map element is used with HTML Area &lt;area&gt; Elements to define an image map (a clickable link area).",
            disclaimer: [
                "The &lt;map&gt; tag is used to define a client-side image-map. An image-map is an image with clickable areas.",
                "The required name attribute of the &lt;map&gt; element is associated with the &lt;img&gt;'s usemap attribute and creates a relationship between the image and the map.",
                "The &lt;map&gt; element contains a number of &lt;area&gt; elements, that defines the clickable areas in the image map."
            ],
            display: "inline",
            model: [
                "flow",
                "phrasing",
                "palpable"
            ],
            children: [
                "transparent"
            ],
            parent: [
                "phrasing"
            ],
            ancestor: [
                "body"
            ],
            attribute: [
                "name"
            ],
            required: [
                "name"
            ],
            tags: true,
            interface: [
                "HTMLMapElement"
            ],
            links: [
                "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/map",
                "http://www.w3schools.com/tags/tag_map.asp"
            ]
        },
        nav: {
            title: "HTML Navigation Element",
            description: "The HTML Navigation Element represents a section of a page that links to other pages or to parts within the page: a section with navigation links.",
            disclaimer: [
                "Not all links of a document must be in a &lt;nav&gt; element, which is intended only for major block of navigation links; typically the &lt;footer&gt; element often has a list of links that don't need to be in a &lt;nav&gt; element.",
                "A document may have several &lt;nav&gt; elements, for example, one for site navigation and one for intra-page navigation.",
                "User agents, such as screen readers targeting disabled users, can use this element to determine whether to omit the initial rendering of this content.",
                "Browsers, such as screen readers for disabled users, can use this element to determine whether to omit the initial rendering of this content."
            ],
            display: "block",
            model: [
                "flow",
                "sectioning",
                "palpable"
            ],
            children: [
                "flow"
            ],
            parent: [
                "flow"
            ],
            ancestor: [
                "body"
            ],
            attribute: [
                "title"
            ],
            required: null,
            tags: true,
            interface: [
                "HTMLElement"
            ],
            links: [
                "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/nav",
                "http://www.w3schools.com/tags/tag_nav.asp"
            ]
        },
        ol: {
            title: "HTML Ordered List Element",
            description: "The HTML Ordered List Element represents an ordered list of items. Typically, ordered-list items are displayed with a preceding numbering, which can be of any form, like numerals, letters or Romans numerals or even simple bullets. This numbered style is not defined in the HTML description of the page, but in its associated CSS, using the list-style-type property.",
            disclaimer: [
                "There is no limitation to the depth and imbrication of lists defined with the &lt;ol&gt; and &lt;ul&gt; elements.",
                "The &lt;ol&gt; and &lt;ul&gt; both represent a list of items. They differ in the way that, with the &lt;ol&gt; element, the order is meaningful. As a rule of thumb to determine which one to use, try changing the order of the list items; if the meaning is changed, the &lt;ol&gt; element should be used, else the &lt;ul&gt; is adequate."
            ],
            display: "block",
            model: [
                "flow",
                "palpable"
            ],
            children: [
                "li"
            ],
            parent: [
                "flow"
            ],
            ancestor: [
                "body"
            ],
            attribute: [
                "reversed",
                "start",
                "type"
            ],
            required: null,
            tags: true,
            interface: [
                "HTMLOListElement"
            ],
            links: [
                "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ol",
                "http://www.w3schools.com/tags/tag_ol.asp"
            ]
        },
        p: {
            title: "HTML Paragraph Element",
            description: "The HTML Paragraph Element represents a paragraph of text. Paragraphs are block-level elements.",
            disclaimer: [
                "To change gaps between paragraphs use CSS margin property. Do not insert empty paragraphs elements or &lt;br&gt; between them.",
                "Browsers automatically add some space (margin) before and after each &lt;p&gt; element. The margins can be modified with CSS (with the margin properties)."
            ],
            display: "block",
            model: [
                "flow",
                "palpable"
            ],
            children: [
                "phrasing"
            ],
            parent: [
                "flow"
            ],
            ancestor: [
                "body"
            ],
            attribute: null,
            required: null,
            tags: true,
            interface: [
                "HTMLParagraphElement"
            ],
            links: [
                "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/p",
                "http://www.w3schools.com/tags/tag_p.asp"
            ]
        },
        s: {
            title: "HTML Strikethrough Element",
            description: "The HTML Strikethrough Element renders text with a strikethrough, or a line through it. Use the &lt;s&gt; element to represent things that are no longer relevant or no longer accurate. However, &lt;s&gt; is not appropriate when indicating document edits; for that, use the &lt;del&gt; and &lt;ins&gt; elements, as appropriate.",
            disclaimer: [
                "The &lt;del&gt; element is to be used instead if the data has been deleted.",
                "The CSS text-decoration property can be used to achieve the visual aspect of the &lt;s&gt; element."
            ],
            display: "inline",
            model: [
                "flow",
                "phrasing"
            ],
            children: [
                "phrasing"
            ],
            parent: [
                "phrasing"
            ],
            ancestor: [
                "body"
            ],
            attribute: null,
            required: null,
            tags: true,
            interface: [
                "HTMLElement",
                "HTMLSpanElement"
            ],
            links: [
                "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/s",
                "http://www.w3schools.com/tags/tag_s.asp"
            ]
        },
        section: {
            title: "HTML Section Element",
            description: "The HTML Section Element represents a generic section of a document, i.e., a thematic grouping of content, typically with a heading. Each &lt;section&gt; should be identified, typically by including a heading (h1-h6 element) as a child of the HTML Section Element.",
            disclaimer: [
                "If it makes sense to separately syndicate the content of a &lt;section&gt; element, use an &lt;article&gt; element instead.",
                "Do not use the &lt;section&gt; element as a generic container; this is what &lt;div&gt; is for, especially when the sectioning is only for styling purposes. A rule of thumb is that a section should logically appear in the outline of a document.",
                "Note that a &lt;section&gt; element must not be a descendant of an &lt;address&gt; element."
            ],
            display: "block",
            model: [
                "flow",
                "sectioning",
                "palpable"
            ],
            children: [
                "flow"
            ],
            parent: [
                "flow"
            ],
            ancestor: [
                "body"
            ],
            attribute: null,
            required: null,
            tags: true,
            interface: [
                "HTMLElement"
            ],
            links: [
                "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/section",
                "http://www.w3schools.com/tags/tag_section.asp"
            ]
        },
        span: {
            title: "HTML Span Element",
            description: "The HTML Span Element is a generic inline container for phrasing content, which does not inherently represent anything. It can be used to group elements for styling purposes (using the class or id attributes), or because they share attribute values, such as lang. It should be used only when no other semantic element is appropriate. &lt;span&gt; is very much like a &lt;div&gt; element, but &lt;div&gt; is a block-level element whereas a &lt;span&gt; is an inline element.",
            disclaimer: [
                "The &lt;span&gt; tag is used to group inline-elements in a document.",
                "The &lt;span&gt; tag provides no visual change by itself.",
                "The &lt;span&gt; tag provides a way to add a hook to a part of a text or a part of a document.",
                "When a text is hooked in a &lt;span&gt; element, you can style it with CSS, or manipulate it with JavaScript."
            ],
            display: "inline",
            model: [
                "flow",
                "phrasing"
            ],
            children: [
                "phrasing",
                "flow"
            ],
            parent: [
                "phrasing"
            ],
            ancestor: [
                "body"
            ],
            attribute: null,
            required: null,
            tags: true,
            interface: [
                "HTMLElement",
                "HTMLSpanElement"
            ],
            links: [
                "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/span",
                "http://www.w3schools.com/tags/tag_span.asp"
            ]
        },
        strong: {
            title: "HTML Strong Element",
            description: "The HTML Strong Element gives text strong importance, and is typically displayed in bold.",
            disclaimer: [
                "Bold vs. Strong: Strong is a logical state, and bold is a physical state. Logical states separate presentation from the content, and by doing so allow for it to be expressed in many different ways. Perhaps instead of rendering some text as bold you want to render it red, or a different size, or underlined, or whatever. It makes more sense to change the presentational properties of strong than it does bold. This is because bold is a physical state; there is no separation of presentation and content, and making bold do anything other than bold text would be confusing and illogical.",
                "Emphasis vs. Strong: is described as representing strong importance for its contents. This is an important distinction to make. While Emphasis is used to change the meaning of a sentence , Strong is used to give portions of a sentence added importance. Both Strong and Emphasis can be nested to increase the relative degree of importance or stress emphasis, respectively."
            ],
            display: "inline",
            model: [
                "flow",
                "phrasing"
            ],
            children: [
                "phrasing"
            ],
            parent: [
                "phrasing",
                "flowing"
            ],
            ancestor: [
                "body"
            ],
            attribute: null,
            required: null,
            tags: true,
            interface: [
                "HTMLElement"
            ],
            links: [
                "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/strong",
                "http://www.w3schools.com/tags/tag_strong.asp"
            ]
        },
        sub: {
            title: "HTML Subscript Element",
            description: "The HTML Subscript Element defines a span of text that should be displayed, for typographic reasons, lower, and often smaller, than the main span of text.",
            disclaimer: [
                "The HTML Subscript Element should be used for typographical reasons only, i.e. changing the position of the text changing its meaning like in mathematical or chemical formulas.",
                "The HTML Subscript Element must not be used for styling purpose like the styling of the product name Latex. In that case CSS style should be used: the vertical-align property with the sub value will achieve the same effect.",
                "HTML Subscript Element's text appears half a character below the normal line, and is sometimes rendered in a smaller font."
            ],
            display: "inline",
            model: [
                "flow",
                "phrasing"
            ],
            children: [
                "phrasing"
            ],
            parent: [
                "phrasing"
            ],
            ancestor: [
                "body"
            ],
            attribute: null,
            required: null,
            tags: true,
            interface: [
                "HTMLElement"
            ],
            links: [
                "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/sub",
                "http://www.w3schools.com/tags/tag_sub.asp"
            ]
        },
        sup: {
            title: "HTML Superscript Element",
            description: "The HTML Superscript Element defines a span of text that should be displayed, for typographic reasons, higher, and often smaller, than the main span of text.",
            disclaimer: [
                "The HTML Superscript Element should be used for typographical reasons only, i.e. changing the position of the text changing its meaning like in mathematical formulas or in French abbreviations.",
                "The HTML Superscript Element must not be used for styling purpose like the styling of the product name Latex. In that case CSS style should be used: the vertical-align property with the super value will achieve the same effect.",
                "HTML Superscript Element's text appears half a character above the normal line, and is sometimes rendered in a smaller font."
            ],
            display: "inline",
            model: [
                "flow",
                "phrasing"
            ],
            children: [
                "phrasing"
            ],
            parent: [
                "phrasing"
            ],
            ancestor: [
                "body"
            ],
            attribute: null,
            required: null,
            tags: true,
            interface: [
                "HTMLElement"
            ],
            links: [
                "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/sup",
                "http://www.w3schools.com/tags/tag_sup.asp"
            ]
        },
        textarea: {
            title: "HTML Textarea Element",
            description: "The HTML Textarea Element represents a multi-line plain-text editing control.",
            disclaimer: [
                "Resizable textareas: This is controlled by the resize CSS property. Resizing of textareas is enabled by default, but you can explicitly disable it by including the following CSS: resize : none.",
                "A textarea has intrinsic dimensions, like a raster image.",
                "",
                "",
                "",
                ""
            ],
            display: "inline",
            model: [
                "flow",
                "phrasing",
                "palpable",
                "interactive",
                "form",
                "listed",
                "resettable",
                "submittable"
            ],
            children: [
                "Characters"
            ],
            parent: [
                "phrasing"
            ],
            ancestor: [
                "body"
            ],
            attribute: [
                "autocomplete",
                "autofocus",
                "cols",
                "disabled",
                "form",
                "maxlength",
                "minlength",
                "name",
                "placeholder",
                "readonly",
                "required",
                "rows",
                "selectionDirection",
                "selectionEnd",
                "selectionStart",
                "spellcheck",
                "wrap"
            ],
            required: null,
            tags: true,
            interface: [
                "HTMLTextareaElement"
            ],
            links: [
                "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea",
                "http://www.w3schools.com/tags/tag_textarea.asp"
            ]
        },
        time: {
            title: "HTML Time Element",
            description: "The HTML Time Element represents either a time on a 24-hour clock or a precise date in the Gregorian calendar (with optional time and timezone information). This element is intended to be used presenting dates and times in a machine readable format. This can be helpful for user agents to offer any event scheduling for user's calendar.",
            disclaimer: [
                "The HTML Time Element is not appropriate for instances where a specific date cannot be calculated, nor should it be used for dates prior to the introduction to the Gregorian calendar (due to complications with calculating those dates).",
                "The HTML Time Element cannot be a descendant of another HTML Time Element.",
                "The HTML Time Element can also be used to encode dates and times in a machine-readable way so that user agents can offer to add birthday reminders or scheduled events to the user's calendar, and search engines can produce smarter search results."
            ],
            display: "inline",
            model: [
                "flow",
                "phrasing",
                "palpable"
            ],
            children: [
                "phrasing"
            ],
            parent: [
                "phrasing"
            ],
            ancestor: [
                "body"
            ],
            attribute: [
                "datetime"
            ],
            required: null,
            tags: true,
            interface: [
                "HTMLTimeElement"
            ],
            links: [
                "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/time",
                "http://www.w3schools.com/tags/tag_time.asp"
            ]
        },
        u: {
            title: "HTML Underline Element",
            description: "The HTML Underline Element renders text with an underline, a line under the baseline of its content. In HTML5, this element represents a span of text with an unarticulated, though explicitly rendered, non-textual annotation, such as labeling the text as being a proper name in Chinese text (a Chinese proper name mark), or labeling the text as being misspelled.",
            disclaimer: [
                "If you want to underline text in a non-semantic manner, you should use a &lt;span&gt; element, or another semantically appropriate element, and style it with the CSS text-decoration property, with the underline value.",
                "Avoid using the &lt;u&gt; element where it could be confused for a hyperlink.",
                "The HTML 5 specification reminds developers that other elements are almost always more appropriate than &lt;u&gt;.",
                "The CSS text-decoration property can be used to achieve the visual aspect of the HTML Underline Element element."
            ],
            display: "inline",
            model: [
                "flow",
                "phrasing",
                "palpable"
            ],
            children: [
                "phrasing"
            ],
            parent: [
                "phrasing"
            ],
            ancestor: [
                "body"
            ],
            attribute: [
                "title"
            ],
            required: null,
            tags: true,
            interface: [
                "HTMLElement",
                "HTMLSpanElement"
            ],
            links: [
                "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/u",
                "http://www.w3schools.com/tags/tag_u.asp"
            ]
        },
        ul: {
            title: "HTML Unordered List Element",
            description: "The HTML Unordered List Element represents an unordered list of items, namely a collection of items that do not have a numerical ordering, and their order in the list is meaningless. Typically, unordered-list items are displayed with a bullet, which can be of several forms, like a dot, a circle or a squared. The bullet style is not defined in the HTML description of the page, but in its associated CSS, using the list-style-type property.",
            disclaimer: [
                "There is no limitation to the depth and imbrication of lists defined with the &lt;ol&gt; and &lt;ul&gt; elements.",
                "The &lt;ol&gt; and &lt;ul&gt; both represent a list of items. They differ in the way that, with the &lt;ol&gt; element, the order is meaningful. As a rule of thumb to determine which one to use, try changing the order of the list items; if the meaning is changed, the &lt;ol&gt; element should be used, else the &lt;ul&gt; is adequate."
            ],
            display: "block",
            model: [
                "flow",
                "palpable"
            ],
            children: [
                "li"
            ],
            parent: [
                "flow"
            ],
            ancestor: [
                "body"
            ],
            attribute: [
                "reversed",
                "start",
                "type"
            ],
            required: null,
            tags: true,
            interface: [
                "HTMLUListElement"
            ],
            links: [
                "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ul",
                "http://www.w3schools.com/tags/tag_ul.asp"
            ]
        },
        video: {
            title: "HTML Video Element",
            description: "The HTML Video Element is used to embed video content. It may contain several video sources, represented using the src attribute or the &lt;source&gt; element; the browser will choose the most suitable one.",
            disclaimer: [
                "For a list of supported formats, see: https://developer.mozilla.org/en-US/docs/Web/HTML/Supported_media_formats",
                "Currently, there are 3 supported video formats for the &lt;video&gt; element: MP4, WebM, and Ogg:",
                "Any text between the &lt;video&gt; and &lt;/video&gt; tags will be displayed in browsers that do not support the &lt;video&gt; element."
            ],
            display: "inline",
            model: [
                "flow",
                "phrasing",
                "embedded",
                "interactive",
                "palpable"
            ],
            children: [
                "phrasing"
            ],
            parent: [
                "phrasing"
            ],
            ancestor: [
                "body"
            ],
            attribute: [
                "autoplay",
                "buffered",
                "controls",
                "crossorigin",
                "height",
                "loop",
                "muted",
                "played",
                "poster",
                "preload",
                "src",
                "width"
            ],
            required: null,
            tags: true,
            interface: [
                "HTMLVideoElement"
            ],
            links: [
                "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video",
                "http://www.w3schools.com/tags/tag_video.asp"
            ]
        }
    };
})();
