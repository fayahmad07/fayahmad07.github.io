// English lives in index.html, so the page still works without JavaScript.
const indonesian = {
  skip: "Langsung ke proyek",
  navProjects: "Proyek",
  navSkills: "Keahlian",
  navContact: "Kontak",
  status: "Terbuka untuk pekerjaan penuh waktu",
  heroTitle: "Saya membuat software yang bisa dijalankan sendiri, dan melatih mesin untuk melihat.",
  heroLede: "Saya mahasiswa yang menekuni pengembangan full-stack dan machine learning, dari aplikasi siap pakai di ponsel yang berjalan di server sendiri hingga pengklasifikasi gambar yang dilatih dengan ribuan foto.",
  ctaProjects: "Lihat proyek saya",
  ctaEmail: "Kirim email",
  private: "Repo privat",
  amplopSummary: "Aplikasi anggaran metode amplop yang di-host sendiri: beri tugas pada setiap rupiah sebelum dibelanjakan. Bisa dipasang di ponsel, dan semua datanya tersimpan dalam satu file SQLite.",
  amplop1: "Penganggaran dengan rollover bulanan, target tabungan, transfer, dan rekonsiliasi akun.",
  amplop2: "Impor CSV yang membaca mutasi bank dan e-wallet, menyarankan pemetaan kolom, dan melewati data duplikat.",
  amplop3: "Laporan pengeluaran dan kekayaan bersih dengan grafik buatan sendiri, serta anggaran multi-mata uang.",
  bacaSummary: "Baca ebook, dengarkan audiobook, dan lanjutkan tepat dari posisi terakhir di keduanya.",
  baca1: "Mentranskripsi audiobook dengan Whisper dan mencocokkan setiap kalimat buku dengan waktunya di audio.",
  baca2: "Penyelarasan buatan sendiri yang berpatokan pada urutan empat kata yang unik, lalu mengisi celah di antaranya.",
  baca3: "Worker latar belakang yang memproses audio per bagian, menjaga memori tetap stabil, dan melanjutkan setelah restart.",
  angkatSummary: "Catatan gym pribadi untuk latihan, program, progres, dan nutrisi. Bisa dipasang di ponsel dan tetap berjalan tanpa koneksi.",
  angkat1: "Offline-first: setiap catatan tersimpan di ponsel, lalu tersinkron ke server saat koneksi kembali.",
  angkat2: "Saat dua perangkat mengubah sesi latihan yang sama, perubahannya digabung per set sehingga tidak saling menimpa.",
  angkat3: "Pustaka 870+ gerakan dengan foto contoh dan peta otot, serta analisis foto makanan opsional dengan Gemini.",
  angkatHomeAlt: "Layar utama Angkat dengan cincin progres hari ini, aktivitas mingguan, dan aksi cepat.",
  angkatNutritionAlt: "Layar nutrisi Angkat dengan kalori, makro, air, dan makanan yang dicatat.",
  fruitTitle: "Klasifikasi Kesegaran Buah",
  fruitSummary: "Penelitian mandiri yang membandingkan tiga CNN pre-trained dalam membedakan apel dan pisang segar dari yang busuk, dengan 10.159 gambar dalam empat kelas.",
  fruitNote: "Akurasi pada 2.030 gambar validasi. Model terbaik juga dicoba pada gambar dari luar dataset.",
  fruitLink1: "Kode proyek",
  fruitLink2: "Notebook penelitian",
  perceptronTitle: "Notebook Perceptron",
  perceptronSummary: "Implementasi perceptron, jaringan saraf paling dasar, langkah demi langkah, mencakup pembaruan bobot dan plot batas keputusan.",
  viewCode: "Lihat kode",
  navLabel: "Utama",
  barsLabel: "Akurasi pada 2.030 gambar validasi",
  copyEmail: "Salin email",
  copied: "Tersalin",
  emailSelected: "Email dipilih di atas",
  close: "Tutup",
  lightboxLabel: "Gambar yang diperbesar",
  demoCaption: "Aplikasi asli dengan data demo buatan.",
  bacaCaption: "Aplikasi asli, ditampilkan dengan buku domain publik Alice's Adventures in Wonderland.",
  fruitMatrixCaption: "Confusion matrix InceptionV3 dari notebook. Kesalahan terbanyak adalah apel sehat yang dilabeli busuk.",
  amplopPlanAlt: "Layar anggaran Amplop di desktop dengan kategori, jumlah yang dialokasikan, dan saldo tersedia.",
  amplopHomeAlt: "Layar utama Amplop di ponsel dengan total saldo, aksi cepat, anggaran bulan ini, dan transaksi terbaru.",
  bacaLibraryAlt: "Layar utama BacaDengar dengan korsel sampul buku dan filter rak.",
  bacaReaderAlt: "Pembaca BacaDengar menampilkan satu bab Alice's Adventures in Wonderland.",
  fruitMatrixAlt: "Confusion matrix InceptionV3. Sebagian besar prediksi benar; kesalahan utama adalah 116 apel sehat yang dilabeli busuk.",
  skillLangs: "Bahasa pemrograman",
  skillWeb: "Web",
  skillMl: "Machine learning",
  skillOps: "Peralatan",
  contactTitle: "Mari berbincang",
  contactText: "Saya sedang mencari pekerjaan penuh waktu di bidang software atau machine learning. Email adalah cara terbaik untuk menghubungi saya.",
};

