const newFormHandler = async (event) => {
    event.preventDefault();
  
    const title = document.querySelector('#title').value.trim();
    const content = document.querySelector('#content').value.trim();
    const author_id = document.querySelector('#author_id').value.trim();
  
    if (title && content) {
      const response = await fetch(`/api/tips`, {
        method: 'POST',
        body: JSON.stringify({ title, content, author_id }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/tips');
      } else {
        alert('Failed to create tip');
      }
    }
  };

  document
  .querySelector('#new-tip-form')
  .addEventListener('submit', newFormHandler);