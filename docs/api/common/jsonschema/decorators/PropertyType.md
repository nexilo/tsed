---
sidebar: auto
meta:
 - name: keywords
   description: api typescript node.js documentation PropertyType decorator
---
# PropertyType <Badge text="Decorator" type="decorator"/>
<!-- Summary -->
<section class="symbol-info"><table class="is-full-width"><tbody><tr><th>Module</th><td><div class="lang-typescript"><span class="token keyword">import</span> { PropertyType }&nbsp;<span class="token keyword">from</span>&nbsp;<span class="token string">"@tsed/common"</span></div></td></tr><tr><th>Source</th><td><a href="https://github.com/Romakita/ts-express-decorators/blob/v4.30.2/src//common/jsonschema/decorators/propertyType.ts#L0-L0">/common/jsonschema/decorators/propertyType.ts</a></td></tr></tbody></table></section>

<!-- Overview -->
## Overview


<pre><code class="typescript-lang ">function <span class="token function">PropertyType</span><span class="token punctuation">(</span>type<span class="token punctuation">:</span> <a href="/api/core/interfaces/Type.html"><span class="token">Type</span></a>&lt<span class="token punctuation">;</span><span class="token keyword">any</span>&gt<span class="token punctuation">;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  return <a href="/api/common/jsonschema/registries/PropertyRegistry.html"><span class="token">PropertyRegistry</span></a>.<span class="token function">decorate</span><span class="token punctuation">(</span><span class="token punctuation">(</span>propertyMetadata<span class="token punctuation">:</span> <a href="/api/common/jsonschema/class/PropertyMetadata.html"><span class="token">PropertyMetadata</span></a><span class="token punctuation">)</span> =&gt<span class="token punctuation">;</span> <span class="token punctuation">{</span>
    propertyMetadata.type<span class="token punctuation"> = </span>type<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre>



<!-- Description -->
## Description

::: v-pre

Set the type of the array items. The possible value is String, Boolean, Number, Date, Object, Class, etc...

?> This decorator is used by the Converters to deserialize correctly your model.

```typescript
class Model {
   @PropertyType(String)
   property: string[];
}
```
!> You didn't use the `type Type = string | number` as parameters Type.

Didn't works:

```typescript
type Type = "string" | "number"
class Model {
   @PropertyType(Type)
   property: Type[];
}
```

Works with converter and AJV:

```typescript
type Type = "string" | "number"
class Model {
   @Property()
   @AllowTypes("string", "number") // for AJV
   property: Type[];
}
```


:::