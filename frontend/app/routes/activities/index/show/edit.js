 export default  Ember.Route.extend({
	 actions: {
    saveChanges: function() {
    var self, activity;
    self = this;
    activity = self.controller.get('model');
	 if (self.controller.get('model.isDirty')) {
    activity.save().then(function() {
      self.controller.transitionToRoute('activities.index.show.index', activity);
    },function (error) {
                // display error message 
				Ember.Logger.debug(error);
            });
	}
    },
    cancel: function(self) {
	  self=this;
      self.controller.get('model').rollback();
      self.controller.transitionToRoute('activities.index.show.index');
    },
	delete:function(self) {
		self=this;
		var activity =self.controller.get('model');
	    activity.destroyRecord().then(function()
		{
		 self.controller.transitionToRoute('activities');
		});
	}

  },
  activate: function() {
    return this.controllerFor('activities/index/show').set('isEditing', true);
  },
  deactivate: function() {
    return this.controllerFor('activities/index/show').set('isEditing', false);
  }
});