const elements = [...document.querySelectorAll("[data-i18n]")];
const english = new Map(elements.map((el) => [el, el.textContent]));
const images = [...document.querySelectorAll("[data-i18n-alt]")];
const englishAlt = new Map(images.map((img) => [img, img.alt]));
const labelled = [...document.querySelectorAll("[data-i18n-label]")];
const englishLabel = new Map(labelled.map((el) => [el, el.getAttribute("aria-label")]));
const buttons = [...document.querySelectorAll("[data-lang]")];

function setLanguage(lang) {
  document.documentElement.lang = lang;
  for (const el of elements) {
    el.textContent = lang === "id" ? indonesian[el.dataset.i18n] : english.get(el);
  }
  for (const img of images) {
    img.alt = lang === "id" ? indonesian[img.dataset.i18nAlt] : englishAlt.get(img);
  }
  for (const el of labelled) {
    el.setAttribute("aria-label", lang === "id" ? indonesian[el.dataset.i18nLabel] : englishLabel.get(el));
  }
  for (const button of buttons) {
    button.setAttribute("aria-pressed", String(button.dataset.lang === lang));
  }
}

function savedLanguage() {
  try {
    return localStorage.getItem("lang");
  } catch {
    return null;
  }
}

for (const button of buttons) {
  button.addEventListener("click", () => {
    setLanguage(button.dataset.lang);
    try {
      localStorage.setItem("lang", button.dataset.lang);
    } catch {
      // The choice just won't be remembered.
    }
  });
}

const preferred = savedLanguage() ?? (navigator.language.startsWith("id") ? "id" : "en");
if (preferred === "id") setLanguage("id");

// Links keep working as plain image links if this script doesn't run.
const lightbox = document.querySelector("#lightbox");
const lightboxImage = lightbox.querySelector("img");

for (const link of document.querySelectorAll(".shots a")) {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    lightboxImage.src = link.href;
    lightboxImage.alt = link.querySelector("img").alt;
    lightbox.showModal();
  });
}

document.querySelector("#lightbox-close").addEventListener("click", () => lightbox.close());
lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) lightbox.close();
});
lightbox.addEventListener("close", () => lightboxImage.removeAttribute("src"));

// mailto does nothing on a computer with no mail app, so offer copying too.
const copyButton = document.querySelector("#copy-email");
const copyStatus = document.querySelector("#copy-status");
let copyTimer;

async function copyText(text) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    // Browsers can refuse clipboard access, so fall back to the older way.
    const field = document.createElement("textarea");
    field.value = text;
    field.className = "sr-only";
    document.body.append(field);
    field.select();
    const copied = document.execCommand("copy");
    field.remove();
    copyButton.focus();
    return copied;
  }
}

copyButton.hidden = false;
copyButton.addEventListener("click", async () => {
  const copied = await copyText(copyButton.dataset.email);
  // If copying is blocked completely, select the address so it's ready to copy by hand.
  if (!copied) getSelection().selectAllChildren(document.querySelector(".email"));
  const indonesianText = copied ? indonesian.copied : indonesian.emailSelected;
  const englishText = copied ? "Copied" : "Email selected above";
  const message = document.documentElement.lang === "id" ? indonesianText : englishText;
  copyButton.textContent = message;
  copyStatus.textContent = message;
  clearTimeout(copyTimer);
  copyTimer = setTimeout(() => {
    setLanguage(document.documentElement.lang);
    copyStatus.textContent = "";
  }, copied ? 2000 : 4000);
});

// Show which section is on screen in the nav.
const navLinks = [...document.querySelectorAll(".topbar nav a")];
const sections = navLinks.map((link) => document.querySelector(link.hash));

function markCurrentSection() {
  const atBottom = innerHeight + scrollY >= document.documentElement.scrollHeight - 2;
  const passed = sections.filter((section) => section.getBoundingClientRect().top <= innerHeight * 0.4);
  const current = atBottom ? sections.at(-1) : passed.at(-1);
  navLinks.forEach((link, i) => {
    if (sections[i] === current) link.setAttribute("aria-current", "true");
    else link.removeAttribute("aria-current");
  });
}

addEventListener("scroll", markCurrentSection, { passive: true });
markCurrentSection();
