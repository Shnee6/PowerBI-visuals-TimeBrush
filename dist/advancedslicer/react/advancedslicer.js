(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("jQuery"), require("React"), require("ReactDOM"));
	else if(typeof define === 'function' && define.amd)
		define(["jQuery", "React", "ReactDOM"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("jQuery"), require("React"), require("ReactDOM")) : factory(root["jQuery"], root["React"], root["ReactDOM"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_5__, __WEBPACK_EXTERNAL_MODULE_6__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	eval("\"use strict\";\nvar __extends = (this && this.__extends) || function (d, b) {\n    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];\n    function __() { this.constructor = d; }\n    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n};\nvar React = __webpack_require__(5);\nvar ReactDOM = __webpack_require__(6);\nvar $ = __webpack_require__(1);\nvar AdvancedSlicer_1 = __webpack_require__(4);\n;\n/**\n * Thin wrapper around LineUp\n */\nvar AdvancedSlicer = (function (_super) {\n    __extends(AdvancedSlicer, _super);\n    function AdvancedSlicer() {\n        _super.apply(this, arguments);\n    }\n    AdvancedSlicer.prototype.componentDidMount = function () {\n        this.node = ReactDOM.findDOMNode(this);\n        this.mySlicer = new AdvancedSlicer_1.AdvancedSlicer($(this.node));\n        this.attachEvents();\n        this.renderContent();\n    };\n    AdvancedSlicer.prototype.componentWillReceiveProps = function (newProps) {\n        this.renderContent(newProps);\n    };\n    /**\n     * Renders this component\n     */\n    AdvancedSlicer.prototype.render = function () {\n        return React.createElement(\"div\", {className: \"advanced-slicer-container\", style: { width: \"100%\", height: \"100%\" }});\n    };\n    /**\n     * Attaches events to the slicer\n     */\n    AdvancedSlicer.prototype.attachEvents = function () {\n        var _this = this;\n        var guardedEventer = function (evtName) {\n            return function () {\n                var args = [];\n                for (var _i = 0; _i < arguments.length; _i++) {\n                    args[_i - 0] = arguments[_i];\n                }\n                if (_this.props[evtName]) {\n                    _this.props[evtName].apply(_this, args);\n                }\n            };\n        };\n        this.mySlicer.events.on(\"loadMoreData\", guardedEventer(\"onLoadMoreData\"));\n        this.mySlicer.events.on(\"canLoadMoreData\", guardedEventer(\"onCanLoadMoreData\"));\n        this.mySlicer.events.on(\"selectionChanged\", guardedEventer(\"onSelectionChanged\"));\n    };\n    AdvancedSlicer.prototype.renderContent = function (props) {\n        // if called from `componentWillReceiveProps`, then we use the new\n        // props, otherwise use what we already have.\n        props = props || this.props;\n        this.mySlicer.showHighlight = props.showHighlight;\n        this.mySlicer.showValues = props.showValues;\n        this.mySlicer.showSelections = props.showSelections;\n        this.mySlicer.serverSideSearch = props.serverSideSearch;\n        this.mySlicer.data = props.data;\n    };\n    return AdvancedSlicer;\n}(React.Component));\nexports.AdvancedSlicer = AdvancedSlicer;\n\n\n/*****************\n ** WEBPACK FOOTER\n ** ./visuals/advancedslicer/AdvancedSlicerReact.tsx\n ** module id = 0\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./visuals/advancedslicer/AdvancedSlicerReact.tsx?");

/***/ },
/* 1 */
/***/ function(module, exports) {

	eval("module.exports = __WEBPACK_EXTERNAL_MODULE_1__;\n\n/*****************\n ** WEBPACK FOOTER\n ** external \"jQuery\"\n ** module id = 1\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///external_%22jQuery%22?");

/***/ },
/* 2 */
/***/ function(module, exports) {

	eval("/*\r\n * Natural Sort algorithm for Javascript - Version 0.7 - Released under MIT license\r\n * Author: Jim Palmer (based on chunking idea from Dave Koelle)\r\n */\n/*jshint unused:false */\n'use strict';\n\nmodule.exports = function naturalSort(a, b) {\n\t\"use strict\";\n\tvar re = /(^([+\\-]?(?:0|[1-9]\\d*)(?:\\.\\d*)?(?:[eE][+\\-]?\\d+)?)?$|^0x[0-9a-f]+$|\\d+)/gi,\n\t    sre = /(^[ ]*|[ ]*$)/g,\n\t    dre = /(^([\\w ]+,?[\\w ]+)?[\\w ]+,?[\\w ]+\\d+:\\d+(:\\d+)?[\\w ]?|^\\d{1,4}[\\/\\-]\\d{1,4}[\\/\\-]\\d{1,4}|^\\w+, \\w+ \\d+, \\d{4})/,\n\t    hre = /^0x[0-9a-f]+$/i,\n\t    ore = /^0/,\n\t    i = function i(s) {\n\t\treturn naturalSort.insensitive && ('' + s).toLowerCase() || '' + s;\n\t},\n\t   \n\t// convert all to strings strip whitespace\n\tx = i(a).replace(sre, '') || '',\n\t    y = i(b).replace(sre, '') || '',\n\t   \n\t// chunk/tokenize\n\txN = x.replace(re, '\\0$1\\0').replace(/\\0$/, '').replace(/^\\0/, '').split('\\0'),\n\t    yN = y.replace(re, '\\0$1\\0').replace(/\\0$/, '').replace(/^\\0/, '').split('\\0'),\n\t   \n\t// numeric, hex or date detection\n\txD = parseInt(x.match(hre), 16) || xN.length !== 1 && x.match(dre) && Date.parse(x),\n\t    yD = parseInt(y.match(hre), 16) || xD && y.match(dre) && Date.parse(y) || null,\n\t    oFxNcL,\n\t    oFyNcL;\n\t// first try and sort Hex codes or Dates\n\tif (yD) {\n\t\tif (xD < yD) {\n\t\t\treturn -1;\n\t\t} else if (xD > yD) {\n\t\t\treturn 1;\n\t\t}\n\t}\n\t// natural sorting through split numeric strings and default strings\n\tfor (var cLoc = 0, numS = Math.max(xN.length, yN.length); cLoc < numS; cLoc++) {\n\t\t// find floats not starting with '0', string or 0 if not defined (Clint Priest)\n\t\toFxNcL = !(xN[cLoc] || '').match(ore) && parseFloat(xN[cLoc]) || xN[cLoc] || 0;\n\t\toFyNcL = !(yN[cLoc] || '').match(ore) && parseFloat(yN[cLoc]) || yN[cLoc] || 0;\n\t\t// handle numeric vs string comparison - number < string - (Kyle Adams)\n\t\tif (isNaN(oFxNcL) !== isNaN(oFyNcL)) {\n\t\t\treturn isNaN(oFxNcL) ? 1 : -1;\n\t\t}\n\t\t// rely on string comparison if different types - i.e. '02' < 2 != '02' < '2'\n\t\telse if (typeof oFxNcL !== typeof oFyNcL) {\n\t\t\t\toFxNcL += '';\n\t\t\t\toFyNcL += '';\n\t\t\t}\n\t\tif (oFxNcL < oFyNcL) {\n\t\t\treturn -1;\n\t\t}\n\t\tif (oFxNcL > oFyNcL) {\n\t\t\treturn 1;\n\t\t}\n\t}\n\treturn 0;\n};\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/javascript-natural-sort/naturalSort.js\n ** module id = 2\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./~/javascript-natural-sort/naturalSort.js?");

/***/ },
/* 3 */
/***/ function(module, exports) {

	eval("\"use strict\";\n/**\n * A mixin that adds support for event emitting\n */\nvar EventEmitter = (function () {\n    function EventEmitter() {\n        this.listeners = {};\n    }\n    /**\n     * Adds an event listener for the given event\n     */\n    EventEmitter.prototype.on = function (name, handler) {\n        var _this = this;\n        var listeners = this.listeners[name] = this.listeners[name] || [];\n        listeners.push(handler);\n        return {\n            destroy: function () {\n                _this.off(name, handler);\n            }\n        };\n    };\n    /**\n     * Removes an event listener for the given event\n     */\n    EventEmitter.prototype.off = function (name, handler) {\n        var listeners = this.listeners[name];\n        if (listeners) {\n            var idx = listeners.indexOf(handler);\n            if (idx >= 0) {\n                listeners.splice(idx, 1);\n            }\n        }\n    };\n    /**\n     * Raises the given event\n     */\n    /*protected*/ EventEmitter.prototype.raiseEvent = function (name) {\n        var _this = this;\n        var args = [];\n        for (var _i = 1; _i < arguments.length; _i++) {\n            args[_i - 1] = arguments[_i];\n        }\n        var listeners = this.listeners[name];\n        if (listeners) {\n            listeners.forEach(function (l) {\n                l.apply(_this, args);\n            });\n        }\n    };\n    return EventEmitter;\n}());\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.default = EventEmitter;\n\n\n/*****************\n ** WEBPACK FOOTER\n ** ./base/EventEmitter.ts\n ** module id = 3\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./base/EventEmitter.ts?");

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	eval("\"use strict\";\nvar EventEmitter_1 = __webpack_require__(3);\nvar $ = __webpack_require__(1);\nvar naturalSort = __webpack_require__(2);\n/**\n * Represents an advanced slicer to help slice through data\n */\nvar AdvancedSlicer = (function () {\n    /**\n     * Constructor for the advanced slicer\n     */\n    function AdvancedSlicer(element) {\n        var _this = this;\n        /**\n         * The data contained in this slicer\n         */\n        this._data = [];\n        /**\n         * Our event emitter\n         */\n        this._eventEmitter = new EventEmitter_1.default();\n        /**\n         * Whether or not we are loading the search box\n         */\n        this.loadingSearch = false;\n        /**\n         * Setter for server side search\n         */\n        this._serverSideSearch = true;\n        /**\n         * The list of selected items\n         */\n        this._selectedItems = [];\n        /**\n         * A boolean indicating whether or not the list is loading more data\n         */\n        this._loadingMoreData = false; // Don't use this directly\n        this.element = element;\n        this.listContainer = element.append($(AdvancedSlicer.template)).find(\".advanced-slicer\");\n        this.listEle = this.listContainer.find(\".list\");\n        this.listEle.scroll(function () { return _this.checkLoadMoreData(); });\n        this.selectionsEle = element.find(\".selections\");\n        this.checkAllEle = element.find(\".check-all\").on(\"click\", function () { return _this.toggleSelectAll(); });\n        this.clearAllEle = element.find(\".clear-all\").on(\"click\", function () { return _this.clearSelection(); });\n        this.attachEvents();\n        // These two are here because the devtools call init more than once\n        this.loadingMoreData = true;\n    }\n    Object.defineProperty(AdvancedSlicer.prototype, \"serverSideSearch\", {\n        /**\n         * Getter for server side search\n         */\n        get: function () {\n            return this._serverSideSearch;\n        },\n        set: function (value) {\n            this._serverSideSearch = value;\n        },\n        enumerable: true,\n        configurable: true\n    });\n    Object.defineProperty(AdvancedSlicer.prototype, \"events\", {\n        /**\n         * Gets our event emitter\n         */\n        get: function () {\n            return this._eventEmitter;\n        },\n        enumerable: true,\n        configurable: true\n    });\n    Object.defineProperty(AdvancedSlicer.prototype, \"dimensions\", {\n        /**\n         * Sets the dimension of the slicer\n         */\n        set: function (dims) {\n            this.listEle.find(\".display-container\").css({ width: \"100%\" });\n            this.listEle.css({ width: \"100%\", height: dims.height - this.element.find(\".slicer-options\").height() - 10 });\n        },\n        enumerable: true,\n        configurable: true\n    });\n    Object.defineProperty(AdvancedSlicer.prototype, \"showValues\", {\n        /**\n         * Setter for showing the values column\n         */\n        set: function (show) {\n            this.element.toggleClass(\"has-values\", show);\n        },\n        enumerable: true,\n        configurable: true\n    });\n    Object.defineProperty(AdvancedSlicer.prototype, \"showSelections\", {\n        /**\n         * Setter for showing the selections area\n         */\n        set: function (show) {\n            this.element.toggleClass(\"show-selections\", show);\n        },\n        enumerable: true,\n        configurable: true\n    });\n    Object.defineProperty(AdvancedSlicer.prototype, \"showHighlight\", {\n        /**\n         * Gets whether or not we are showing the highlights\n         */\n        get: function () {\n            return this.element.hasClass(\"show-highlight\");\n        },\n        /**\n         * Toggles whether or not to show highlights\n         */\n        set: function (highlight) {\n            this.element.toggleClass(\"show-highlight\", !!highlight);\n        },\n        enumerable: true,\n        configurable: true\n    });\n    Object.defineProperty(AdvancedSlicer.prototype, \"data\", {\n        /**\n         * Gets the data behind the slicer\n         */\n        get: function () {\n            return this._data;\n        },\n        /**\n         * Sets the slicer data\n         */\n        set: function (newData) {\n            this.listEle.empty();\n            // If some one sets the data, then clearly we are no longer loading data\n            this.loadingMoreData = false;\n            if (newData && newData.length) {\n                this.listEle.append(newData.map(function (item) {\n                    var ele = AdvancedSlicer.listItemFactory(item.matchPrefix, item.match, item.matchSuffix);\n                    var renderedValue = item.renderedValue;\n                    if (renderedValue) {\n                        ele.find(\".value-display\").css({ width: (renderedValue + \"%\") });\n                    }\n                    ele[item.selected ? \"hide\" : \"show\"].call(ele);\n                    ele.find(\"input\").prop('checked', item.selected);\n                    ele.data(\"item\", item);\n                    return ele;\n                }));\n                this.loadingSearch = true;\n                this.element.find(\".searchbox\").val(this.searchString);\n                this.loadingSearch = false;\n                this._data = newData;\n                this.updateSelectAllButtonState();\n            }\n        },\n        enumerable: true,\n        configurable: true\n    });\n    Object.defineProperty(AdvancedSlicer.prototype, \"selectedItems\", {\n        get: function () {\n            return this._selectedItems;\n        },\n        /**\n         * Sets the set of selected items\n         */\n        set: function (value) {\n            var _this = this;\n            var oldSelection = this.selectedItems.slice(0);\n            this._selectedItems = value;\n            // HACK: They are all selected if it is the same length as our dataset\n            var allChecked = value && value.length === this.data.length;\n            var someChecked = value && value.length > 0 && !allChecked;\n            this.syncItemVisiblity();\n            if (value) {\n                this.selectionsEle.find(\".token\").remove();\n                value.map(function (v) { return _this.createSelectionToken(v); }).forEach(function (n) { return n.insertBefore(_this.element.find(\".clear-all\")); });\n            }\n            this.events.raiseEvent(\"selectionChanged\", this._selectedItems, oldSelection);\n            this.checkAllEle.prop(\"checked\", someChecked);\n            this.checkAllEle.prop('indeterminate', someChecked);\n        },\n        enumerable: true,\n        configurable: true\n    });\n    Object.defineProperty(AdvancedSlicer.prototype, \"searchString\", {\n        /**\n         * Gets the current serch value\n         */\n        get: function () {\n            return this.element.find(\".searchbox\").val();\n        },\n        enumerable: true,\n        configurable: true\n    });\n    /**j\n     * Sorts the slicer\n     */\n    AdvancedSlicer.prototype.sort = function (toSort, desc) {\n        this.data.sort(function (a, b) {\n            var sortVal = naturalSort(a[toSort], b[toSort]);\n            return desc ? -1 * sortVal : sortVal;\n        });\n    };\n    Object.defineProperty(AdvancedSlicer.prototype, \"loadingMoreData\", {\n        get: function () {\n            return this._loadingMoreData;\n        },\n        /**\n         * Setter for loadingMoreData\n         */\n        set: function (value) {\n            this._loadingMoreData = value;\n            this.element.toggleClass(\"loading\", value);\n        },\n        enumerable: true,\n        configurable: true\n    });\n    /**\n     * Syncs the item elements state with the current set of selected items and the search\n     */\n    AdvancedSlicer.prototype.syncItemVisiblity = function () {\n        var value = this.selectedItems;\n        var eles = this.element.find(\".item\");\n        var me = this;\n        var isMatch = function (item, value) {\n            return (item.match || \"\").indexOf(value) >= 0 ||\n                (item.matchPrefix || \"\").indexOf(value) >= 0 ||\n                (item.matchSuffix || \"\").indexOf(value) >= 0;\n        };\n        eles.each(function () {\n            var item = $(this).data(\"item\");\n            var isVisible = !(!!value && value.filter(function (b) { return b.equals(item); }).length > 0);\n            // Update the search\n            if (isVisible && !me.serverSideSearch && me.searchString) {\n                isVisible = isMatch(item, me.searchString);\n            }\n            $(this).toggle(isVisible);\n        });\n    };\n    /**\n     * Toggle the select all state\n     */\n    AdvancedSlicer.prototype.toggleSelectAll = function () {\n        var checked = this.checkAllEle.prop('checked');\n        if (!!checked) {\n            this.selectedItems = this._data.slice(0);\n        }\n        else {\n            this.selectedItems = [];\n        }\n    };\n    /**\n     * Creates a new selection token element\n     */\n    AdvancedSlicer.prototype.createSelectionToken = function (v) {\n        var _this = this;\n        var newEle = $('<div/>');\n        var text = (v.matchPrefix || \"\") + v.match + (v.matchSuffix || \"\");\n        newEle\n            .addClass(\"token\")\n            .attr(\"title\", text)\n            .data(\"item\", v)\n            .on(\"click\", function () {\n            newEle.remove();\n            var item = _this.selectedItems.filter(function (n) { return n.equals(v); })[0];\n            _this.selectedItems.splice(_this.selectedItems.indexOf(item), 1);\n            _this.selectedItems = _this.selectedItems.slice(0);\n        })\n            .text(text);\n        return newEle;\n    };\n    /**\n     * Clears the selection\n     */\n    AdvancedSlicer.prototype.clearSelection = function () {\n        this.selectedItems = [];\n    };\n    /**\n     * Updates the select all button state to match the data\n     */\n    AdvancedSlicer.prototype.updateSelectAllButtonState = function () {\n        this.checkAllEle.prop('indeterminate', this.selectedItems.length > 0 && this._data.length !== this.selectedItems.length);\n        this.checkAllEle.prop('checked', this.selectedItems.length > 0);\n    };\n    /**\n     * Attaches all the necessary events\n     */\n    AdvancedSlicer.prototype.attachEvents = function () {\n        var _this = this;\n        this.element.find(\".searchbox\").on(\"input\", _.debounce(function () {\n            if (!_this.loadingSearch) {\n                if (_this.serverSideSearch) {\n                    setTimeout(function () { return _this.checkLoadMoreDataBasedOnSearch(); }, 10);\n                }\n                // this is required because when the list is done searching it adds back in cached elements with selected flags\n                _this.syncItemVisiblity();\n                _this.element.toggleClass(\"has-search\", !!_this.searchString);\n            }\n        }, AdvancedSlicer.SEARCH_DEBOUNCE));\n        this.listEle.on(\"click\", function (evt) {\n            // var checkbox = $(evt.target);\n            var ele = $(evt.target).parents(\".item\");\n            if (ele.length > 0) {\n                var oldSelectedItems = _this.selectedItems.slice(0);\n                var item = ele.data(\"item\");\n                _this.selectedItems.push(item);\n                _this.selectedItems = _this.selectedItems.slice(0);\n                _this.raiseSelectionChanged(_this.selectedItems, oldSelectedItems);\n                _this.updateSelectAllButtonState();\n            }\n            evt.stopImmediatePropagation();\n            evt.stopPropagation();\n        });\n    };\n    /**\n     * Loads more data based on search\n     * @param force Force the loading of new data, if it can\n     */\n    AdvancedSlicer.prototype.checkLoadMoreDataBasedOnSearch = function () {\n        // Only need to load if:\n        // 1. There is more data. 2. There is not too much stuff on the screen (not causing a scroll)\n        if (this.raiseCanLoadMoreData(true)) {\n            if (this.loadPromise) {\n                this.loadPromise['cancel'] = true;\n            }\n            // We're not currently loading data, cause we cancelled\n            this.loadingMoreData = false;\n            this.raiseLoadMoreData(true);\n        }\n    };\n    /**\n     * Listener for the list scrolling\n     */\n    AdvancedSlicer.prototype.checkLoadMoreData = function () {\n        var scrollElement = this.listEle[0];\n        var scrollHeight = scrollElement.scrollHeight;\n        var top = scrollElement.scrollTop;\n        var shouldScrollLoad = scrollHeight - (top + scrollElement.clientHeight) < 200 && scrollHeight >= 200;\n        if (shouldScrollLoad && !this.loadingMoreData && this.raiseCanLoadMoreData()) {\n            this.raiseLoadMoreData(false);\n        }\n    };\n    /**\n     * Raises the event to load more data\n     */\n    AdvancedSlicer.prototype.raiseLoadMoreData = function (isNewSearch) {\n        var _this = this;\n        var item = {};\n        this.events.raiseEvent(\"loadMoreData\", item, isNewSearch, this.searchString);\n        if (item.result) {\n            this.loadingMoreData = true;\n            var promise_1 = this.loadPromise = item.result.then(function (items) {\n                // If this promise hasn't been cancelled\n                if (!promise_1['cancel']) {\n                    _this.loadingMoreData = false;\n                    _this.loadPromise = undefined;\n                    if (isNewSearch) {\n                        _this.data = items;\n                    }\n                    else {\n                        _this.data = _this.data.concat(items);\n                    }\n                    // Make sure we don't need to load more after this, in case it doesn't all fit on the screen\n                    setTimeout(function () { return _this.checkLoadMoreData(); }, 10);\n                    return items;\n                }\n            }, function () {\n                _this.data = [];\n                _this.loadingMoreData = false;\n            });\n            return promise_1;\n        }\n    };\n    /**\n     * Raises the event 'can\n     * '\n     */\n    AdvancedSlicer.prototype.raiseCanLoadMoreData = function (isSearch) {\n        if (isSearch === void 0) { isSearch = false; }\n        var item = {\n            result: false\n        };\n        this.events.raiseEvent('canLoadMoreData', item, isSearch);\n        return item.result;\n    };\n    /**\n     * Raises the selectionChanged event\n     */\n    AdvancedSlicer.prototype.raiseSelectionChanged = function (newItems, oldItems) {\n        this.events.raiseEvent('selectionChanged', newItems, oldItems);\n    };\n    /**\n     * The number of milliseconds before running the search, after a user stops typing.\n     */\n    AdvancedSlicer.SEARCH_DEBOUNCE = 500;\n    /**\n     * The template for this visual\n     */\n    AdvancedSlicer.template = \"\\n        <div class=\\\"advanced-slicer\\\">\\n            <div class=\\\"slicer-options\\\">\\n                <input class=\\\"searchbox\\\" placeholder=\\\"Search\\\" />\\n                <div style=\\\"margin:0;padding:0;margin-top:5px;\\\">\\n                <div class=\\\"selection-container\\\">\\n                    <div class=\\\"selections\\\">\\n                        <span class=\\\"clear-all\\\">Clear All</span>\\n                    </div>\\n                </div>\\n                <!-- Disabled -->\\n                <label style=\\\"display:none;vertical-align:middle\\\"><input class=\\\"check-all\\\" type=\\\"checkbox\\\" style=\\\"margin-right:5px;vertical-align:middle\\\"/>&nbsp;Select All</label>\\n                </div>\\n                <hr/>\\n            </div>\\n            <div class=\\\"list\\\" style=\\\"overflow:hidden;overflow-y:auto\\\"></div>\\n            <div class='load-spinner' style='transform:scale(0.6);'><div>\\n        </div>\\n    \".trim().replace(/\\n/g, '');\n    /**\n     * The template used to render list items\n     */\n    AdvancedSlicer.listItemFactory = function (matchPrefix, match, matchSuffix) {\n        return $((\"\\n            <div style=\\\"white-space:nowrap\\\" class=\\\"item\\\">\\n                <label style=\\\"cursor:pointer\\\">\\n                    <!--<input style=\\\"vertical-align:middle;cursor:pointer\\\" type=\\\"checkbox\\\">-->\\n                    <span style=\\\"margin-left: 5px;vertical-align:middle\\\" class=\\\"display-container\\\">\\n                        <span style=\\\"display:inline-block;overflow:hidden\\\" class=\\\"category-container\\\">\\n                            <span class=\\\"matchPrefix\\\">\" + (matchPrefix || \"\") + \"</span>\\n                            <span class=\\\"match\\\">\" + (match || \"\") + \"</span>\\n                            <span class=\\\"matchSuffix\\\">\" + (matchSuffix || \"\") + \"</span>\\n                        </span>\\n                        <span style=\\\"display:inline-block\\\" class=\\\"value-container\\\">\\n                            <span style=\\\"display:inline-block;width:0px\\\" class=\\\"value-display\\\">&nbsp;</span>\\n                        </span>\\n                    </span>\\n                </label>\\n            </div>\\n        \").trim().replace(/\\n/g, ''));\n    };\n    return AdvancedSlicer;\n}());\nexports.AdvancedSlicer = AdvancedSlicer;\n\n\n/*****************\n ** WEBPACK FOOTER\n ** ./visuals/advancedslicer/AdvancedSlicer.ts\n ** module id = 4\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./visuals/advancedslicer/AdvancedSlicer.ts?");

/***/ },
/* 5 */
/***/ function(module, exports) {

	eval("module.exports = __WEBPACK_EXTERNAL_MODULE_5__;\n\n/*****************\n ** WEBPACK FOOTER\n ** external \"React\"\n ** module id = 5\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///external_%22React%22?");

/***/ },
/* 6 */
/***/ function(module, exports) {

	eval("module.exports = __WEBPACK_EXTERNAL_MODULE_6__;\n\n/*****************\n ** WEBPACK FOOTER\n ** external \"ReactDOM\"\n ** module id = 6\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///external_%22ReactDOM%22?");

/***/ }
/******/ ])
});
;