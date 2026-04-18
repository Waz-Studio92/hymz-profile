document.addEventListener('DOMContentLoaded', () => {
    fetch('sidebar.html')
        .then(Response => Response.text ())
        .then(data => {
            document.querySelector('#sidebar').innerHTML = data;
        })
        .catch(error => console.error('Error Loading sidebar', error));
        
    fetch('footer.html')
        .then(Response => Response.text ())
        .then(data => {
            document.querySelector('#footer').innerHTML = data;
        })
        .catch(error => console.error('Error Loading footer', error));
    });