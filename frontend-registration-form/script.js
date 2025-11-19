// ---------- Data for country->state->city (small sample) ----------
const geo = {
  "India": {
    "Telangana": ["Hyderabad","Warangal","Nizamabad"],
    "Gujarat": ["Ahmedabad","Surat","Vadodara"],
    "Karnataka": ["Bengaluru","Mysore"]
  },
  "United States": {
    "California": ["Los Angeles","San Francisco","San Diego"],
    "Texas": ["Houston","Dallas"]
  },
  "United Kingdom": {
    "England": ["London","Manchester"],
    "Scotland": ["Edinburgh","Glasgow"]
  }
};

// ---------- Simple disposable domains (small list) ----------
const disposableDomains = [
  "tempmail.com","10minutemail.com","mailinator.com","disposablemail.com","yopmail.com"
];

// ---------- Elements ----------
const form = document.getElementById('regForm');
const submitBtn = document.getElementById('submitBtn');
const resetBtn = document.getElementById('resetBtn');
const alertBox = document.getElementById('alert');

const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const age = document.getElementById('age');
const genderNodes = document.getElementsByName('gender');
const address = document.getElementById('address');
const countrySel = document.getElementById('country');
const stateSel = document.getElementById('state');
const citySel = document.getElementById('city');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');
const terms = document.getElementById('terms');
const pwdStrength = document.getElementById('pwd-strength');

// ---------- Populate country dropdown ----------
function populateCountries(){
  countrySel.innerHTML = '<option value="">— Select Country —</option>';
  Object.keys(geo).forEach(c => {
    const opt = document.createElement('option');
    opt.value = c; opt.textContent = c;
    countrySel.appendChild(opt);
  });
}
populateCountries();

countrySel.addEventListener('change', ()=>{
  const c = countrySel.value;
  stateSel.innerHTML = '<option value="">— Select State —</option>';
  citySel.innerHTML = '<option value="">— Select City —</option>';
  if(!c) return;
  Object.keys(geo[c]).forEach(s=>{
    const opt = document.createElement('option');
    opt.value = s; opt.textContent = s;
    stateSel.appendChild(opt);
  });
  validateField('country');
});

stateSel.addEventListener('change', ()=>{
  const c = countrySel.value;
  const s = stateSel.value;
  citySel.innerHTML = '<option value="">— Select City —</option>';
  if(!s) return;
  geo[c][s].forEach(ct=>{
    const opt = document.createElement('option');
    opt.value = ct; opt.textContent = ct;
    citySel.appendChild(opt);
  });
  validateField('state');
});

// ---------- Validators ----------
function showError(id, msg){
  const el = document.getElementById('err-'+id);
  if(el) el.textContent = msg || '';
  const field = document.getElementById(id);
  if(field) {
    if(msg) field.style.borderColor = 'rgba(255,107,107,0.7)';
    else field.style.borderColor = '';
  }
}

function validateField(id){
  switch(id){
    case 'firstName':
      showError('firstName', firstName.value.trim() ? '' : 'First name is required');
      break;
    case 'lastName':
      showError('lastName', lastName.value.trim() ? '' : 'Last name is required');
      break;
    case 'email':
      {
        const v = email.value.trim();
        if(!v){ showError('email','Email is required'); break; }
        const parts = v.split('@');
        if(parts.length!==2 || !parts[0] || !parts[1]){ showError('email','Enter a valid email'); break; }
        const domain = parts[1].toLowerCase();
        if(disposableDomains.includes(domain)){ showError('email','Disposable email not allowed'); break; }
        showError('email','');
      }
      break;
    case 'phone':
      {
        const v = phone.value.trim();
        if(!v){ showError('phone','Phone required'); break; }
        if(!/^\+\d{6,15}$/.test(v)){
          showError('phone','Must start with +countrycode and digits (e.g. +919876543210)');
          break;
        }
        showError('phone','');
      }
      break;
    case 'gender':
      {
        const checked = Array.from(genderNodes).some(n => n.checked);
        showError('gender', checked ? '' : 'Please select gender');
      }
      break;
    case 'password':
      {
        const v = password.value;
        if(!v){ showError('password','Password required'); break; }
        if(v.length < 6){ showError('password','Password must be at least 6 characters'); break; }
        showError('password','');
      }
      break;
    case 'confirmPassword':
      {
        if(confirmPassword.value !== password.value){ showError('confirmPassword','Passwords do not match'); }
        else showError('confirmPassword','');
      }
      break;
    case 'terms':
      showError('terms', terms.checked ? '' : 'You must accept terms');
      break;
    case 'country':
      // no mandatory but clear error area
      showError('country','');
      break;
    case 'state':
      showError('state','');
      break;
  }
  updateSubmitState();
}

