const request = axios.create({
    baseURL: 'https://api.github.com'
})

request.get('/users/usui324')
    .then(res=>res.data)
    .then(console.log)