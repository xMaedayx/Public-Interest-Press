const button = document .querySelector('.btn');
const modal = document.querySelector('.modal');

button.onclick = () => {
    // log that the button has been clicked 
    console.log("button clicked");
    // display the modal 
    modal.style.display = "block";
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