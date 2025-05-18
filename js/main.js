/* 
 * محمد - مطور ويب محترف
 * ملف JavaScript الرئيسي
 */

// تهيئة جزيئات الخلفية
document.addEventListener('DOMContentLoaded', function() {
    // تكوين جزيئات الخلفية
    if (document.getElementById('particles-js')) {
        particlesJS('particles-js', {
            particles: {
                number: {
                    value: 80,
                    density: {
                        enable: true,
                        value_area: 800
                    }
                },
                color: {
                    value: ['#3CDBC0', '#8A56AC', '#FFFFFF']
                },
                shape: {
                    type: 'circle',
                    stroke: {
                        width: 0,
                        color: '#000000'
                    },
                    polygon: {
                        nb_sides: 5
                    }
                },
                opacity: {
                    value: 0.5,
                    random: true,
                    anim: {
                        enable: true,
                        speed: 1,
                        opacity_min: 0.1,
                        sync: false
                    }
                },
                size: {
                    value: 3,
                    random: true,
                    anim: {
                        enable: true,
                        speed: 2,
                        size_min: 0.1,
                        sync: false
                    }
                },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: '#3CDBC0',
                    opacity: 0.4,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 2,
                    direction: 'none',
                    random: true,
                    straight: false,
                    out_mode: 'out',
                    bounce: false,
                    attract: {
                        enable: true,
                        rotateX: 600,
                        rotateY: 1200
                    }
                }
            },
            interactivity: {
                detect_on: 'canvas',
                events: {
                    onhover: {
                        enable: true,
                        mode: 'grab'
                    },
                    onclick: {
                        enable: true,
                        mode: 'push'
                    },
                    resize: true
                },
                modes: {
                    grab: {
                        distance: 140,
                        line_linked: {
                            opacity: 1
                        }
                    },
                    bubble: {
                        distance: 400,
                        size: 40,
                        duration: 2,
                        opacity: 8,
                        speed: 3
                    },
                    repulse: {
                        distance: 200,
                        duration: 0.4
                    },
                    push: {
                        particles_nb: 4
                    },
                    remove: {
                        particles_nb: 2
                    }
                }
            },
            retina_detect: true
        });
    }

    // تهيئة AOS (Animate On Scroll)
    AOS.init({
        duration: 1000,
        once: true,
        offset: 100
    });

    // تحريك شريط المهارات
    const skillBars = document.querySelectorAll('.skill-progress');
    skillBars.forEach(bar => {
        const progress = bar.getAttribute('data-progress');
        setTimeout(() => {
            bar.style.width = progress;
        }, 500);
    });

    // تبديل القائمة في الشاشات الصغيرة
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });
    }

    // تغيير شكل شريط التنقل عند التمرير
    window.addEventListener('scroll', () => {
        const header = document.querySelector('.header');
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        // إظهار زر التمرير لأعلى
        const scrollTop = document.querySelector('.scroll-top');
        if (window.scrollY > 300) {
            scrollTop.classList.add('active');
        } else {
            scrollTop.classList.remove('active');
        }
    });

    // زر التمرير لأعلى
    const scrollTopBtn = document.querySelector('.scroll-top');
    if (scrollTopBtn) {
        scrollTopBtn.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // تنشيط روابط التنقل
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === current) {
                link.classList.add('active');
            }
        });
    });

    // تصفية المشاريع
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // إزالة الفئة النشطة من جميع الأزرار
            filterBtns.forEach(filterBtn => {
                filterBtn.classList.remove('active');
            });
            
            // إضافة الفئة النشطة للزر المحدد
            btn.classList.add('active');
            
            const filterValue = btn.getAttribute('data-filter');
            
            projectCards.forEach(card => {
                if (filterValue === 'all') {
                    card.style.display = 'block';
                } else if (card.getAttribute('data-category') === filterValue) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
                
                // إعادة تنشيط التحريك
                setTimeout(() => {
                    AOS.refresh();
                }, 300);
            });
        });
    });

    // معالجة نموذج الاتصال
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // هنا يمكن إضافة التحقق من صحة النموذج وإرساله
            const formData = new FormData(contactForm);
            const formValues = {};
            
            for (let [key, value] of formData.entries()) {
                formValues[key] = value;
            }
            
            // عرض رسالة نجاح (في الإنتاج الفعلي سيتم إرسال البيانات إلى الخادم)
            alert('تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.');
            contactForm.reset();
        });
    }

    // تحريك الشاشات في القسم الرئيسي
    const createScreenAnimation = () => {
        const screens = document.querySelectorAll('.screen');
        screens.forEach((screen, index) => {
            // إنشاء عناصر داخل الشاشات
            const screenContent = document.createElement('div');
            screenContent.classList.add('screen-content');
            
            // إضافة محتوى مختلف لكل شاشة
            if (index === 0) {
                screenContent.innerHTML = `
                    <div class="screen-header">
                        <div class="screen-dots">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <div class="screen-title">مشروع تطبيق</div>
                    </div>
                    <div class="screen-body">
                        <div class="screen-img" style="background-color: #3CDBC0"></div>
                        <div class="screen-text"></div>
                        <div class="screen-text"></div>
                        <div class="screen-button"></div>
                    </div>
                `;
            } else if (index === 1) {
                screenContent.innerHTML = `
                    <div class="screen-header">
                        <div class="screen-dots">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <div class="screen-title">تصميم واجهة</div>
                    </div>
                    <div class="screen-body">
                        <div class="screen-img" style="background-color: #8A56AC"></div>
                        <div class="screen-text"></div>
                        <div class="screen-button"></div>
                    </div>
                `;
            } else {
                screenContent.innerHTML = `
                    <div class="screen-header">
                        <div class="screen-dots">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <div class="screen-title">موقع ويب</div>
                    </div>
                    <div class="screen-body">
                        <div class="screen-text"></div>
                        <div class="screen-text"></div>
                        <div class="screen-text"></div>
                        <div class="screen-button"></div>
                    </div>
                `;
            }
            
            screen.appendChild(screenContent);
        });
    };
    
    createScreenAnimation();

    // تأثير الكتابة للعنوان الرئيسي
    const createTypeEffect = () => {
        const subtitle = document.querySelector('.subtitle');
        if (subtitle) {
            const text = subtitle.textContent;
            subtitle.textContent = '';
            
            let i = 0;
            const typeWriter = () => {
                if (i < text.length) {
                    subtitle.textContent += text.charAt(i);
                    i++;
                    setTimeout(typeWriter, 100);
                }
            };
            
            setTimeout(typeWriter, 1000);
        }
    };
    
    createTypeEffect();
});

// تحميل الصفحة بتأثير متلاشي
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});
