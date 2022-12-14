async function submitReport() {
  const button = document.querySelector('button');
  button.innerText = "Submitting"
  button.disabled = true;

  function getVal(id) {
    return document.querySelector(`#${id}`).value;
  }
  const payload = {
    type: getVal('issue'),
    location: getVal('location'),
    unit: getVal('unit'),
    comment: getVal('comment'),
    responseRequired: document.querySelector('#respond').checked,
  };
  const r = await fetch('https://api.lansburysquare.com/report/', {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(payload),
  });

  if (r.status == 200) {
    button.innerText = 'Submission Successful';
  } else {
    button.innerText = 'A Problem Occured';
  }
}
