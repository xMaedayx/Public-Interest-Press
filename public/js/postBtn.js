const modal = document.getElementById("myModal1");
const btn = document.getElementById("pstBtn");
const span = document.getElementsByClassName("clsos"[0]);

// When the user clicks the button, open the modal
btn.onclick = function(){
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function(){
    modal.style.display = "none";
}

// When the user clicks anywhere outside the modal, close it
window.onclick = function(event){
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

$('#upload-button').on('click', function() {
    var fileInput = $('#file-input')[0];
    var file = fileInput.files[0];
    var formData = new FormData();
    formData.append('file', file);
    $.ajax({
      url: '/upload',
      type: 'POST',
      data: formData,
      processData: false,
      contentType: false,
      success: function(data) {
        console.log(data);
      },
      error: function(jqXHR, textStatus, errorThrown) {
        console.log(textStatus, errorThrown);
      }
    });
  });