onload = () => {
    const msg = document.getElementById('msg')
    // fetch('/api/signout')
    fetch('/api/auth/signout')
        .then(res => res.json())
        .then(data => msg.textContent = data.msg)
        .catch(err => console.log(err))
}