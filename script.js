const endpoint = 'https://flynn.boolean.careers/exercises/api/random/mail';
const mail = [];
const ul = document.getElementById('lista-email')

//generare 10 email
for (let i = 0; i < 10; i++) {
  axios.get(endpoint)
    .then(response => {
      const email = response.data.response; // Ottengo l'email
      mail.push(email); // Aggiungo email all'array
      ul.innerHTML += `<li>${email}</li>`; // Aggiungo direttamente l'HTML
    })
}

