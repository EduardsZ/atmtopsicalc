const atmField = document.getElementById('atm')
const psiField = document.getElementById('psi')

atmField.addEventListener('keyup', function() {
  if (!!parseFloat(this.value)) {
    psiField.value = (parseFloat(this.value) * 14.7).toFixed(3)
  }
})

psiField.addEventListener('keyup', function() {
  if (!!parseFloat(this.value)) {
    atmField.value = (parseFloat(this.value) / 14.7).toFixed(3)
  }
})

document.cookie = "username=John Doe";
document.cookie = "userplace=Uganda";
document.cookie = "userplace=Tbilisi";

localStorage.setItem('Hello', 'World')

const user = new UserInfo()

async function t1() {
  console.log(user.getFileLocation());
  console.log(user.referrer());
  console.log(user.historyCount());
  // console.log(user.browserInfo());
  console.log(user.dataCookies());
  console.log(user.dataStorage());
  console.log(user.screen());
  // console.log(await user.position())
  console.log(await user.battery());
  console.log(await user.ip());

}

t1()
