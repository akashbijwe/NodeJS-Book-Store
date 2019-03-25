$(document).ready(function(){
  $(".removeBook").on("click", function(e){
    deleteId = $(this).data('id');
    console.log("deleteId",deleteId);

    $.ajax({
      url: '/manage/books/delete/'+deleteId,
      type: 'DELETE',
      csrf: false,
      success: function(){
        console.log("success");
      },
      error: function(err){
        console.log("error", err);        
      } 
    });
    //window.location = '/manage/books';
  });
});