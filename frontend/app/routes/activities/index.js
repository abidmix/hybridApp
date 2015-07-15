export default Ember.Route.extend({
   
  model: function() {
	 return this.store.findAll('activity');
     
  },
   renderTemplate: function() {
    this.render({
      outlet: 'master'
    });
   }
   
});
