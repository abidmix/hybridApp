 var Activity=DS.Model.extend({
  code: DS.attr('string'),
  description: DS.attr('string'),
  fullName: (function() {
    return this.get('description') + ' ' + '[' + this.get('code') + ']';
  }).property('code', 'description')
});
export default Activity;