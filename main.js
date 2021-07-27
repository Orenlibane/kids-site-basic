var nav = document.querySelector('.nav-links');

function openNav() {
  nav.classList.toggle('toggleShow');
}

// Need to change the firebase URL into the user project id
var baseURL = 'https://fir-dcced.firebaseio.com';

function onSubmitForm(event) {
  event.preventDefault();
  var fname = document.getElementsByName('fname')[0].value;
  var lname = document.getElementsByName('lname')[0].value;
  var phone = document.getElementsByName('phone')[0].value;
  var email = document.getElementsByName('email')[0].value;
  if (fname && lname && phone && email) {
    document.body.style.cursor = 'wait';
    var data = {
      firstName: fname,
      lastName: lname,
      phoneNumber: phone,
      email: email
    };
    axios.post(baseURL + '/leads.json', data).then(res => {
      console.log(res.data);
      toggleModal();
      document.body.style.cursor = 'default';
    });
  }
}

function toggleModal() {
  var fields = ['fname', 'lname', 'phone', 'email'];
  fields.forEach(field => {
    document.getElementsByName(field)[0].value = '';
  });

  window.location.pathname = './modal.html';
}
