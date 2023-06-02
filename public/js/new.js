const newFormHandler = async function(event) {
  event.preventDefault();

  const post_title = document.querySelector('#post-title').value;
  const text = document.querySelector('#post-body').value;

  await fetch(`/api/post`, {
    method: 'POST',
    body: JSON.stringify({
      post_title,
      text
    }),
    headers: { 'Content-Type': 'application/json' },
  });

  document.location.replace('/dashboard');
};

document
  .querySelector('#new-post-form')
  .addEventListener('submit', newFormHandler);
