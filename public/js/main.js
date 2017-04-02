$( document ).ready(function() {
  Handlebars.partials = Handlebars.templates;
  var data = {
    name: 'Howie',
    age: 21,
    favouriteColors: ['blue', 'green', 'smoke', 'yellow']
  };
  
  var $main = $('#main');
  var template = Handlebars.templates.main(data);
  $main.append(template);
});