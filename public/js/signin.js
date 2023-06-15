onload = () => {
    
    const msg = document.getElementById('msg')
    // fetch('/api/signin')
    fetch('/api/auth/signin')
        .then(res => res.json())
        .then(data => msg.textContent = data.msg)
        .catch(err => console.log(err))
}