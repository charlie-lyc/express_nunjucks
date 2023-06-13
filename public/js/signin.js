onload = () => {
    const result = document.getElementById('result')
    fetch('/api/signin')
        .then(res => res.json())
        .then(data => result.textContent = data.msg)
        .catch(err => console.log(err))
}