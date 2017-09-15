
//AEM will need to set the unique ID of the component that will correspond to the rendered and compiled template
var templId = document.querySelector('#root').getAttribute('data-aem-id');

//local dev only for testing AEM objects
// if (!window.AEM) {
//   var devPreCompTempl = Handlebars.precompile(document.getElementById('template').innerHTML);
//   var tmplFunc = (new Function('return ' + devPreCompTempl)());
//   window.AEM = window.AEM || {};
//   window.AEM.hbsTemplates = AEM.hbsTemplates || {};
//   window.AEM.hbsTemplates[templId] = tmplFunc;
//}

var template = function(){};
window.PnP = window.PnP || {};
//in AEM, the compiled template will come from client libs and the window.AEM.hbsTemplates object will be populated...
if (window.AEM) template = Handlebars.template(window.AEM.hbsTemplates[templId]);
//comment this out to exclude from bundle - or ideally make this dynamic based on build type
else {
  template = require('./templates/component.hbs');
  window.PnP = require('../dependencies/services/pnpService.bundle.js');
}


var data = PnP.getPrefData();

document.querySelector('#root').innerHTML = template({"data":"I am dynamic data!"});