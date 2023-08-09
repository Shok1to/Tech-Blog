const newPost = async (event) => {
  event.preventDefault();

  const title = document.querySelector('#title').value.trim();
  const body = document.querySelector('#content').value.trim();
  
  if (title && body) {
    const response = await fetch(`/api/posts`, {
      method: 'POST',
      body: JSON.stringify({ title, body }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to create project');
    }
  }
};

//delete posts
const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/projects/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to delete post');
    }
  }
};

document
  .querySelector('.post-form')
  .addEventListener('submit', newPost);

document
  .querySelector('.project-list')
  .addEventListener('click', delButtonHandler);
