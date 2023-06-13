onload = () => {
    const greet = document.getElementById('greet')
    fetch('/api')
        .then(res => res.json())
        .then(data => greet.textContent = data.msg)
        .catch(err => console.log(err))

    // const signin = document.getElementById('signin')
    // signin.addEventListener('click', () => location.href = '/signin')
}