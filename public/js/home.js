onload = () => {
    
    const msg = document.getElementById('msg')
    fetch('/api')
        .then(res => res.json())
        .then(data => msg.textContent = data.msg)
        .catch(err => console.log(err))

    // const signin = document.getElementById('signin')
    // signin.addEventListener('click', () => location.href = '/signin')
    // const signup = document.getElementById('signup')
    // signup.addEventListener('click', () => location.href = '/signup')
}