// password strength
password.addEventListener('input', ()=>{
  const v = password.value;
  let score = 0;
  if(v.length >= 6) score++;
  if(/[A-Z]/.test(v)) score++;
  if(/[0-9]/.test(v)) score++;
  if(/[^A-Za-z0-9]/.test(v)) score++;
  const name = score <= 1 ? 'Weak' : (score === 2 ? 'Medium' : 'Strong');
  pwdStrength.textContent = `Password strength: ${name}`;
  validateField('password');
});

// common listeners
['firstName','lastName','email','phone','age','address','password','confirmPassword'].forEach(id=>{
  const el = document.getElementById(id);
  el && el.addEventListener('input', ()=> validateField(id));
});
terms.addEventListener('change', ()=> validateField('terms'));
Array.from(genderNodes).forEach(n => n.addEventListener('change', ()=> validateField('gender')));
countrySel && countrySel.addEventListener('change', ()=> validateField('country'));
stateSel && stateSel.addEventListener('change', ()=> validateField('state'));

// check all validations to enable submit
// function updateSubmitState(){
//   const ok = (
//     firstName.value.trim() &&
//     lastName.value.trim() &&
//     email.value.trim() &&
//     phone.value.trim() &&
//     Array.from(genderNodes).some(n => n.checked) &&
//     password.value &&
//     confirmPassword.value === password.value &&
//     terms.checked &&
//     !document.querySelectorAll('.error').length // but errors have text - we'll check explicitly
//   );

//   // ensure no visible error text
//   const errors = Array.from(document.querySelectorAll('.error')).some(e => e.textContent.trim() !== '');
//   submitBtn.disabled = !(ok && !errors);
// }

function updateSubmitState() {
    const hasErrors = Array.from(document.querySelectorAll('.error'))
        .some(err => err.textContent.trim() !== '');

    const genderChecked = Array.from(genderNodes).some(n => n.checked);

    const ok =
        firstName.value.trim() &&
        lastName.value.trim() &&
        email.value.trim() &&
        phone.value.trim() &&
        genderChecked &&
        password.value &&
        confirmPassword.value === password.value &&
        terms.checked &&
        !hasErrors;

    submitBtn.disabled = !ok;
}



// reset
resetBtn.addEventListener('click', ()=>{
  form.reset();
  document.querySelectorAll('.error').forEach(e => e.textContent='');
  pwdStrength.textContent = 'Password strength: —';
  alertBox.className = 'alert hide';
  submitBtn.disabled = true;
  stateSel.innerHTML = '<option value="">— Select State —</option>';
  citySel.innerHTML = '<option value="">— Select City —</option>';
});

// on submit
form.addEventListener('submit', (e)=>{
  e.preventDefault();
  // final validation
  ['firstName','lastName','email','phone','gender','password','confirmPassword','terms'].forEach(validateField);
  const anyError = Array.from(document.querySelectorAll('.error')).some(el => el.textContent.trim() !== '');
  if(anyError){
    showAlert('Please fix errors before submitting','error');
    return;
  }

  // success
  showAlert('Registration Successful! Your profile has been submitted successfully.','success');
  // reset fields after short delay to match PDF requirement (form resets)
  setTimeout(()=> {
    form.reset();
    pwdStrength.textContent = 'Password strength: —';
    submitBtn.disabled = true;
    stateSel.innerHTML = '<option value="">— Select State —</option>';
    citySel.innerHTML = '<option value="">— Select City —</option>';
  }, 900);
});

// helper alert
function showAlert(msg,type){
  alertBox.textContent = msg;
  alertBox.className = 'alert ' + (type === 'success' ? 'success' : 'error');
  alertBox.classList.remove('hide');
  alertBox.scrollIntoView({behavior:'smooth', block:'center'});
}

// initial small validation
updateSubmitState();
