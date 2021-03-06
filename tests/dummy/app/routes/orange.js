import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel: function() {
    this.controllerFor('application').set('color', 'orange');
  },
  model: function() {
    return new Ember.RSVP.Promise(function(resolve) {
      Ember.run.later(function() {
        resolve();
      }, 500);
    });
  }
});
