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
  fruitTitle: "Klasifikasi Kesegaran Buah",
  fruitSummary: "Penelitian mandiri yang membandingkan tiga CNN pre-trained dalam membedakan apel dan pisang segar dari yang busuk, dengan 10.159 gambar dalam empat kelas.",
  fruitNote: "Akurasi pada 2.030 gambar validasi. Model terbaik juga dicoba pada gambar dari luar dataset.",
  fruitLink1: "Kode proyek",
  fruitLink2: "Notebook penelitian",
  perceptronTitle: "Notebook Perceptron",
  perceptronSummary: "Implementasi perceptron, jaringan saraf paling dasar, langkah demi langkah, mencakup pembaruan bobot dan plot batas keputusan.",
  viewCode: "Lihat kode",
  skillLangs: "Bahasa pemrograman",
  skillWeb: "Web",
  skillMl: "Machine learning",
  skillOps: "Peralatan",
  contactTitle: "Mari berbincang",
  contactText: "Saya sedang mencari pekerjaan penuh waktu di bidang software atau machine learning. Email adalah cara terbaik untuk menghubungi saya.",
};

const elements = [...document.querySelectorAll("[data-i18n]")];
const english = new Map(elements.map((el) => [el, el.textContent]));
const buttons = [...document.querySelectorAll("[data-lang]")];

function setLanguage(lang) {
  document.documentElement.lang = lang;
  for (const el of elements) {
    el.textContent = lang === "id" ? indonesian[el.dataset.i18n] : english.get(el);
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
