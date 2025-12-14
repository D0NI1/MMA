  const slides = document.querySelectorAll('.slide');
        const dotsContainer = document.getElementById('dots');
        const prevBtn = document.getElementById('prev');
        const nextBtn = document.getElementById('next');
        let currentSlide = 0;
        let slideTimer;

        slides.forEach((_, i) => {
            const dot = document.createElement('div');
            dot.className = 'dot';
            if (i === 0) dot.classList.add('active');
            dot.addEventListener('click', () => goToSlide(i));
            dotsContainer.appendChild(dot);
        });

        const dots = document.querySelectorAll('.dot');

        function goToSlide(n) {
            slides[currentSlide].classList.remove('active');
            dots[currentSlide].classList.remove('active');
            
            currentSlide = (n + slides.length) % slides.length;
            
            slides[currentSlide].classList.add('active');
            dots[currentSlide].classList.add('active');
            
            clearInterval(slideTimer);
            startAutoSlide();
        }

        function startAutoSlide() {
            slideTimer = setInterval(() => {
                goToSlide(currentSlide + 1);
            }, 5000);
        }

        prevBtn.addEventListener('click', () => goToSlide(currentSlide - 1));
        nextBtn.addEventListener('click', () => goToSlide(currentSlide + 1));
        startAutoSlide();

        const modal = document.getElementById('modal');
        const closeModalBtn = document.querySelector('.close-modal');
        const modalTitle = document.getElementById('modal-title');
        const sportImage = document.getElementById('sport-image');
        const specList = document.getElementById('spec-list');
        const priceDisplay = document.getElementById('price-display');
        const scheduleBody = document.getElementById('schedule-body');
        const registerBtn = document.getElementById('register-btn');
        const registrationForm = document.getElementById('registration-form');
        const cancelRegistrationBtn = document.getElementById('cancel-registration');
        const submitRegistrationBtn = document.getElementById('submit-registration');

        const martialArtsData = {
            'MMA': {
                title: 'Mixed Martial Arts (MMA)',
                image: 'mma.jpg',
                price: '25€',
                specifications: [
                    'Kombinim i të gjitha arteve martiale',
                    'Luftë në ring të rrethuar',
                    'Përdorim i rrokave, bërrylave, gjunjëve',
                    'Ndalohen goditjet në zonat e ndjeshme',
                    '3-5 raunde, secila 5 minuta',
                    'Doreza të holla për mbrojtje',
                    'Luftë në këmbë dhe në tokë',
                    'Ndalime dhe teknikë tokësore'
                ],
                schedule: [
                    ['E Hënë', '18:00-19:30'],
                    ['E Martë', '18:00-19:30'],
                    ['E Mërkurë', '18:00-19:30'],
                    ['E Enjte', '18:00-19:30'],
                    ['E Premte', '16:00-17:30']
                ]
            },
            'Boks': {
                title: 'Boks',
                image: 'boks.jpg',
                price: '25€',
                specifications: [
                    'Luftë vetëm me grushta',
                    'Doreza të trasha për mbrojtje',
                    'Ring katror me dimensione standarde',
                    '3-12 raunde, secila 3 minuta',
                    'Ndalohen goditjet në pjesët e poshtme',
                    'Lëvizje këmbësh dhe mbrojtje aktive',
                    'Strategji për shmangie dhe kundërgoditje',
                    'Pika për goditje të pastra'
                ],
                schedule: [
                    ['E Hënë', '16:00-17:30'],
                    ['E Martë', '16:00-17:30'],
                    ['E Mërkurë', '16:00-17:30'],
                    ['E Enjte', '16:00-17:30'],
                    ['E Shtunë', '10:00-11:30']
                ]
            },
            'Wrestling': {
                title: 'Wrestling',
                image: 'wrestling.jpg',
                price: '25€',
                specifications: [
                    'Fokus në rrëzime dhe kontroll',
                    'Luftë vetëm në tokë',
                    'Përdorim i trupit për kontroll',
                    'Pa goditje me grushta ose këmbë',
                    'Fitore me rrëzim ose dorëzim',
                    'Kohëzgjatje 2-3 raunde',
                    'Pika për pozicione dominuese',
                    'Lëvizje teknike dhe strategji'
                ],
                schedule: [
                    ['E Hënë', '10:00-11:30'],
                    ['E Martë', '18:00-19:30'],
                    ['E Mërkurë', '10:00-11:30'],
                    ['E Enjte', '18:00-19:30'],
                    ['E Premte', '18:00-19:30']
                ]
            },
            'BJJ': {
                title: 'Brazilian Jiu-Jitsu (BJJ)',
                image: 'bjj.jpg',
                price: '25€',
                specifications: [
                    'Arti i luftës në tokë',
                    'Përdorim i ndalimeve dhe çlimeve',
                    'Pa goditje me grushta ose këmbë',
                    'Fitore me dorëzim (tap out)',
                    'Gi uniforma (kimono)',
                    'Kohëzgjatje 5-10 minuta',
                    'Pika për pozicione dhe ndalime',
                    'Teknika e përdorimit të peshës trupore'
                ],
                schedule: [
                    ['E Hënë', '18:00-19:30'],
                    ['E Martë', '10:00-11:30'],
                    ['E Mërkurë', '18:00-19:30'],
                    ['E Enjte', '10:00-11:30'],
                    ['E Shtunë', '12:00-13:30']
                ]
            },
            'Judo': {
                title: 'Judo',
                image: 'judo.png',
                price: '25€',
                specifications: [
                    'Fokus në hedhje dhe rrëzime',
                    'Gi tradicionale (judogi)',
                    'Përdorni forcën e kundërshtarit kundër tij',
                    'Luftë në këmbë dhe tokë',
                    'Fitore me hedhje të përsosur ose dorëzim',
                    'Kohëzgjatje 4-5 minuta',
                    'Pika për hedhje dhe kontroll',
                    'Teknika të sigurta për të dy luftëtarët'
                ],
                schedule: [
                    ['E Hënë', '10:00-11:30'],
                    ['E Martë', '18:00-19:30'],
                    ['E Mërkurë', '10:00-11:30'],
                    ['E Enjte', '18:00-19:30'],
                    ['E Shtunë', '09:00-10:30']
                ]
            },
            'Kickboxing': {
                title: 'Kickboxing',
                image: 'kickbox.jpg',
                price: '25€',
                specifications: [
                    'Kombinim i grushtave dhe goditjeve me këmbë',
                    'Përdorim i dorezave dhe këpucëve të mbrojtjes',
                    'Ring katror si në boks',
                    '3-5 raunde, secila 3 minuta',
                    'Ndalohen goditjet në pjesët e poshtme',
                    'Goditje me këmbë lejohen në trup dhe kokë',
                    'Lëvizje dinamike dhe kombinime',
                    'Pika jepen për goditje të pastra'
                ],
                schedule: [
                    ['E Hënë', '18:00-19:30'],
                    ['E Martë', '10:00-11:30'],
                    ['E Mërkurë', '18:00-19:30'],
                    ['E Enjte', '10:00-11:30'],
                    ['E Premte', '18:00-19:30']
                ]
            },
            'Muay Thai': {
                title: 'Muay Thai',
                image: 'muay thai.jpg',
                price: '25€',
                specifications: [
                    'Arti i 8 gjymtyrëve (grushta, bërryla, gjunjë, këmbë)',
                    'Përdorim i bërrylave dhe gjunjëve lejohet',
                    'Klincë dhe goditje me gjunjë në klincë',
                    '3-5 raunde, secila 3 minuta',
                    'Goditje me këmbë në trup dhe kokë',
                    'Përdorim i rrokave tradicionale',
                    'Pika jepen për goditje efektive',
                    'Kultura dhe tradita e lashtë tajlandeze'
                ],
                schedule: [
                    ['E Hënë', '10:00-11:30'],
                    ['E Martë', '18:00-19:30'],
                    ['E Mërkurë', '10:00-11:30'],
                    ['E Enjte', '18:00-19:30'],
                    ['E Shtunë', '14:00-15:30']
                ]
            }
        };

        document.querySelectorAll('.open-modal').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const art = e.target.dataset.art;
                const data = martialArtsData[art];
                
                if (!data) return;
                
                modalTitle.textContent = data.title;
                
                sportImage.innerHTML = `<img src="${data.image}" alt="${data.title}">`;
                
                specList.innerHTML = '';
                data.specifications.forEach(spec => {
                    const li = document.createElement('li');
                    li.innerHTML = `<i class="fas fa-check"></i> ${spec}`;
                    specList.appendChild(li);
                });
                
                priceDisplay.innerHTML = `${data.price}<span>/muaj</span>`;
                
                scheduleBody.innerHTML = '';
                data.schedule.forEach(item => {
                    const row = document.createElement('tr');
                    row.innerHTML = `
                        <td>${item[0]}</td>
                        <td><span class="time-badge">${item[1]}</span></td>
                    `;
                    scheduleBody.appendChild(row);
                });
                
                registrationForm.style.display = 'none';
                registerBtn.style.display = 'block';
                
                modal.style.display = 'block';
                document.body.style.overflow = 'hidden';
            });
        });

        closeModalBtn.addEventListener('click', () => {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        });

        window.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        });

        registerBtn.addEventListener('click', () => {
            registrationForm.style.display = 'block';
            registerBtn.style.display = 'none';
        });

        cancelRegistrationBtn.addEventListener('click', () => {
            registrationForm.style.display = 'none';
            registerBtn.style.display = 'block';
            clearForm();
        });

        submitRegistrationBtn.addEventListener('click', () => {
            const name = document.getElementById('name').value.trim();
            const phone = document.getElementById('phone').value.trim();
            const email = document.getElementById('email').value.trim();
            const sport = modalTitle.textContent;
            
            if (!name || !phone || !email) {
                alert("Ju lutem plotësoni të gjitha fushat!");
                return;
            }
            
            console.log("=== REGJISTRIM I RI ===");
            console.log(`Sport: ${sport}`);
            console.log(`Emri: ${name}`);
            console.log(`Telefoni: ${phone}`);
            console.log(`Email: ${email}`);
            console.log(`Data: ${new Date().toLocaleString()}`);
            console.log("=====================");
            
            alert(`Faleminderit ${name}! Ju jeni regjistruar me sukses për ${sport}. Do t'ju kontaktojmë shpejt!`);
            
            clearForm();
            registrationForm.style.display = 'none';
            registerBtn.style.display = 'block';
        });

        function clearForm() {
            document.getElementById('name').value = '';
            document.getElementById('phone').value = '';
            document.getElementById('email').value = '';
        }