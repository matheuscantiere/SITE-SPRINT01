document.addEventListener('DOMContentLoaded', function() {
  
    const contactForm = document.getElementById('contactForm');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Impede envio padrão

        const name = document.getElementById('name').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const message = document.getElementById('message').value.trim();
        
        if (!name || !phone || !message) {
            alert('Todos os campos são obrigatórios!');
        } else if (!/^\d{10,}$/.test(phone)) {
            alert('O telefone deve conter pelo menos 10 dígitos.');
        } else {
            alert('Formulário enviado com sucesso!');
            contactForm.reset(); // Reseta o formulário
        }
    });

    const TurboEmail = document.getElementById('TurboEmail');

    TurboEmail.addEventListener('submit', function(event) {
        event.preventDefault(); 

        const email = document.getElementById('mandar').value.trim();
        
        if (!email) {
            alert('O campo de e-mail é obrigatório!');
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            alert('Por favor, insira um e-mail válido.');
        } else {
            alert('Você se inscreveu na Turbo com sucesso!');
            newsletterForm.reset(); // Reseta o formulário após o envio bem-sucedido
        }
    });
});


document.addEventListener('DOMContentLoaded', function() {
    // Cria o elemento da bolinha
    const dot = document.createElement('div');
    dot.classList.add('cursor-dot');
    document.body.appendChild(dot);

    // Atualiza a posição da bolinha com base no movimento do cursor
    document.addEventListener('mousemove', function(event) {
        dot.style.left = event.pageX + 'px';
        dot.style.top = event.pageY + 'px';
    });
});


document.addEventListener('DOMContentLoaded', function() {
    // Cria o elemento da bolinha
    const dot = document.createElement('div');
    dot.classList.add('cursor-dot');
    document.body.appendChild(dot);

    // Atualiza a posição da bolinha com base no movimento do cursor
    document.addEventListener('mousemove', function(event) {
        dot.style.left = event.pageX + 'px';
        dot.style.top = event.pageY + 'px';
    });

    // Adiciona eventos para mudar a cor da bolinha ao passar sobre links
    const links = document.querySelectorAll('a');

    links.forEach(link => {
        link.addEventListener('mouseenter', function() {
            dot.classList.add('link-hover');
        });
        link.addEventListener('mouseleave', function() {
            dot.classList.remove('link-hover');
        });
    });
});

/* SLide */

// script.js
let slideIndex = 1;
showSlides(slideIndex);

function showSlides(n) {
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

// Para rotação automática, você pode chamar a função plusSlides em um intervalo de tempo
setInterval(function() {
    plusSlides(1);
}, 3000); // Muda a imagem a cada 3 segundos
