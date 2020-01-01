---
---
{%- assign counter = site.posts.size -%}
{%- assign index = 1 -%}
{%- if counter != 0 -%}
var tipuesearch = {"pages": [
{% for post in site.posts %}
{%- assign text = post.content | 
  strip_newlines |
  replace: '/', " " | 
  replace: '=', " " | 
  remove: '"' | 
  remove: '>' | 
  remove: ':' | 
  remove: "<" -%}
{ "title": "{{post.title}}", "tags": "{{post.tags}}", "text": "{{text}}", "url": "{{post.url | prepend: site.url}}"}{%- if index < counter -%},{% endif %}
{%- assign index = index | plus: 1 -%}
{% endfor %}
]};
{%- endif -%}
