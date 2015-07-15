export default Ember.Route.extend({
	model:function(params){
		return this.store.createRecord('activity',params);	
	},
	actions: {
    createActivity: function() {
      var activity;
      activity=this.get('controller.model');
      activity.save().then(function() {
        this.controller.transitionToRoute('activities.index.show.index', activity);
      }.bind(this));
    },
	 willTransition: function(transition) {
      var model = this.get('currentModel');
      if (model && model.get('isDirty')) {
        if (confirm("You have unsaved changes. Click OK to stay on the current page. Click cancel to discard these changes and move to the requested page.")) {
          //Stay on same page and continue editing
          transition.abort();
        } else {
          //Delete created record
          var activity = this.get('currentModel');
          activity.deleteRecord();
        }
      } 
    },
	cancel:function(){
		 var activity = this.get('currentModel');
         activity.deleteRecord();
		 this.controller.transitionToRoute('activities.index');
	}
	}
});