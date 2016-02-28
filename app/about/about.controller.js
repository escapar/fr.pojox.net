angular.module('app.modules')
       .controller('aboutCtrl',aboutCtrl);

function aboutCtrl () {
  var vm = this;
  vm.aboutData = [
    {
      title: 'Libs',
      time: 1456420305,
      text: 'AngularJS Modified Angular-materialize(including Materialize) \nModified Angular-materialize(including Materialize)  \nModified Angular-grid by s-yadav https://github.com/s-yadav/angulargrid',
      featured: true,
    },
    {
      title: 'About Me',
      time: 1456420305,
      text: 'Author : POJOa\nSite : http://src.moe/',
      featured: true
    },
    {
      title: 'TODO',
      time: 1456420305,
      text: 'Goal for V2 : Make this repo a more generic one to fit more cases of infinit cascading flow (whatever) display.\nGoal for the future: Create a component-lib called Juicy (namespace: jc)\nApp-wide[Major] : Build up a compiling workflow with Gulp + Browserify\njcNav [Major]: Order by priority\nCard And Fonctionality [Moderate] : comment and tag function to add in further releases',
      featured: true
    },
    {
      title: 'v1.4 RC1 (Nozomi) 2016.02.28',
      time: 1456675603,
      text: 'Nozomi is a Stable Version Milestone , from then I\'ll create a backend in express for it.\nOptimized Documentation.\nRenewed Card Style\nRefractor and Added Navbar Order\nRefresh Policy Change',
      featured: true,
    },
    {
      title: 'v1.3 2016.02.25',
      time: 1456420305,
      text: 'Heavy Refractor of Card/Cards View and Component\nUpdated angular-grid\nSolved various tiny bugs\n',
      featured: false,
    },
    {
      title: 'v1.2 2016.02.24',
      time: 1456243200,
      text: 'Refractor jcSubNav\nEnhancement of Picture Displaying\nDisabled Slider (will be taken into account after next major release)\nAdded App Drawer For Mobile Devices\n',
    },
    {
      title: 'v1.1 2016.02.23',
      time: 1456156800,
      text: 'Added Navbar Customize Configuration Provider\nAdded Event Service.\nFixed (and disabled) Card Control.\nFixed Navbar Bug , added version badge.\nMinimalized data for Github.',
    },
    {
      title: 'Release v1 2016.02.13',
      time: 1455292800,
      text: 'Adjust Navbar Style.\nAdded Loading Bar.\nSpecified Feature Cards.\n',
      featured: true
    },
    {
      title: 'Pre-release 2016.02.12',
      time: 1455206400,
      text: 'Fixed height issue.',
    },
    {
      title: 'v0.4 2016.02.11',
      time: 1455120000,
      text: 'Unlimited Refreshing! Featured Filter!!',
    },
    {
      title: 'v0.3 2016.02.10',
      time: 1455033600,
      text: 'Added Cascade Displaying , switched to UI-Router',
    },
    {
      title: 'v0.2 2016.02.09',
      time: 1454947200,
      text: 'Built Project Skeleton , added cascade displaying',
    },
    {
      title: 'v0.1 2016.02.08',
      time: 1454860800,
      text: 'Simplified JSON structure',
    }
  ];

}
