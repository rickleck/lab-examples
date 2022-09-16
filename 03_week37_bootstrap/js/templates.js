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
    + ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"active") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":27,"column":42},"end":{"line":27,"column":75}}})) != null ? stack1 : "")
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

  return "<header class=\"sticky-top\">\r\n    <nav class=\"navbar navbar-dark navbar-expand-lg bg-color-1\">\r\n        <div class=\"container px-3\">\r\n            <a class=\"navbar-brand\" href=\"index.html\">\r\n                <?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"no\"?>\r\n                <svg version=\"1.1\" id=\"logo\" xml:space=\"preserve\" viewBox=\"0 0 1000 1000\" width=\"40px\"\r\n                    xmlns=\"http://www.w3.org/2000/svg\" xmlns:svg=\"http://www.w3.org/2000/svg\">\r\n                    <g transform=\"matrix(1.3333333,0,0,-1.3333333,0,2666.6667)\">\r\n                        <g transform=\"scale(0.1)\">\r\n                            <path\r\n                                d=\"m 31.149798,15763.927 v 0 l 1338.345502,1339.118 562.0829,-496.659 235.562,-21.301 265.8749,-229.011 1783.5109,1755.409 1945.041,-2114.85 360.1804,92.128 889.8514,-676.19 0.549,-0.549 43.4475,260.18 c 25.6695,165.912 40.5202,335.519 43.7457,508.083 38.4372,2070.701 -1608.9844,3780.55 -3679.6854,3819.054 C 1748.9614,20037.843 39.11274,18390.354 0.61510672,16319.653 c -0.75261563,-40.453 -0.78621454,-80.772 -0.25535173,-120.956 l 0.94083671,-71.703 c 1.9940955,-134.017 9.1960893,-260.413 29.8492063,-363.067\"\r\n                                style=\"fill: #ffffff; fill-opacity: 0.2\" />\r\n                            <path\r\n                                d=\"m 6570.197,15344.949 -757.3867,-345.061 -697.5806,187.549 -192.0514,841.115 -1272.4513,-213.958 -549.4094,-508.956 350.6853,990.294 777.7611,504.723 -130.2294,812.355 -2030.8325,-1997.456 -228.2912,24.998 -458.8402,-326.245 -243.8743,-3.629 529.9288,716.06 -328.6646,-46.434 286.1351,349.563 -352.3518,299.501 L 57.135197,15594.051 C 362.54931,13863.707 1857.3582,12534.534 3680.2605,12500.6 c 1653.1605,-30.71 3076.2086,1013.141 3602.5019,2489.007 l -712.5654,355.342\"\r\n                                style=\"fill: #ffffff; fill-opacity: 1\" />\r\n                        </g>\r\n                    </g>\r\n                </svg>\r\n            </a>\r\n            <button class=\"navbar-toggler\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#navbarNav\">\r\n                <span class=\"navbar-toggler-icon\"></span>\r\n            </button>\r\n            <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\r\n                <ul class=\"navbar-nav light\">\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"pages") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":25,"column":20},"end":{"line":29,"column":29}}})) != null ? stack1 : "")
    + "                </ul>\r\n            </div>\r\n        </div>\r\n    </nav>\r\n</header>";
},"useData":true});
})();