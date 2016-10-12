Template.home.events({
  'click .pin>img': function(e, tmpl) {
    //$('')
     console.log($(e.target).attr('src'));
    $('#bigImage').attr('src', $(e.target).attr('src'));
    $('#showBigPicture').modal('show');
  }
});