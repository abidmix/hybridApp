 export default Ember.Controller.extend({
  sortProperties: ['description'],
  sortAscending: true,
  queryParams: ['search'],
  search: " ",
   activities: (function() {
    if (this.get('filterText')) {
      return this.get('filteredResults');
    } else {
      return this.get('model');
    }
  }).property('filterText', 'filteredResults'),
   filterText: '',
  filteredResults: function() {
    var filter = this.get('filterText');
	if(!filter) {return;}
    var regex = new RegExp(filter, 'i');
   this.get('model').filter(function(item) {
      return item.get('description').match(regex);
    });
  }.property('filterText','model')
});
