const newPostBtn = document.getElementById("pstBtn");
const modal = document.getElementById("myModal1");
const closeBtn = document.getElementsByClassName("close"[0]);
const savePostBtn = document.getElementById("save-post-btn");
const newPostText = document.getElementById("new-post-text");

newPostBtn.addEventListener("click", () => {
    //  Show the modal when the button is clicked
    modal.style.display = "block";
})

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