This is an example local dev project for a Handlebars component that has a corresponding AEM component.

Keep in Mind:
# You are not developing a page, you are developing a reusable AEM component!


After CD'ing into the project folder be sure to run `npm install` or `yarn install`

Then, whenever you want to bundle everything up simply run `webpack`

To deploy to AEM, copy the hbs templates and dist js to the AEM component source.  AEM will run the precompile of the templates and store them in client libs under `window.AEM.hbsTemplates.<uniqueComponentId>`. 

Lots to do:
 - add Babel for ES5/6 support
 - maybe support typescript?
 - add build tasks to separate AEM build from local build
 - add dev server and watcher support
 - maybe do a rollup version?
 - maybe add sling support to push template and dist js to local AEM for integrated dev?
 - add ESLINT support
 - add unit test support
 - maybe add local mock support?
 - add SASS support

Celebrate.