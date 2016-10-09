Template.header.onRendered(function() {
  $('body').scrollspy({ target: '.navbar', offset: 100});
});

Template.header.events({
  'click .navbar-nav>li, click .navbar-nav>li>a': function(event, tmpl) {
    if($(window).width() <= 768) {
      $('.navbar-toggle').trigger('click');
    }
  },
  'click [name=goTop]': function() {
    $('body').scrollTop(0);
  },
  'click #logIn': function() {
    $('#loginModal').modal('show');
  },
  'click #logOut': function() {
    if(confirm('로그아웃하시겠습니까?')) {
      Meteor.logout();
      Router.go('/');
    }
  }
});

Template.header.helpers({
  사용자: function() {
    return Meteor.user().username;
  }
});