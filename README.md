# angular-masonry-example
  Built for a website to display exported wechat moments , link http://fr.pojox.net/ (in mostly Chinese).

# TODO
Goal for V2 : Make this repo a more generic one to fit more cases of infinit cascading flow (whatever) display.    
Goal for the future: Create a component-lib called Juicy (namespace: jc)    

App-wide[Major] : Build up a compiling workflow with Gulp + Browserify     
appNav [Major]: Order by priority    
Card And Fonctionality [Moderate] : comment and tag function to add in further releases  

# How to use
Currently not available as a module.    

###Datasource must be in this form:   

    {
      title: 'Libs',
      time: 1456420305,
      text: 'AngularJS Modified Angular-materialize(including Materialize) \nModified Angular-materialize(including Materialize)  \nModified Angular-grid by s-yadav https://github.com/s-yadav/angulargrid',
      featured: true,
    },

###Directive:
   Basic : `<cards data="vm.yourData"></cards>`    
   Advanced : `<cards jc-init-num="10" jc-refresh-num="6" data="vm.selectedMonth.moments"></cards>`    

# How to run
  `npm install`

  `npm start`

# Keywords
  瀑布流 AngularJS Materialize Instagram-Cascading Displaying Infinite-Scroll

# License
  I SET UP NO RESTRICTIONS BUT USE AT YOUR OWN RISK

# PRPR 橙子(Touko) and Carpe Diem!
