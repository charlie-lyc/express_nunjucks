onload = () => {
    const msg = document.getElementById('msg')
    // fetch('/api/signup')
    fetch('/api/auth/signup')
        .then(res => res.json())
        .then(data => msg.textContent = data.msg)
        .catch(err => console.log(err))
}