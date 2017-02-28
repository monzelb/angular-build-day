angular.module('hikesApp', ['ngRoute'])
       .config(config);

var hikes = [
  {
    id: 0,
    name: "Thornton State Beach",
    location: "Daly City",
    image: "public/images/ocean.jpg",
    distance: "1.5 miles",
    description: "Thornton Beach Trail is a 1.5 mile moderately trafficked loop trail located near Daly City, California and is good for all skill levels. The trail is primarily used for hiking, walking, trail running, and nature trips and is accessible year-round. Dogs are also able to use this trail but must be kept on leash."
  },
  {
    id: 1,
    name: "Angel Island",
    location: "San Francisco Bay",
    distance: "Varies, depending on route chosen",
    image: "public/images/Angel.jpg",
    description: "The $17.00 round-trip ferry ticket (on Blue and Gold from SF) includes park admission. You can also catch a ferry in Tiburon. Toilets and drinking water are available at the trailhead. Cove Cafe deli, bike rentals, and motorized tram tours are available every day from April through October. Please note that bike rentals, tram tours, and the cafe are CLOSED during the winter months (late November thru February) and are open Thursday thru Monday during March and early November. Some trails here are flat, and may be accessible to wheelchairs, but overall, this hike is not suitable for chairs or strollers."
  },
  {
    id: 2,
    name: "Mt. Diablo",
    location: "East Bay",
    distance: "varies, depending on route",
    image: "public/images/MtDiablo.jpg",
    description: "Mount Diablo State Park is one of the ecological treasures of the San Francisco Bay Area. Every season in the park has its special qualities. Discover for yourself the mountain's beautiful wildflowers, its extensive trail system, fascinating wildlife and distinctive rock formations. View the stars from its lofty heights, bike ride to its 3,849 foot summit or explore the more remote trails by horseback. The park offers hiking, biking, horseback riding and camping."
  },
  {
    id: 3,
    name: "Fort Funston",
    location: "San Francisco",
    distance: "2 miles",
    image: "public/images/hill.jpg",
    description: "Fort Funston features 200 foot high sandy bluffs on San Francisco’s southwest coast where the winds blow reliably wildly. No surprise it is one of the premier hang-gliding spots in the country. A network of trails make it ideal for hiking and horseback riding. Dog owners will be happy to know they can take leashes off here. It is also home to the Fort Funston Native Plant Nursery."
  },
  {
    id: 4,
    name: "Tilden Regional Park",
    location: "Berkeley",
    distance: "varies, depending on route",
    image: "public/images/Tilden.jpg",
    description: "One of the East Bay Regional Park District's three oldest parks, Tilden has been called the jewel of the system, and its recreational activities have become a happy tradition for generations of East Bay youngsters. From a carousel ride and a picnic to a swim at Lake Anza and a stroll through the Botanic Garden, Tilden has variety to delight everyone. Yet there are plenty of quiet places in Tilden's 2,079 acres to shelter the wildlife and preserve natural beauty. Tilden was named for Charles Lee Tilden, first president of the Park District Board of Directors. The park is reached via Canon Drive, Shasta Road, or South Park Drive, all off Grizzly Peak Boulevard in Berkeley."
  },
  {
    id: 5,
    name: "Panoramic Hill",
    location: "Berkeley",
    image: "public/images/Berkeley.jpg",
    distance: "5.9 miles",
    description: "Panoramic Hill - Chaparral Peak - Strawberry Canyon Loop is a 5.9 mile moderately trafficked loop trail located near Berkeley, California that features beautiful wild flowers and is rated as moderate. The trail offers a number of activity options and is accessible year-round. Dogs are also able to use this trail."
  },

]

////////////
// ROUTES //
////////////


config.$inject = ['$routeProvider', '$locationProvider'];
function config (  $routeProvider,   $locationProvider  )  {
  $routeProvider
    .when('/', {
      templateUrl: 'views/templates/hikes.html',
      controller: 'HikesIndexController',
      controllerAs: 'hikesIndexCtrl'
    })
    .when('/hikes/:id', {
      templateUrl: 'views/templates/show.html',
      controller: 'HikesShowController',
      controllerAs: 'hikesShowCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });

  $locationProvider
    .html5Mode({
      enabled: true,
      requireBase: false
    });
}