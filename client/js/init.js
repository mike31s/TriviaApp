/*(function($){
  $(function(){

      $('#modal1').modal();

  }); // end of document ready
})(jQuery); // end of jQuery name space

*/
$(document).ready(function() {
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    /*$('.view').click(function (){
     $('#modal1').modal('open');
     alert('edskjcxnm');
     });*/
    /*$('.view').leanModal();*/


    $('.ui.button').click(function() {
        $('.ui.modal').modal('show');
        $('.ui.embed').embed({
            autoplay: true
        });
    });


});