# JuicyBeats Frontend
##In the branch "Master"    
To be developed as a MEAN Stacked micro-blog posting system.    
Must be used with jc-beats-backend.    

BTW : Beat is an alias of Post(Tweet) in this app.    

##In the branch "Static"    
A Website to display exported wechat moments , preview link http://fr.pojox.net/ (in mostly Chinese).        

# Libs
AngularJS 1.x    
Modified Angular-materialize(including Materialize)    
Modified Angular-grid by s-yadav (https://github.com/s-yadav/angulargrid)   

# Road to V2
The Codename Of this Library is now officially Juicy(namespace: jc)!    
TODO: Create a backend based on Express.    
TODO: Build up a compiling workflow with Gulp + Browserify      
TODO: Comment and tag function to add in further releases       
TODO: Compose and Analysis module to add in further releases(optional)     
TODO: Optimize the efficiency of desktop masonry view.     
TODO: Unit Tests    

# How to use

###Data Source must be in this form:   

    [{
      title: 'Libs',
      time: 1456420305,
      text: 'AngularJS \n\n\nNew Line',
      featured: false
    },{
      title: 'Touko',
      time: 1456420304,
      text: 'PRPR',
      featured: true
    }]

###Directives:
   Full-screen Masonry Cards:      
   `<jc-masonry-cards jc-init-num="10" jc-refresh-num="6" jc-data="vm.selectedMonth.beats"></jc-masonry-cards>`   

   A Single Card:   
   `<jc-card jc-content="about" jc-show-utc-cn="true"></jc-card>`    
   You could specify card title and body in about.title and about.text.    

   Sub Navigation:     
   `<jc-sub-nav jc-sections="vm.tabs" jc-active="vm.currentSelectedTab" jc-settings="vm.jcSubNavSettings"></jc-sub-nav>`    
   Here jc-settings stands for Sub-nav settings toggle and is currently in development.    

   vm.tabs must be in this form:    

      [{
        title: getNavDateLabel(yearAndMonth) ,
        state: 'beats.specified',
        stateParam : { month: yearAndMonth }
      },{
        title: 'ToukoPRPR' ,
        state: 'touko.prpr',
        stateParam : { touko: 'lovelyGirl' }
      }]    

   jc-nav : `<jc-nav></jc-nav>`    
   Configuration is app-wide.    
   You need a config file for each new view.    
   You could config nav order , the one with smaller value will display first.    

       angular.module('app')
              .config(navConfig);
       function navConfig(jcNavProvider){
         jcNavProvider.$get().addMenu(
           [
             {title : 'About', state : 'about', order : 1}
           ]
         );
       }

# App-wide Service
### Event Service
`appEvent.publish('toukoPRPR', param);`      
`appEvent.subscribe('toukoPRPR', callBack, $scope);  // $scope to prevent memory leak.`      

Well you could still use $rootScope.$broadcast if you want :)

# How to run
  `npm install`

  `npm start`

# Keywords
  瀑布流 AngularJS Materialize Instagram-Cascading Displaying Infinite-Scroll Masonry

# License
  I SET UP NO RESTRICTIONS BUT USE AT YOUR OWN RISK
