import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
   this.route('about');
  
   this.route('activities',function() 
   {
   this.route('index', { path: ''}, function() {
	  this.route('new');
   this.route('show', { path: '/activity/:id'}, function() {
     this.route('edit');
   });
  });
   });
});



export default Router;
