document.querySelectorAll('.tab-link').forEach(button => {
    button.addEventListener('click', () => {
        document.querySelectorAll('.tab-link').forEach(btn => btn.classList.remove('active'));
        document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));

        button.classList.add('active');
        document.getElementById(button.dataset.tab).classList.add('active');
    });
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

function validatePassword(password) {
    return password.length >= 6;
}

document.getElementById('login-form').addEventListener('submit', async (event) => {
    event.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    const emailError = document.getElementById('login-email-error');
    const passwordError = document.getElementById('login-password-error');
    const successMessage = document.getElementById('login-success');
    const loginBtn= document.getElementById('login-btn')
    let valid = true;

    if (!validateEmail(email)) {
        emailError.textContent = 'Invalid email address';
        valid = false;
    } else {
        emailError.textContent = '';
    }

    if (!validatePassword(password)) {
        passwordError.textContent = 'Password must be at least 6 characters';
        valid = false;
    } else {
        passwordError.textContent = '';
    }

    if (valid) {
        
        loginBtn.disabled = true;
        loginBtn.textContent = 'Logging in...';
        console.log('Login submitted');
        setTimeout(() => {
            loginBtn.disabled = false;
            loginBtn.textContent = 'Login';
            successMessage.style.display = 'block';
            setTimeout(() => {
                successMessage.style.display = 'none';
            }, 3000); // Hide success message after 3 seconds
        }, 2000);
    }
});

document.getElementById('signup-form').addEventListener('submit', async (event) => {
    event.preventDefault();
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
    const confirmPassword = document.getElementById('signup-confirm-password').value;
    const emailError = document.getElementById('signup-email-error');
    const passwordError = document.getElementById('signup-password-error');
    const confirmPasswordError = document.getElementById('signup-confirm-password-error');
    const successMessage = document.getElementById('signup-success');

    let valid = true;

    if (!validateEmail(email)) {
        emailError.textContent = 'Invalid email address';
        valid = false;
    } else {
        emailError.textContent = '';
    }

    if (!validatePassword(password)) {
        passwordError.textContent = 'Password must be at least 6 characters';
        valid = false;
    } else {
        passwordError.textContent = '';
    }

    if (password !== confirmPassword) {
        confirmPasswordError.textContent = 'Passwords do not match';
        valid = false;
    } else {
        confirmPasswordError.textContent = '';
    }

    if (valid) {
        const signupBtn = document.getElementById('signup-btn');
        signupBtn.disabled = true;
        signupBtn.textContent = 'Signing up...';
        console.log('Signup submitted');
        setTimeout(() => {
            signupBtn.disabled = false;
            signupBtn.textContent = 'Sign Up';
            successMessage.style.display = 'block';
            setTimeout(() => {
                successMessage.style.display = 'none';
            }, 3000); // Hide success message after 3 seconds
        }, 2000);
    }
});

// Clear success message on user interaction
document.querySelectorAll('#signup-form input').forEach(input => {
    input.addEventListener('input', () => {
        document.getElementById('signup-success').style.display = 'none';
    });
});

document.querySelectorAll('#login-form input').forEach(input => {
    input.addEventListener('input', () => {
        document.getElementById('login-success').style.display = 'none';
    });
});

function togglePassword(id) {
    const input = document.getElementById(id);
    const icon = input.nextElementSibling;
    if (input.type === 'password') {
        input.type = 'text';
        icon.classList.remove('fa-eye');
        icon.classList.add('fa-eye-slash');
    } else {
        input.type = 'password';
        icon.classList.remove('fa-eye-slash');
        icon.classList.add('fa-eye');
    }
}

function openModal() {
    document.getElementById('passwordRecoveryModal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('passwordRecoveryModal').style.display = 'none';
}

document.getElementById('password-recovery-form').addEventListener('submit', async (event) => {
    event.preventDefault();
    const email = document.getElementById('recovery-email').value;
    const emailError = document.getElementById('recovery-email-error');
    const successMessage = document.getElementById('recovery-success');

    if (!validateEmail(email)) {
        emailError.textContent = 'Invalid email address';
    } else {
        emailError.textContent = '';
        // Simulate sending recovery email
        console.log('Recovery email sent');
        successMessage.style.display = 'block';
        setTimeout(() => {
            successMessage.style.display = 'none';
            closeModal();
        }, 3000); // Hide success message after 3 seconds
    }
});


function checkFields() {
const emailValue = document.getElementById('login-email').value.trim();
const passwordValue = document.getElementById('login-password').value.trim();
const loginBtn = document.getElementById('login-btn');

if (emailValue !== '' && passwordValue !== '') {
    loginBtn.disabled = false;
} else {
    loginBtn.disabled = true;
}
}


document.getElementById('login-email').addEventListener('input', checkFields);
document.getElementById('login-password').addEventListener('input', checkFields); 
document.getElementById('login-btn').disabled = true;


function checkFieldsSignup() {
    const name = document.getElementById('signup-name').value.trim();
    const email = document.getElementById('signup-email').value.trim();
    const password = document.getElementById('signup-password').value.trim();
    const confirmPassword = document.getElementById('signup-confirm-password').value.trim();
    const signupBtn = document.getElementById('signup-btn');

    if (name !== '' && email !== '' && password !== '' && confirmPassword !== '') {
        signupBtn.disabled = false;
    } else {
        signupBtn.disabled = true;
    }
}

document.getElementById('signup-name').addEventListener('input', checkFieldsSignup);
document.getElementById('signup-email').addEventListener('input', checkFieldsSignup);
document.getElementById('signup-password').addEventListener('input', checkFieldsSignup);
document.getElementById('signup-confirm-password').addEventListener('input', checkFieldsSignup);
document.getElementById('signup-btn').disabled = true;

document.getElementById('signUpLink').addEventListener('click', switchToSignUp);

    function switchToSignUp() {

    document.querySelectorAll('.tab-link').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
    
    document.querySelector('.tab-link[data-tab="signup"]').classList.add('active');
    document.getElementById('signup').classList.add('active');
} 

function switchToLogin() {
    document.querySelectorAll('.tab-link').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));

    document.querySelector('.tab-link[data-tab="login"]').classList.add('active');
    document.getElementById('login').classList.add('active');
}

document.querySelectorAll('.tab-link').forEach(button => {
    button.addEventListener('click', function () {
      // Limpa os campos do formulário
      document.querySelectorAll('input').forEach(input => input.value = '');
  
      // Alterna a exibição dos formulários com base no botão clicado
      const tab = this.getAttribute('data-tab');
  
      if (tab === 'login') {
        document.getElementById('login-form').style.display = 'block';
        document.getElementById('signup-form').style.display = 'none';
      } else if (tab === 'signup') {
        document.getElementById('login-form').style.display = 'none';
        document.getElementById('signup-form').style.display = 'block';
      }
    });
  });

  document.getElementById('login-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Impede o comportamento padrão de envio do formulário
  
    // Obtém os valores dos campos
    const email = document.getElementById('login-email').value.trim();
    const password = document.getElementById('login-password').value.trim();
  
    // Verifica se os campos estão preenchidos
    if (email && password) {
      // Redireciona para o arquivo index.html
      window.location.href = 'index.html';
    } else {
      // Exibe um alerta se os campos não estiverem preenchidos
      alert('Por favor, preencha todos os campos!');
    }
  });
  