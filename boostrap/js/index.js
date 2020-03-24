var ujianteori1 = document.getElementById("teori1");
var ujianteori2 = document.getElementById("teori2");
var ujianpraktek = document.getElementById("praktek");
var hasilujian = document.getElementById("nilaiujian");

var teori1 = 90;
var teori2 = 80;
var praktek = 85;
var nilaiujian = (teori1 + teori2 + praktek) / 3;

ujianteori1.innerHTML = "Nilai Ujian Teori 1 : " + teori1;
ujianteori2.innerHTML = "Nilai Ujian Teori 2 : " + teori2;
ujianpraktek.innerHTML = "Nilai Ujian Praktek : " + praktek;
hasilujian.innerHTML = "Nilai Rata-rata Ujian : " + nilaiujian;

var nilaitoefl = document.getElementById("toefl");
var scoretoefl = document.getElementById("toefl1");
var toefl = 497;
var toefl1 = 497;

if (toefl >= 500) {
  nilaitoefl.innerHTML = "Nilai 100";
} else if (toefl > 450) {
  nilaitoefl.innerHTML = "Nilai 85";
} else if (toefl < 450) {
  nilaitoefl.innerHTML = "Nilai 50";
}

scoretoefl.innerHTML = "Jumlah : " + toefl1;

var statusbeasiswa = document.getElementById("beasiswa");

var nilaitoefl = 85;
var beasiswa = (nilaiujian + nilaitoefl) / 2;

var statusbea = document.getElementById("cek");
var cek = 90;
if (cek >= 90) {
  statusbea.innerHTML = "LULUS";
} else if (cek < 90) {
  statusbea.innerHTML = "TIDAK LULUS";
}
statusbeasiswa.innerHTML = "Nilai : " + beasiswa;
