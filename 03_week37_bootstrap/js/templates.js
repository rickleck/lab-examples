(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['navigation'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                    <li class=\"nav-item\">\r\n                        <a class=\"nav-link"
    + ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"active") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":12,"column":42},"end":{"line":12,"column":75}}})) != null ? stack1 : "")
    + "\" href=\""
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"url") : depth0), depth0))
    + "\">"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"name") : depth0), depth0))
    + "</a>\r\n                    </li>\r\n";
},"2":function(container,depth0,helpers,partials,data) {
    return " active";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<header class=\"sticky-top\">\r\n    <nav class=\"navbar navbar-dark navbar-expand-lg bg-color-1\">\r\n        <div class=\"container px-3\">\r\n            <a class=\"navbar-brand\" href=\"index.html\"><img src=\"assets/svg/logo.svg\" width=\"50px\" alt=\"Logo\"></a>\r\n            <button class=\"navbar-toggler\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#navbarNav\">\r\n                <span class=\"navbar-toggler-icon\"></span>\r\n            </button>\r\n            <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\r\n                <ul class=\"navbar-nav light\">\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"pages") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":10,"column":20},"end":{"line":14,"column":29}}})) != null ? stack1 : "")
    + "                </ul>\r\n            </div>\r\n        </div>\r\n    </nav>\r\n</header>";
},"useData":true});
})();