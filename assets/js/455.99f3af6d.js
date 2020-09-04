(window.webpackJsonp=window.webpackJsonp||[]).push([[455],{890:function(s,a,t){"use strict";t.r(a);var n=t(43),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"globalproviderregistry"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#globalproviderregistry"}},[s._v("#")]),s._v(" GlobalProviderRegistry "),t("Badge",{attrs:{text:"Class",type:"class"}})],1),s._v(" "),t("section",{staticClass:"symbol-info"},[t("table",{staticClass:"is-full-width"},[t("tbody",[t("tr",[t("th",[s._v("Module")]),t("td",[t("div",{staticClass:"lang-typescript"},[t("span",{staticClass:"token keyword"},[s._v("import")]),s._v(" { GlobalProviderRegistry } "),t("span",{staticClass:"token keyword"},[s._v("from")]),s._v(" "),t("span",{staticClass:"token string"},[s._v('"@tsed/di"')])])])]),t("tr",[t("th",[s._v("Source")]),t("td",[t("a",{attrs:{href:"https://github.com/TypedProject/tsed/blob/v5.65.1/packages/di/src/registries/GlobalProviders.ts#L0-L0"}},[s._v("/packages/di/src/registries/GlobalProviders.ts")])])])])])]),s._v(" "),t("h2",{attrs:{id:"overview"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[s._v("#")]),s._v(" Overview")]),s._v(" "),t("div",{staticClass:"language-typescript"},[t("pre",{pre:!0,attrs:{class:"language-typescript"}},[t("code",{pre:!0,attrs:{class:"typescript-lang "}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" GlobalProviderRegistry "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("extends")]),s._v(" "),t("a",{pre:!0,attrs:{href:"/api/core/class/Registry.html"}},[t("span",{pre:!0,attrs:{class:"token"}},[s._v("Registry")])]),s._v("<"),t("a",{pre:!0,attrs:{href:"/api/di/class/Provider.html"}},[t("span",{pre:!0,attrs:{class:"token"}},[s._v("Provider")])]),s._v("<"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("any")]),s._v(">"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("a",{pre:!0,attrs:{href:"/api/di/interfaces/IProvider.html"}},[t("span",{pre:!0,attrs:{class:"token"}},[s._v("IProvider")])]),s._v("<"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("any")]),s._v(">> "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    /**\n     * Internal Map\n     * @type "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("Array"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n     */\n"),t("div",{pre:!0,attrs:{class:"language- extra-class"}},[t("pre",[t("code",[s._v('<span class="token keyword">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n/**\n *\n * @param <span class="token punctuation">{</span><span class="token keyword">string</span><span class="token punctuation">}</span> type\n * @param <span class="token punctuation">{</span><a href="/api/core/interfaces/Type.html"><span class="token">Type</span></a>&lt;<a href="/api/di/class/Provider.html"><span class="token">Provider</span></a>&lt;<span class="token keyword">any</span>&gt;&gt;<span class="token punctuation">}</span> model\n * @param options\n * @returns <span class="token punctuation">{</span><a href="/api/core/class/Registry.html"><span class="token">Registry</span></a>&lt;<a href="/api/di/class/Provider.html"><span class="token">Provider</span></a>&lt;<span class="token keyword">any</span>&gt;<span class="token punctuation">,</span> <a href="/api/di/interfaces/IProvider.html"><span class="token">IProvider</span></a>&lt;<span class="token keyword">any</span>&gt;&gt;<span class="token punctuation">}</span>\n */\n<span class="token function">createRegistry</span><span class="token punctuation">(</span>type<span class="token punctuation">:</span> <span class="token keyword">string</span><span class="token punctuation">,</span> model<span class="token punctuation">:</span> <a href="/api/core/interfaces/Type.html"><span class="token">Type</span></a>&lt;<a href="/api/di/class/Provider.html"><span class="token">Provider</span></a>&lt;<span class="token keyword">any</span>&gt;&gt;<span class="token punctuation">,</span> options?<span class="token punctuation">:</span> Partial&lt;<a href="/api/di/interfaces/RegistrySettings.html"><span class="token">RegistrySettings</span></a>&gt;<span class="token punctuation">)</span><span class="token punctuation">:</span> <a href="/api/di/interfaces/TypedProvidersRegistry.html"><span class="token">TypedProvidersRegistry</span></a><span class="token punctuation">;</span>\n/**\n *\n * @param <span class="token punctuation">{</span><span class="token keyword">string</span> | <a href="/api/di/interfaces/TokenProvider.html"><span class="token">TokenProvider</span></a><span class="token punctuation">}</span> target\n * @returns <span class="token punctuation">{</span><a href="/api/di/interfaces/RegistrySettings.html"><span class="token">RegistrySettings</span></a> | undefined<span class="token punctuation">}</span>\n */\n<span class="token function">getRegistrySettings</span><span class="token punctuation">(</span>target<span class="token punctuation">:</span> <span class="token keyword">string</span> | <a href="/api/di/interfaces/TokenProvider.html"><span class="token">TokenProvider</span></a><span class="token punctuation">)</span><span class="token punctuation">:</span> <a href="/api/di/interfaces/RegistrySettings.html"><span class="token">RegistrySettings</span></a><span class="token punctuation">;</span>\n/**\n *\n * @returns <span class="token punctuation">{</span><span class="token punctuation">(</span>provider<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token keyword">any</span> | <a href="/api/di/interfaces/IProvider.html"><span class="token">IProvider</span></a>&lt;<span class="token keyword">any</span>&gt;<span class="token punctuation">)</span><span class="token punctuation">,</span> instance?<span class="token punctuation">:</span> <span class="token keyword">any</span><span class="token punctuation">)</span> =&gt; <span class="token keyword">void</span><span class="token punctuation">}</span>\n */\n<span class="token function">createRegisterFn</span><span class="token punctuation">(</span>type<span class="token punctuation">:</span> <span class="token keyword">string</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token punctuation">(</span>provider<span class="token punctuation">:</span> <span class="token keyword">any</span> | <a href="/api/di/interfaces/IProvider.html"><span class="token">IProvider</span></a>&lt;<span class="token keyword">any</span>&gt;<span class="token punctuation">,</span> instance?<span class="token punctuation">:</span> <span class="token keyword">any</span><span class="token punctuation">)</span> =&gt; <span class="token keyword">void</span><span class="token punctuation">;</span>\n/**\n *\n * @param <span class="token punctuation">{</span><span class="token keyword">string</span> | <a href="/api/di/interfaces/TokenProvider.html"><span class="token">TokenProvider</span></a><span class="token punctuation">}</span> target\n * @returns <span class="token punctuation">{</span><a href="/api/core/class/Registry.html"><span class="token">Registry</span></a>&lt;<a href="/api/di/class/Provider.html"><span class="token">Provider</span></a>&lt;<span class="token keyword">any</span>&gt;<span class="token punctuation">,</span> <a href="/api/di/interfaces/IProvider.html"><span class="token">IProvider</span></a>&lt;<span class="token keyword">any</span>&gt;&gt;<span class="token punctuation">}</span>\n */\n<span class="token function">getRegistry</span><span class="token punctuation">(</span>target<span class="token punctuation">:</span> <span class="token keyword">string</span> | <a href="/api/di/interfaces/TokenProvider.html"><span class="token">TokenProvider</span></a><span class="token punctuation">)</span><span class="token punctuation">:</span> <a href="/api/di/interfaces/TypedProvidersRegistry.html"><span class="token">TypedProvidersRegistry</span></a><span class="token punctuation">;</span>\n')])])]),t("p",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")])])])])]),t("p"),s._v(" "),t("h2",{attrs:{id:"constructor"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#constructor"}},[s._v("#")]),s._v(" Constructor")]),s._v(" "),t("div",{pre:!0},[t("div",{pre:!0,attrs:{class:"language-typescript"}},[t("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[t("code",{pre:!0,attrs:{class:"typescript-lang "}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("constructor")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")])])])])]),t("p",[s._v("Internal Map")]),s._v(" "),t("h2",{attrs:{id:"members"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#members"}},[s._v("#")]),s._v(" Members")]),s._v(" "),t("div",{pre:!0},[t("div",{pre:!0,attrs:{class:"method-overview"}},[t("div",{pre:!0,attrs:{class:"language-typescript"}},[t("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[t("code",{pre:!0,attrs:{class:"typescript-lang "}},[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("createRegistry")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("type"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("string")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" model"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("a",{pre:!0,attrs:{href:"/api/core/interfaces/Type.html"}},[t("span",{pre:!0,attrs:{class:"token"}},[s._v("Type")])]),s._v("<"),t("a",{pre:!0,attrs:{href:"/api/di/class/Provider.html"}},[t("span",{pre:!0,attrs:{class:"token"}},[s._v("Provider")])]),s._v("<"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("any")]),s._v(">>"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" options?"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Partial<"),t("a",{pre:!0,attrs:{href:"/api/di/interfaces/RegistrySettings.html"}},[t("span",{pre:!0,attrs:{class:"token"}},[s._v("RegistrySettings")])]),s._v(">"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("a",{pre:!0,attrs:{href:"/api/di/interfaces/TypedProvidersRegistry.html"}},[t("span",{pre:!0,attrs:{class:"token"}},[s._v("TypedProvidersRegistry")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")])])])])])]),t("hr"),s._v(" "),t("div",{pre:!0},[t("div",{pre:!0,attrs:{class:"method-overview"}},[t("div",{pre:!0,attrs:{class:"language-typescript"}},[t("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[t("code",{pre:!0,attrs:{class:"typescript-lang "}},[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("getRegistrySettings")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("target"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("string")]),s._v(" | "),t("a",{pre:!0,attrs:{href:"/api/di/interfaces/TokenProvider.html"}},[t("span",{pre:!0,attrs:{class:"token"}},[s._v("TokenProvider")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("a",{pre:!0,attrs:{href:"/api/di/interfaces/RegistrySettings.html"}},[t("span",{pre:!0,attrs:{class:"token"}},[s._v("RegistrySettings")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")])])])])])]),t("hr"),s._v(" "),t("div",{pre:!0},[t("div",{pre:!0,attrs:{class:"method-overview"}},[t("div",{pre:!0,attrs:{class:"language-typescript"}},[t("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[t("code",{pre:!0,attrs:{class:"typescript-lang "}},[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("createRegisterFn")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("type"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("string")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("provider"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("any")]),s._v(" | "),t("a",{pre:!0,attrs:{href:"/api/di/interfaces/IProvider.html"}},[t("span",{pre:!0,attrs:{class:"token"}},[s._v("IProvider")])]),s._v("<"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("any")]),s._v(">"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" instance?"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("any")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" => "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")])])])])])]),t("hr"),s._v(" "),t("div",{pre:!0},[t("div",{pre:!0,attrs:{class:"method-overview"}},[t("div",{pre:!0,attrs:{class:"language-typescript"}},[t("pre",{pre:!0,attrs:{class:"language-typescript","v-pre":""}},[t("code",{pre:!0,attrs:{class:"typescript-lang "}},[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("getRegistry")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("target"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("string")]),s._v(" | "),t("a",{pre:!0,attrs:{href:"/api/di/interfaces/TokenProvider.html"}},[t("span",{pre:!0,attrs:{class:"token"}},[s._v("TokenProvider")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("a",{pre:!0,attrs:{href:"/api/di/interfaces/TypedProvidersRegistry.html"}},[t("span",{pre:!0,attrs:{class:"token"}},[s._v("TypedProvidersRegistry")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")])])])])])])])}),[],!1,null,null,null);a.default=e.exports}}]);