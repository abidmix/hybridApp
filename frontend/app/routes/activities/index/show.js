export default Ember.Route.extend({
  
   model: function(params) {
	  
    var activity=this.store.findRecord('activity', params.id);
	 
	return activity;
  },
  setUpController:function(controller,model)
  {
	   controller.set('model',model);
	  
  }
 
  
});