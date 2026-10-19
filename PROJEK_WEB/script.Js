/* Memastikan seluruh elemen HTML pada halaman web telah selesai dimuat sepenuhnya oleh browser sebelum kode JavaScript 
ini dijalankan. Ini mencegah error karena elemen yang ingin dimanipulasi belum siap.*/

document.addEventListener("DOMContentLoaded", function () {
    console.log("Website UKM PPD UIN Imam Bonjol Padang berhasil dimuat!");
    // ==========================================
    // 1. Smooth Scroll untuk Tombol "Learn More" INI MEMBUAT KETIKA DIJALANKAN SMOOTH
    // ==========================================
    const learnMoreBtn = document.querySelector('.btn-outline');
    if (learnMoreBtn) {
        learnMoreBtn.addEventListener('click', function (e) {
            const targetAttr = this.getAttribute('href');
            if (targetAttr && targetAttr.startsWith('#')) {
                e.preventDefault();
                const targetSection = document.querySelector(targetAttr);
                if (targetSection) {
                    targetSection.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    }
    // 2. Efek Hover Interaktif pada Card ini bagian ketika kursor mendekat ada efek dibagian card nya
    // ==========================================

    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function () {
            this.style.borderColor = '#111'; 
            this.style.transition = 'border-color 0.3s ease, transform 0.3s ease';
            this.style.transform = 'translateY(-5px)';
        });
        card.addEventListener('mouseleave', function () {
            this.style.borderColor = '#ddd'; 
            this.style.transform = 'translateY(0)';
        });
    });

    // 3. Tombol "Kembali ke Atas" (Back To Top) ini bagian ada tombol dibawah yang ketika ditekan akan membawa kita kembali keatas
    // ==========================================
    const backToTopBtn = document.createElement('button');
    backToTopBtn.id = 'backToTop';
    backToTopBtn.style.cssText = `
        position: fixed;
        bottom: 25px;
        right: 25px;
        background-color: rgba(106, 62, 5, 0.85);
        color: white;
        border: 2px solid rgba(255, 255, 255, 0.2);
        border-radius: 50%;
        width: 45px;
        height: 45px;
        cursor: pointer;
        display: none;
        align-items: center;
        justify-content: center;
        z-index: 1000;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.25);
        transition: background-color 0.3s, transform 0.3s, border-color 0.3s;
    `;
    const dotIndicator = document.createElement('span');
    dotIndicator.style.cssText = `
        width: 8px;
        height: 8px;
        background-color: white;
        border-radius: 50%;
        display: block;
    `;
    backToTopBtn.appendChild(dotIndicator);
    document.body.appendChild(backToTopBtn);

    window.addEventListener('scroll', function () {
        if (window.scrollY > 300) {
            backToTopBtn.style.display = 'flex';
        } else {
            backToTopBtn.style.display = 'none';
        }
    });

    backToTopBtn.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    backToTopBtn.addEventListener('mouseenter', () => {
        backToTopBtn.style.backgroundColor = '#000';
        backToTopBtn.style.borderColor = 'white';
        backToTopBtn.style.transform = 'scale(1.1)';
    });
    backToTopBtn.addEventListener('mouseleave', () => {
        backToTopBtn.style.backgroundColor = 'rgba(15, 23, 42, 0.85)';
        backToTopBtn.style.borderColor = 'rgba(255, 255, 255, 0.2)';
        backToTopBtn.style.transform = 'scale(1)';
    });
    // ==========================================
    // 💡 INOVASI 1: Pendeteksi Menu Aktif Otomatis
    // ==========================================
    const currentPage = window.location.pathname.split("/").pop() || "index.html";
    const navLinks = document.querySelectorAll('.nav-menu a');

    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        if (linkPage === currentPage || (currentPage === "" && linkPage === "index.html")) {
            link.style.fontWeight = "bold";
            link.style.borderBottom = "2px solid #fff";
            link.style.paddingBottom = "4px";
        }
    });
    // ==========================================
    // 💡 INOVASI 2: Sapaan Waktu Dinamis (Dynamic Greeting) ini bagian ketika kita login ada saapaan waktu selamat pagi dan lainnya dan ini real time
    // ==========================================
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle && (currentPage === "index.html" || currentPage === "")) {
        const hours = new Date().getHours();
        let greetingText = "SELAMAT DATANG DI";
        
        if (hours >= 4 && hours < 11) {
            greetingText = "SELAMAT PAGI ☀️ — SELAMAT DATANG DI";
        } else if (hours >= 11 && hours < 15) {
            greetingText = "SELAMAT SIANG 🌤️ — SELAMAT DATANG DI";
        } else if (hours >= 15 && hours < 18) {
            greetingText = "SELAMAT SORE 🌥️ — SELAMAT DATANG DI";
        } else {
            greetingText = "SELAMAT MALAM 🌙 — SELAMAT DATANG DI";
        }
        const greetingSub = document.createElement('p');            // ini yang membuat realtime
        greetingSub.textContent = greetingText;
        greetingSub.style.cssText = `
            font-size: 16px;
            letter-spacing: 2px;
            margin-bottom: 12px;
            color: rgba(255, 255, 255, 0.9);
            font-weight: 600;
            text-transform: uppercase;
        `;   
        heroTitle.parentNode.insertBefore(greetingSub, heroTitle);
    }
    // ==========================================
    // 💡 INOVASI 3: Kotak Pencarian Otomatis
    // ==========================================
    const visionHeadings = document.querySelectorAll('.vision-heading');
    if (visionHeadings.length > 0 && (currentPage === "about.html" || currentPage === "services.html")) {
        const searchContainer = document.createElement('div');
        searchContainer.style.cssText = 'text-align: center; margin: 20px auto 30px auto; max-width: 500px;';
        const searchInput = document.createElement('input');
        searchInput.type = 'text';
        searchInput.placeholder = '🔍 Cari pengurus, biro, atau kegiatan...';
        searchInput.style.cssText = `
            width: 100%;
            padding: 12px 20px;
            border-radius: 25px;
            border: 1px solid #ccc;
            outline: none;
            font-size: 14px;
            box-shadow: 0 2px 8px rgba(0,0,0,0.08);
            transition: border-color 0.3s;
        `;
        searchInput.addEventListener('focus', () => searchInput.style.borderColor = '#111');
        searchInput.addEventListener('blur', () => searchInput.style.borderColor = '#ccc');
        searchContainer.appendChild(searchInput);
        visionHeadings[0].parentNode.insertBefore(searchContainer, visionHeadings[0].nextSibling);
        searchInput.addEventListener('input', function () {
            const query = this.value.toLowerCase();
            cards.forEach(card => {
                const text = card.textContent.toLowerCase();
                if (text.includes(query)) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    }

    // INOVASI 4: Pop-up Modal Detail Kartu saat Diklik 
    const modal = document.createElement('div');
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.7);
        display: none;
        align-items: center;
        justify-content: center;
        z-index: 2000;
        backdrop-filter: blur(4px);
    `;
    const modalContent = document.createElement('div');
    modalContent.style.cssText = `
        background-color: white;
        padding: 30px;
        border-radius: 12px;
        max-width: 500px;
        width: 90%;
        text-align: center;
        position: relative;
        box-shadow: 0 10px 25px rgba(0,0,0,0.3);
    `;
    const closeBtn = document.createElement('span');
    closeBtn.innerHTML = '&times;';
    closeBtn.style.cssText = `
        position: absolute;
        top: 10px;
        right: 18px;
        font-size: 28px;
        cursor: pointer;
        color: #666;
    `;
    const modalBody = document.createElement('div');  // ini yang membuat realtime
    modalContent.appendChild(closeBtn);
    modalContent.appendChild(modalBody);
    modal.appendChild(modalContent);
    document.body.appendChild(modal);
    cards.forEach(card => {
        card.style.cursor = 'pointer';
        card.addEventListener('click', function () {
            modalBody.innerHTML = this.innerHTML;
            modal.style.display = 'flex';
        });
    });
    closeBtn.addEventListener('click', () => modal.style.display = 'none');
    modal.addEventListener('click', (e) => {
        if (e.target === modal) modal.style.display = 'none';
    });
});