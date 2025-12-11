/* FILE: script.js
   Project: Visit Kediri - FINAL WITH GALLERY
   Description: Logika Interaktif, Database Lengkap & Fitur Galeri Foto
*/

document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. LOGIKA NAVBAR ---
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.remove('bg-gradient-to-b', 'from-black/60', 'to-transparent', 'py-5');
            navbar.classList.add('glass-nav', 'py-3');
        } else {
            navbar.classList.add('bg-gradient-to-b', 'from-black/60', 'to-transparent', 'py-5');
            navbar.classList.remove('glass-nav', 'py-3');
        }
    });

    // --- 2. DATABASE INFORMASI ---
    const detailWisata = {
        
        // === A. WISATA BUDAYA & ALAM ===
        'slg': {
            title: "Simpang Lima Gumul (SLG)",
            category: "Ikon Kota",
            // Gambar Utama
            image: "slg.jpg",
            // [BARU] GALERI GAMBAR TAMBAHAN
            gallery: [
                "slg1.jpg", // View Utama
                "slg2.jpg", // View Taman/Suasana (Placeholder)
                "slg3.jpg", // View Detail
                "slg4.jpg" // View Malam (Placeholder Link Luar)
                
            ],
            price: "Gratis (Parkir Rp 2.000)",
            hours: "Buka 24 Jam",
            desc: "Arc de Triomphe-nya Indonesia. Landmark megah yang menjadi pusat rekreasi, olahraga, dan fotografi. Terhubung dengan lorong bawah tanah yang unik. Di dindingnya terdapat relief yang menceritakan sejarah Kediri.",
            mapLink: "https://www.google.com/maps?q=Simpang+Lima+Gumul+Kediri"
        },
        'selomangleng': {
            title: "Goa Selomangleng",
            category: "Sejarah & Budaya",
            image: "GOA.WEBP",
            // [BARU] GALERI GAMBAR TAMBAHAN
            gallery: [
                "GOA1.WEBP", // View Utama
                "GOA2.WEBP", // View Taman/Suasana (Placeholder)
                                
            ],
            price: "Rp 4.000 / Orang",
            hours: "07:00 - 16:00 WIB",
            desc: "Situs pertapaan Dewi Kilisuci (Putri Raja Airlangga) di kaki Gunung Klotok. Memiliki relief sejarah pada dinding batu andesit.",
            mapLink: "http://googleusercontent.com/maps.google.com/search?q=Goa+Selomangleng+Kediri"
        },
        'kelud': {
            title: "Gunung Kelud",
            category: "Wisata Alam",
            image: "GK.JPG",
           // [BARU] GALERI GAMBAR TAMBAHAN
            gallery: [
                "GK1.jpg", // View Utama
                "GK2.jpg", // View Taman/Suasana (Placeholder)
                "GK3.jpg", // View Detail
                
            ],
            price: "Rp 10.000 / Orang",
            hours: "06:00 - 17:00 WIB",
            desc: "Gunung berapi aktif dengan pemandangan kawah spektakuler. Fasilitas ojek wisata dan fenomena jalan misteri.",
            mapLink: "http://googleusercontent.com/maps.google.com/search?q=Gunung+Kelud+Kediri"
        },
        'museum_airlangga': {
            title: "Museum Airlangga",
            category: "Sejarah",
            image: "MUESEUM.WEBP",
            // [BARU] GALERI GAMBAR TAMBAHAN
            gallery: [
                "MUESEUM3.WEBP", // View Utama
                "MUESEUM1.WEBP", // View Taman/Suasana (Placeholder)
                "MUESEUM2.WEBP", // View Detail
                
            ],
            price: "Rp 1.000 / Orang",
            hours: "08:00 - 14:00 WIB",
            desc: "Museum yang menyimpan koleksi arca, prasasti, dan benda peninggalan masa kejayaan Kerajaan Kadiri dan Mataram Kuno.",
            mapLink: "http://googleusercontent.com/maps.google.com/search?q=Museum+Airlangga+Kediri"
        },
        'taman_brantas': {
            title: "Taman Kota Brantas",
            category: "Taman Kota",
            image: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?q=80&w=1200",
            price: "Gratis",
            hours: "Buka 24 Jam",
            desc: "Taman terbuka hijau di tepi Sungai Brantas dengan view Jembatan Brawijaya. Spot populer untuk jogging, BMX, dan skate.",
            mapLink: "http://googleusercontent.com/maps.google.com/search?q=Taman+Brantas+Kediri"
        },
        'taman_ngronggo': {
            title: "Taman Ngronggo",
            category: "Taman Kota",
            image: "https://images.unsplash.com/photo-1496347315686-5f274d046ccc?q=80&w=1200",
            price: "Gratis",
            hours: "06:00 - 21:00 WIB",
            desc: "Taman kota yang asri dengan fasilitas bermain anak dan sentra kuliner kaki lima yang tertata rapi.",
            mapLink: "http://googleusercontent.com/maps.google.com/search?q=Taman+Ngronggo+Kediri"
        },

        // --- B. WISATA RELIGI ---
        'puhsarang': {
            title: "Goa Maria Puhsarang",
            category: "Wisata Religi Katolik",
            image: "https://images.unsplash.com/photo-1548625361-bd876962327c?q=80&w=1200", 
            price: "Gratis (Parkir Sukarela)",
            hours: "Buka 24 Jam",
            desc: "Gereja dan Gua Maria dengan arsitektur unik perpaduan Jawa Majapahit dan Eropa. Tempat yang hening dan sakral di lereng Gunung Wilis.",
            mapLink: "http://googleusercontent.com/maps.google.com/search?q=Gua+Maria+Puhsarang+Kediri"
        },
        'kelenteng': {
            title: "Kelenteng Tjoe Hwie Kiong",
            category: "Wisata Religi & Sejarah",
            image: "https://images.unsplash.com/photo-1625126596340-42299d63f9eb?q=80&w=1200",
            price: "Gratis",
            hours: "08:00 - 17:00 WIB",
            desc: "Kelenteng bersejarah di tepi Sungai Brantas. Pusat kebudayaan Tionghoa dan perayaan Imlek di Kota Kediri.",
            mapLink: "http://googleusercontent.com/maps.google.com/search?q=Kelenteng+Tjoe+Hwie+Kiong+Kediri"
        },

        // --- C. WISATA BELANJA ---
        'tenun_ikat': {
            title: "Kampung Tenun Ikat Bandar",
            category: "Kerajinan Lokal",
            image: "https://images.unsplash.com/photo-1605367807490-3b9af2905625?q=80&w=1200",
            price: "Bervariasi",
            hours: "08:00 - 16:00 WIB",
            desc: "Sentra kerajinan Tenun Ikat Bandar Kidul yang sudah mendunia. Wisatawan bisa melihat proses tenun ATBM dan belanja kain khas Kediri.",
            mapLink: "http://googleusercontent.com/maps.google.com/search?q=Tenun+Ikat+Bandar+Kidul+Kediri"
        },
        'ketos': {
            title: "Kediri Town Square (KETOS)",
            category: "Pusat Perbelanjaan",
            image: "https://images.unsplash.com/photo-1567449303078-57a67168933a?q=80&w=1200",
            price: "Masuk Gratis",
            hours: "10:00 - 22:00 WIB",
            desc: "Mal modern terbesar di Kediri dengan Matahari Dept Store, Hypermart, Bioskop, dan berbagai tenant kuliner nasional.",
            mapLink: "http://googleusercontent.com/maps.google.com/search?q=Kediri+Town+Square"
        },
        'kediri_mall': {
            title: "Kediri Mall (Transmart)",
            category: "Pusat Perbelanjaan",
            image: "https://images.unsplash.com/photo-1519567241046-7f570eee3d9f?q=80&w=1200",
            price: "Masuk Gratis",
            hours: "10:00 - 22:00 WIB",
            desc: "Pusat belanja lengkap dengan Transmart dan Trans Studio Mini untuk bermain anak.",
            mapLink: "http://googleusercontent.com/maps.google.com/search?q=Kediri+Mall"
        },
        'dhoho_plaza': {
            title: "Dhoho Plaza",
            category: "Pusat Perbelanjaan",
            image: "https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?q=80&w=1200",
            price: "Masuk Gratis",
            hours: "10:00 - 21:00 WIB",
            desc: "Pusat perbelanjaan strategis dekat Alun-alun dengan Swalayan Samudra dan toko fashion murah.",
            mapLink: "http://googleusercontent.com/maps.google.com/search?q=Dhoho+Plaza+Kediri"
        },
        'ramayana': {
            title: "Mal Ramayana Kediri",
            category: "Fashion Store",
            image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1200",
            price: "Masuk Gratis",
            hours: "10:00 - 21:00 WIB",
            desc: "Pusat fashion keluarga dengan harga terjangkau. Selalu ramai dengan diskon menarik.",
            mapLink: "http://googleusercontent.com/maps.google.com/search?q=Ramayana+Kediri"
        },
        'alun_alun': {
            title: "Alun-Alun Kota Kediri",
            category: "Pusat Kota",
            image: "https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?q=80&w=1200",
            price: "Gratis",
            hours: "24 Jam",
            desc: "Jantung kota Kediri yang dikelilingi Masjid Agung dan pusat kuliner kaki lima.",
            mapLink: "http://googleusercontent.com/maps.google.com/search?q=Alun+Alun+Kota+Kediri"
        },
        'pasar_bandar': {
            title: "Pasar Bandar",
            category: "Pasar Tradisional",
            image: "https://images.unsplash.com/photo-1533900298318-6b8da08a523e?q=80&w=1200",
            price: "Gratis",
            hours: "03:00 - 16:00 WIB",
            desc: "Pasar tradisional besar di barat sungai. Sentra jajanan pasar dan bahan pokok segar.",
            mapLink: "http://googleusercontent.com/maps.google.com/search?q=Pasar+Bandar+Kediri"
        },
        'pusat_oleh': {
            title: "Pusat Oleh-oleh (Jl. Pattimura)",
            category: "Belanja Oleh-oleh",
            image: "https://images.unsplash.com/photo-1626805179040-1a67732d8478?q=80&w=1200",
            price: "Bervariasi",
            hours: "08:00 - 21:00 WIB",
            desc: "Kawasan wajib untuk membeli Tahu Takwa, Gethuk Pisang, dan stik tahu khas Kediri.",
            mapLink: "http://googleusercontent.com/maps.google.com/search?q=Pusat+Oleh+Oleh+Kediri"
        },
        'supermarket_emas': {
            title: "Supermarket Emas",
            category: "Pusat Perhiasan",
            image: "https://images.unsplash.com/photo-1617038224558-2834fd2d6340?q=80&w=1200",
            price: "Sesuai Harga Emas",
            hours: "09:00 - 20:00 WIB",
            desc: "Kawasan pusat toko emas terlengkap di Kediri untuk belanja perhiasan dan investasi.",
            mapLink: "http://googleusercontent.com/maps.google.com/search?q=Toko+Emas+Kediri"
        },
        'sri_ratu': {
            title: "Legenda Mal Sri Ratu (Kediri Mall)",
            category: "Belanja",
            image: "https://images.unsplash.com/photo-1519567241046-7f570eee3d9f?q=80&w=1200", 
            price: "Masuk Gratis",
            hours: "10:00 - 21:00 WIB",
            desc: "Pusat perbelanjaan legendaris yang kini bertransformasi menjadi Kediri Mall.",
            mapLink: "http://googleusercontent.com/maps.google.com/search?q=Kediri+Mall"
        },

        // --- D. CERITA RAKYAT ---
        'cerita_panji': {
            title: "Cerita Panji (Asli Kediri)",
            category: "Warisan Budaya Dunia",
            image: "candra.jpg", 
            price: "Warisan UNESCO",
            hours: "-",
            desc: `Cerita Panji adalah kumpulan cerita yang berasal dari masa Kerajaan Kadiri (Kediri) pada abad ke-12. Kisah ini berpusat pada dua tokoh utama, yaitu Raden Inu Kertapati (Panji Asmoro Bangun) dari Kerajaan Jenggala dan Dewi Sekartaji (Galuh Candra Kirana) dari Kerajaan Kadiri.

            Kisah ini bermula ketika kedua kerajaan tersebut ingin menyatukan kembali hubungan darah melalui pernikahan Panji dan Sekartaji. Namun, berbagai rintangan muncul, mulai dari ibu tiri yang jahat hingga Sekartaji yang menghilang atau menyamar menjadi orang lain (seperti Panji Semirang). Raden Panji kemudian harus mengembara, menyamar, dan bertempur untuk menemukan kembali cinta sejatinya.

            Pada tahun 2017, UNESCO menetapkan Naskah Cerita Panji sebagai Memory of the World (Ingatan Dunia), menegaskan bahwa Kediri adalah rahim dari salah satu sastra lisan terbesar di dunia.`,
            mapLink: "" 
        },
        'tari_jaranan': {
            title: "Tari Jaranan Kediri",
            category: "Seni Tari Tradisional",
            image: "jaranan.jpg0", 
            price: "Pertunjukan Seni",
            hours: "Sesuai Event",
            desc: "Kesenian tari kuda lumping khas Kediri yang energik dan magis. Menggambarkan gagahnya pasukan berkuda kerajaan dengan iringan gamelan rancak.",
            mapLink: ""
        },

        // --- E. KULINER (4 KARTU ATAS) ---
        'pecel': {
            title: "Nasi Pecel Jalan Dhoho",
            category: "Kuliner Malam",
            image: "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?q=80&w=1200",
            price: "Rp 10.000 - Rp 25.000",
            hours: "17.00 - 03.00 WIB",
            desc: "Sensasi makan nasi pecel di atas pincuk daun pisang dengan suasana lesehan di sepanjang trotoar Jalan Dhoho.",
            mapLink: "http://googleusercontent.com/maps.google.com/search?q=Pecel+Jalan+Dhoho+Kediri"
        },
        'soto': {
            title: "Soto Ayam Podjok",
            category: "Legendaris Sejak 1926",
            image: "https://images.unsplash.com/photo-1572656631137-7935297eff55?q=80&w=1200",
            price: "Rp 18.000 / Porsi",
            hours: "07.00 - 21.00 WIB",
            desc: "Soto ayam kampung dengan kuah santan kuning yang gurih dan kental.",
            mapLink: "http://googleusercontent.com/maps.google.com/search?q=Soto+Ayam+Podjok+Kediri"
        },
        'tahu': {
            title: "Tahu Takwa (Kuning)",
            category: "Oleh-Oleh Khas",
            image: "https://images.unsplash.com/photo-1626805179040-1a67732d8478?q=80&w=1200",
            price: "Rp 25.000 / Besek",
            hours: "08.00 - 21.00 WIB",
            desc: "Tahu kuning khas Kediri memiliki tekstur yang sangat padat, kenyal, dan tidak mudah hancur.",
            mapLink: "http://googleusercontent.com/maps.google.com/search?q=Pusat+Tahu+Takwa+Kediri"
        },
        'bekicot': {
            title: "Sate Bekicot 02",
            category: "Kuliner Unik",
            image: "https://images.unsplash.com/photo-1529563021892-1dc30c6a5122?q=80&w=1200",
            price: "Rp 15.000 / Porsi",
            hours: "09.00 - 20.00 WIB",
            desc: "Kuliner ekstrem yang wajib dicoba! Daging bekicot diolah menjadi sate dengan bumbu kacang.",
            mapLink: "http://googleusercontent.com/maps.google.com/search?q=Sate+Bekicot+02+Kediri"
        },

        // --- F. DIREKTORI KULINER ---
        'soto_brantas': {
            title: "Soto Taman Brantas",
            category: "Kuliner View Sungai",
            image: "https://images.unsplash.com/photo-1603083647768-45a0ce733a77?q=80&w=1200",
            price: "Rp 12.000 / Porsi",
            hours: "07.00 - 21.00 WIB",
            desc: "Menikmati soto ayam kampung segar dengan mangkuk kecil (soto bathok) ditemani pemandangan aliran Sungai Brantas.",
            mapLink: "http://googleusercontent.com/maps.google.com/search?q=Soto+Taman+Brantas+Kediri"
        },
        'pecel_punten': {
            title: "Pecel Punten",
            category: "Kuliner Unik",
            image: "https://images.unsplash.com/photo-1602833280958-1657662ccc58?q=80&w=1200",
            price: "Rp 8.000 / Porsi",
            hours: "08.00 - 17.00 WIB",
            desc: "Pecel dengan lontong santan (punten) yang kenyal dan gurih.",
            mapLink: "http://googleusercontent.com/maps.google.com/search?q=Pecel+Punten+Kediri"
        },
        'sate_emprit': {
            title: "Sate Emprit Mbah Darmo",
            category: "Kuliner Unik",
            image: "https://images.unsplash.com/photo-1539586187773-4bd0c9be0779?q=80&w=1200",
            price: "Rp 25.000 / Porsi",
            hours: "09.00 - 21.00 WIB",
            desc: "Sate dari daging burung pipit (emprit). Meskipun kecil, rasanya sangat gurih dan empuk.",
            mapLink: "http://googleusercontent.com/maps.google.com/search?q=Sate+Emprit+Mbah+Darmo+Kediri"
        },
        'depot_wilis': {
            title: "Depot Wilis",
            category: "Masakan Rumahan",
            image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1200",
            price: "Rp 30.000 - Rp 50.000",
            hours: "07.00 - 21.00 WIB",
            desc: "Restoran keluarga legendaris di Kediri sejak puluhan tahun lalu. Menu andalannya adalah Rawon.",
            mapLink: "http://googleusercontent.com/maps.google.com/search?q=Depot+Wilis+Kediri"
        },
        'tahu_bahkacung': {
            title: "Tahu Bah Kacung",
            category: "Oleh-oleh",
            image: "https://images.unsplash.com/photo-1626805179040-1a67732d8478?q=80&w=1200",
            price: "Rp 35.000 / Besek",
            hours: "08.00 - 19.00 WIB",
            desc: "Didirikan pada tahun 1912, ini adalah tempat lahirnya Tahu Takwa di Kediri.",
            mapLink: "http://googleusercontent.com/maps.google.com/search?q=Tahu+Bah+Kacung+Kediri"
        },
        'tahu_poo': {
            title: "Tahu POO & GTT",
            category: "Oleh-oleh",
            image: "https://images.unsplash.com/photo-1562967963-ed7852c344e3?q=80&w=1200",
            price: "Rp 25.000 - Rp 50.000",
            hours: "07.00 - 21.00 WIB",
            desc: "Selain tahu kuning, di sini tersedia Tahu Pong (tahu kosong) yang renyah.",
            mapLink: "http://googleusercontent.com/maps.google.com/search?q=Tahu+POO+Kediri"
        },
        'getuk_baud': {
            title: "Getuk Pisang Ba'ud",
            category: "Jajanan Manis",
            image: "https://images.unsplash.com/photo-1606335191938-16fa1b0a51c4?q=80&w=1200",
            price: "Rp 8.000 / Biji",
            hours: "07.00 - 20.00 WIB",
            desc: "Jajanan tradisional berbentuk lontong tapi isinya manis. Terbuat dari Pisang Raja Nangka.",
            mapLink: "http://googleusercontent.com/maps.google.com/search?q=Getuk+Pisang+Baud+Kediri"
        },
        'coklat_tempe': {
            title: "Coklat Tempe",
            category: "Inovasi Unik",
            image: "https://images.unsplash.com/photo-1511381939415-e44015466834?q=80&w=1200",
            price: "Rp 15.000 / Batang",
            hours: "08.00 - 17.00 WIB",
            desc: "Perpaduan unik antara cokelat manis dengan keripik tempe yang renyah.",
            mapLink: "http://googleusercontent.com/maps.google.com/search?q=Coklat+Tempe+Kediri"
        },
        'bebek_carok': {
            title: "Bebek Carok",
            category: "Bumbu Hitam",
            image: "https://images.unsplash.com/photo-1609187680076-2e92c2df906d?q=80&w=1200",
            price: "Rp 30.000 / Porsi",
            hours: "10.00 - 22.00 WIB",
            desc: "Bebek goreng dengan bumbu hitam khas Madura yang kaya rempah dan gurih. Lokasi di Jl. Letjen Suparman.",
            mapLink: "http://googleusercontent.com/maps.google.com/search?q=Bebek+Carok+Kediri"
        },
        'waroeng_ss': {
            title: "Waroeng SS",
            category: "Spesialis Sambal",
            image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=1200",
            price: "Rp 25.000 / Orang",
            hours: "10.00 - 22.00 WIB",
            desc: "Surga bagi pecinta sambal! Menyediakan puluhan jenis sambal segar. Lokasi di Jl. Letjen Suparman.",
            mapLink: "http://googleusercontent.com/maps.google.com/search?q=Waroeng+SS+Kediri"
        },
        'balungan_pecok': {
            title: "Balungan Pecok",
            category: "Pedas Gila",
            image: "https://images.unsplash.com/photo-1544025162-d76690b609aa?q=80&w=1200",
            price: "Rp 35.000 / Porsi",
            hours: "11.00 - 21.00 WIB",
            desc: "Sop tulang sapi (balungan) dengan kuah super pedas yang nendang.",
            mapLink: "http://googleusercontent.com/maps.google.com/search?q=Balungan+Pecok+Kediri"
        },
        'nasgor_arang': {
            title: "Nasi Goreng Arang",
            category: "Kuliner Malam",
            image: "https://images.unsplash.com/photo-1603133872878-684f10834f81?q=80&w=1200",
            price: "Rp 15.000 / Porsi",
            hours: "18.00 - 00.00 WIB",
            desc: "Nasi goreng jawa yang dimasak menggunakan anglo (arang kayu), memberikan aroma 'smoky' yang khas.",
            mapLink: "http://googleusercontent.com/maps.google.com/search?q=Nasi+Goreng+Arang+Kediri"
        },

        // --- G. PENDIDIKAN ---
        'sman5': {
            title: "SMAN 5 Taruna Brawijaya",
            category: "Sekolah Unggulan",
            image: "SMA5.jpg",
            // [BARU] GALERI GAMBAR TAMBAHAN
            gallery: [
                "SMA5LOGO.png", // View Utama
                "SMA53.jpg", // View Taman/Suasana (Placeholder)
                "SMA52.jpg", // View Detail
                
            ],
            price: "Sekolah Negeri",
            hours: "07.00 - 15.30 WIB",
            desc: "Sekolah menengah atas unggulan di Kediri yang bekerjasama dengan TNI AD. Menerapkan sistem pendidikan semi-militer.",
            mapLink: "http://googleusercontent.com/maps.google.com/search?q=SMAN+5+Taruna+Brawijaya+Kediri"
        },
        'sman1': {
            title: "SMAN 1 Kediri",
            category: "Sekolah Favorit",
            image: "SMAS.jpg",
            price: "Sekolah Negeri",
            hours: "07.00 - 15.30 WIB",
            desc: "Dikenal sebagai SMASKA, sekolah prestisius dengan prestasi akademik tinggi.",
            mapLink: "http://googleusercontent.com/maps.google.com/search?q=SMAN+1+Kediri"
        },
        'sman2': {
            title: "SMAN 2 Kediri",
            category: "Sekolah Favorit",
            image: "SMA2.jpg",
            // [BARU] GALERI GAMBAR TAMBAHAN
            gallery: [
                "SMA24.jpg", // View Utama
                "SMA21.jpg", // View Taman/Suasana (Placeholder)
                "SMA23.jpg", // View Detail
                
            ],
            price: "Sekolah Negeri",
            hours: "07.00 - 15.30 WIB",
            desc: "Dikenal sebagai SMADA, unggul dalam akademik dan seni.",
            mapLink: "http://googleusercontent.com/maps.google.com/search?q=SMAN+2+Kediri"
        },
        'man2': {
            title: "MAN 2 Kota Kediri",
            category: "Madrasah Unggulan",
            image: "MAN2.jpg",
            price: "Madrasah Negeri",
            hours: "07.00 - 15.30 WIB",
            desc: "Madrasah Aliyah Negeri unggulan berbasis riset.",
            mapLink: "http://googleusercontent.com/maps.google.com/search?q=MAN+2+Kota+Kediri"
        }
    };


    // =========================================
    // 3. LOGIKA MODAL (POP-UP SYSTEM)
    // =========================================
    const modal = document.getElementById('modalDetail');
    const mapBtn = document.getElementById('modalMapLink'); // Tombol Peta
    const galleryContainer = document.getElementById('galleryContainer'); // Wadah Galeri
    const modalGallery = document.getElementById('modalGallery'); // Grid Galeri

    // Fungsi untuk membuka modal
    window.openModal = function(id) {
        const data = detailWisata[id];
        
        if(!data) {
            console.error("Data tidak ditemukan untuk ID:", id);
            return;
        }

        // Isi konten modal utama
        document.getElementById('modalTitle').innerText = data.title;
        document.getElementById('modalCategory').innerText = data.category;
        document.getElementById('modalImg').src = data.image;
        document.getElementById('modalPrice').innerText = data.price;
        document.getElementById('modalHours').innerText = data.hours;
        document.getElementById('modalDesc').innerText = data.desc;
        
        // LOGIKA TOMBOL MAPS (Sembunyikan jika link kosong)
        if (data.mapLink && data.mapLink !== "") {
            mapBtn.href = data.mapLink;
            mapBtn.classList.remove('hidden');
            mapBtn.style.display = 'inline-flex';
        } else {
            mapBtn.classList.add('hidden');
            mapBtn.style.display = 'none';
        }

        // LOGIKA GALERI FOTO (Tambahan)
        if (data.gallery && data.gallery.length > 0) {
            // Tampilkan wadah galeri
            galleryContainer.classList.remove('hidden');
            modalGallery.innerHTML = ''; // Reset isi galeri lama

            // Loop gambar di array gallery
            data.gallery.forEach(imgUrl => {
                const imgDiv = document.createElement('div');
                imgDiv.className = 'h-16 w-full rounded-lg overflow-hidden cursor-pointer border-2 border-transparent hover:border-kediri-purple transition';
                imgDiv.innerHTML = `<img src="${imgUrl}" class="w-full h-full object-cover" onclick="changeMainImage('${imgUrl}')">`;
                modalGallery.appendChild(imgDiv);
            });
        } else {
            // Sembunyikan wadah galeri jika tidak ada
            galleryContainer.classList.add('hidden');
        }

        // Tampilkan modal
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden'; 
    };

    // Fungsi Ganti Gambar Utama (saat thumbnail diklik)
    window.changeMainImage = function(url) {
        const mainImg = document.getElementById('modalImg');
        mainImg.src = url;
    }

    // Fungsi Tutup Modal
    window.closeModal = function() {
        modal.classList.add('hidden');
        document.body.style.overflow = 'auto'; 
    };

    document.addEventListener('keydown', function(event) {
        if (event.key === "Escape") {
            window.closeModal();
        }
    });

    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            window.closeModal();
        }
    });

});