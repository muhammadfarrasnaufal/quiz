const questions = [
  {
    level: 'Pemanasan',
    type: 'fun',
    prompt: 'Kalau kamu datang ke kampus tapi belum kenal siapa-siapa, mode kamu adalah…',
    options: ['Senyum ke semua orang, siapa tahu dapat teman 😎', 'Langsung cari Wi‑Fi 📶', 'Duduk sendiri sambil scroll TikTok', 'Pulang karena “belum siap secara mental” 😭'],
    correct: 0,
    explanation: 'Tenang, kuliah itu bukan survival game. Teman bisa dicari.'
  },
  {
    level: 'Pemanasan',
    type: 'fun',
    prompt: 'Hari pertama kuliah, barang yang PALING wajib dibawa adalah…',
    options: ['Buku + alat tulis', 'Laptop/HP', 'Semangat', 'Powerbank karena hidup tanpa baterai adalah horor'],
    correct: 3,
    explanation: 'Baterai 1% lebih menegangkan daripada ujian.'
  },
  {
    level: 'Pemanasan',
    type: 'fun',
    prompt: 'Kalau dosen bilang “minggu depan kita presentasi”, respons Gen Z biasanya…',
    options: ['Siap, Pak/Bu!', 'Langsung bikin PPT', '“Kelompoknya siapa aja?” 👀', 'Screenshot kalender sambil berharap lupa'],
    correct: 2,
    explanation: 'Bisa dibilang ini respons yang paling realistis.'
  },
  {
    level: 'Pemanasan',
    type: 'fun',
    prompt: 'Kamu telat masuk kelas 5 menit. Apa yang dilakukan?',
    options: ['Masuk dengan percaya diri', 'Menunggu sampai jam berikutnya', 'Jalan pelan-pelan seolah tidak terjadi apa-apa', 'Kirim chat: “Pak/Bu, izin terlambat karena…” *mikir alasan 10 menit*'],
    correct: 0,
    explanation: 'Tenang, ini adalah gaya paling santai tapi berani.'
  },
  {
    level: 'Pemanasan',
    type: 'fun',
    prompt: 'Ketika tugas deadline malam ini, kamu biasanya…',
    options: ['Kerjakan dari jauh-jauh hari', 'Kerjakan sore', 'Kerjakan jam 22.00', 'Jam 23.58 baru berkata: “BISMILLAH”'],
    correct: 3,
    explanation: 'Yang penting tugas masuk. Jangan ditiru kalau mau hidup tenang.'
  },
  {
    level: 'UBS Knowledge',
    type: 'scored',
    prompt: 'Universitas Bani Saleh berada di kota mana?',
    options: ['Bekasi', 'Bandung', 'Bogor', 'Depok'],
    correct: 0,
    explanation: 'Jawaban benar: Bekasi.'
  },
  {
    level: 'UBS Knowledge',
    type: 'scored',
    prompt: 'Kalau kamu ingin mengetahui informasi resmi tentang UBS, sumber paling aman adalah…',
    options: ['Katanya teman', 'Komentar TikTok random', 'Website resmi UBS', 'Grup WhatsApp keluarga'],
    correct: 2,
    explanation: 'Website resmi adalah sumber paling valid.'
  },
  {
    level: 'UBS Knowledge',
    type: 'scored',
    prompt: 'Mau memilih program studi di UBS. Langkah paling bijak adalah…',
    options: ['Pilih berdasarkan nama yang paling keren', 'Ikut teman', 'Cek informasi prodi dan sesuaikan dengan minat', 'Pilih yang katanya tugasnya sedikit'],
    correct: 2,
    explanation: 'Memilih sesuai minat jauh lebih bijak daripada ikut tren.'
  },
  {
    level: 'UBS Knowledge',
    type: 'scored',
    prompt: 'Kamu belum tahu mau masuk prodi apa. Yang sebaiknya dilakukan?',
    options: ['Panik', 'Tanya teman', 'Cari informasi prodi dan kenali minat diri', 'Pilih secara random seperti spin wheel'],
    correct: 2,
    explanation: 'Kenali diri dan kebutuhan masa depan lebih baik daripada random.'
  },
  {
    level: 'UBS Knowledge',
    type: 'scored',
    prompt: 'Kalau kamu tertarik dunia teknologi, langkah pertama adalah…',
    options: ['Langsung beli robot 🤖', 'Cari program studi yang relevan', 'Nonton tutorial 5 menit lalu tidur', 'Bilang “aku anak IT” tanpa belajar coding'],
    correct: 1,
    explanation: 'Program studi yang relevan adalah langkah awal yang tepat.'
  },
  {
    level: 'Gen Z Moment',
    type: 'fun',
    prompt: 'Dosen: “Ada yang mau bertanya?” Kamu:',
    options: ['Angkat tangan', 'Menunduk sambil pura-pura mencatat', 'Tatap teman berharap dia bertanya', 'Tiba-tiba ingin menghilang dari muka bumi'],
    correct: 0,
    explanation: 'Tidak ada jawaban salah. Ini hanya pemeriksaan mental.'
  },
  {
    level: 'Gen Z Moment',
    type: 'fun',
    prompt: 'Ketika dosen bilang “tugas ini mudah kok”...',
    options: ['Tenang', 'Optimis', 'Curiga', 'Langsung buka ChatGPT'],
    correct: 2,
    explanation: 'Kurang ajar, tapi benar: kalau dosen bilang mudah, biasanya hati mulai curiga.'
  },
  {
    level: 'Gen Z Moment',
    type: 'fun',
    prompt: 'Ketika Wi‑Fi kampus tiba-tiba mati saat tugas belum tersimpan…',
    options: ['Tetap tenang', 'Restart laptop', 'Cek Wi‑Fi', 'Mengucapkan: “YA ALLAH JANGAN SAMPAI…”'],
    correct: 3,
    explanation: 'Tepat. Wi‑Fi mati itu lebih menegangkan daripada ujian.'
  },
  {
    level: 'Gen Z Moment',
    type: 'fun',
    prompt: 'Teman bilang: “Bro, tugas udah?” Kamu:',
    options: ['“Udah.”', '“Belum.”', '“Tugas apa?” 💀', 'langsung mode pesawat'],
    correct: 2,
    explanation: 'Respons paling Gen Z adalah berpura-pura tidak paham.'
  },
  {
    level: 'Gen Z Moment',
    type: 'fun',
    prompt: 'Kalau masuk kelas pagi jam 07.30, kamu adalah tipe…',
    options: ['Bangun jam 05.00', 'Bangun jam 06.00', 'Alarm bunyi → snooze → snooze → snooze', '“Hadir secara spiritual”'],
    correct: 2,
    explanation: 'Yang penting jangan cuma hadir secara spiritual.'
  },
  {
    level: 'Kamu Cocok Jadi Mahasiswa?',
    type: 'fun',
    prompt: 'Kalau mendapat tugas kelompok, kamu biasanya menjadi…',
    options: ['Ketua', 'Desainer', 'Presenter', 'Orang yang muncul saat deadline 💀'],
    correct: 3,
    explanation: 'Deadline mode memang sering jadi karakter utama.'
  },
  {
    level: 'Kamu Cocok Jadi Mahasiswa?',
    type: 'fun',
    prompt: 'Kalau presentasi di depan kelas…',
    options: ['Santai', 'Sedikit nervous', 'Tangan dingin', 'PPT tiba-tiba terlihat seperti bahasa alien 👽'],
    correct: 3,
    explanation: 'PPT alien adalah tanda kejujuran akademik.'
  },
  {
    level: 'Kamu Cocok Jadi Mahasiswa?',
    type: 'fun',
    prompt: 'Skill mahasiswa yang paling penting menurutmu?',
    options: ['Public speaking', 'Problem solving', 'Time management', 'Bisa bertahan hidup sampai akhir semester 😭'],
    correct: 3,
    explanation: 'Semua benar. Yang terakhir jangan disepelekan.'
  },
  {
    level: 'Kamu Cocok Jadi Mahasiswa?',
    type: 'fun',
    prompt: 'Kalau mendapat nilai bagus setelah belajar semalaman…',
    options: ['Bersyukur', 'Senang', 'Screenshot nilai', 'Upload story: “Alhamdulillah, hasil tidak mengkhianati begadang.”'],
    correct: 3,
    explanation: 'Boleh banget, asal tetap disiplin ke depannya.'
  },
  {
    level: 'Kamu Cocok Jadi Mahasiswa?',
    type: 'fun',
    prompt: 'Kalau mendapat nilai kurang bagus…',
    options: ['Evaluasi', 'Belajar lagi', 'Tanya dosen', '“Sistemnya yang salah.” 😭'],
    correct: 3,
    explanation: 'Evaluasi dulu, menyalahkan sistem belakangan.'
  },
  {
    level: 'Future Student',
    type: 'scored',
    prompt: 'Kuliah bukan hanya soal nilai. Salah satu hal penting yang bisa dikembangkan adalah…',
    options: ['Networking', 'Skill', 'Pengalaman organisasi', 'Semuanya benar'],
    correct: 3,
    explanation: 'Jawaban benar: semuanya benar.'
  },
  {
    level: 'Future Student',
    type: 'scored',
    prompt: 'Kalau kamu ingin aktif di kampus, kamu bisa mencoba…',
    options: ['Organisasi mahasiswa', 'Kepanitiaan', 'Komunitas/kegiatan kampus', 'Semuanya'],
    correct: 3,
    explanation: 'Aktivitas kampus bisa memperluas pengalaman dan jaringan.'
  },
  {
    level: 'Future Student',
    type: 'scored',
    prompt: 'Kamu punya ide teknologi yang keren. Apa yang sebaiknya dilakukan?',
    options: ['Simpan di Notes', 'Ceritakan ke teman', 'Kembangkan menjadi project', 'Tunggu sampai orang lain membuatnya 😭'],
    correct: 2,
    explanation: 'Ide harus dikembangkan menjadi proyek nyata, bukan hanya disimpan.'
  },
  {
    level: 'Future Student',
    type: 'scored',
    prompt: 'Kalau kamu menemukan masalah di sekitar, mindset mahasiswa yang bagus adalah…',
    options: ['“Yaudah.”', '“Bukan urusan gue.”', '“Bisa nggak ya dibuat solusi?”', '“Upload dulu ke story.”'],
    correct: 2,
    explanation: 'Mahasiswa yang baik biasanya mulai berpikir solusi, bukan sekadar komentar.'
  },
  {
    level: 'Maestro',
    type: 'fun',
    prompt: 'Laptop tinggal 2%. Charger tertinggal. Dosen bilang: “Presentasi kelompok kamu berikutnya.” Apa responsmu?',
    options: ['Pinjam charger', 'Cari colokan', 'Berdoa', '“Ya Allah, kalau ini ujian, saya siap.”'],
    correct: 3,
    explanation: 'Semua pilihan bisa jadi penyelamat, tapi doanya tetap harus ada.'
  },
  {
    level: 'Maestro',
    type: 'fun',
    prompt: 'Dosen mengatakan: “Tugas dikumpulkan HARI INI.” Otak kamu:',
    options: ['10%', '50%', '99%', 'ERROR 404: MOTIVATION NOT FOUND'],
    correct: 3,
    explanation: 'Loading otak mahasiswa memang sering seperti itu.'
  },
  {
    level: 'Maestro',
    type: 'fun',
    prompt: 'Kamu sedang tidur. Tiba-tiba HP berbunyi: “Grup Kelas — 47 pesan baru.” Hal pertama yang kamu pikirkan:',
    options: ['Ada tugas', 'Ada perubahan jadwal', 'Ada drama', '“Semoga bukan semuanya penting.”'],
    correct: 3,
    explanation: 'Kebiasaan grup kelas memang sering membuat hati berdebar.'
  },
  {
    level: 'Maestro',
    type: 'fun',
    prompt: 'Kamera Zoom/Meet kamu mati. Dosen: “Farras, coba kameranya dinyalakan.” Kamu:',
    options: ['Langsung nyalakan', 'Pura-pura koneksi bermasalah', 'Panik mencari tombol kamera', 'Berharap dosen lupa nama'],
    correct: 0,
    explanation: 'Tindakan paling cepat dan paling sehat adalah langsung nyalakan kamera.'
  },
  {
    level: 'Maestro',
    type: 'fun',
    prompt: 'Besok: Ujian, Presentasi, Tugas, Rapat organisasi. Hari ini kamu:',
    options: ['Membuat jadwal', 'Mengerjakan satu-satu', 'Panik', 'Rebahan dulu untuk mengumpulkan energi'],
    correct: 0,
    explanation: 'Jadwal adalah jawaban paling masuk akal di dunia mahasiswa.'
  },
  {
    level: 'Final Question',
    type: 'fun',
    prompt: 'Setelah melihat semua pertanyaan tadi... Apakah kamu siap menjadi mahasiswa UBS?',
    options: ['SIAP BANGET 🔥', 'Siap, tapi nervous 😭', 'Masih mikir', 'Aku cuma datang karena quiz-nya 😂'],
    correct: 0,
    explanation: 'Apapun jawabanmu, semangat ya. Mahasiswa itu proses, bukan sekadar label.'
  }
];

const state = {
  currentIndex: 0,
  score: 0,
  answered: false,
  userAnswers: [],
  playerName: ''
};

const startScreen = document.getElementById('startScreen');
const quizScreen = document.getElementById('quizScreen');
const nameScreen = document.getElementById('nameScreen');
const resultScreen = document.getElementById('resultScreen');
const scoreDisplay = document.getElementById('scoreDisplay');
const levelLabel = document.getElementById('levelLabel');
const progressLabel = document.getElementById('progressLabel');
const progressBar = document.getElementById('progressBar');
const questionText = document.getElementById('questionText');
const optionsContainer = document.getElementById('optionsContainer');
const feedback = document.getElementById('feedback');
const nextBtn = document.getElementById('nextBtn');
const resultTitle = document.getElementById('resultTitle');
const resultMessage = document.getElementById('resultMessage');
const finalScore = document.getElementById('finalScore');
const correctCount = document.getElementById('correctCount');
const totalScored = document.getElementById('totalScored');
const leaderboardList = document.getElementById('leaderboardList');
const playerNameInput = document.getElementById('playerNameInput');
const submitNameBtn = document.getElementById('submitNameBtn');
const confettiLayer = document.getElementById('confettiLayer');
const themeButtons = document.querySelectorAll('.theme-btn');
const modeButtons = document.querySelectorAll('.mode-btn');

const scoredQuestions = questions.filter((question) => question.type === 'scored');
const leaderboardKey = 'ubs-quiz-mode';
const modeKey = 'ubs-quiz-mode';
const API_BASE = 'http://localhost:5000/api';

// Real-time leaderboard polling
let leaderboardPollingInterval = null;
const POLLING_INTERVAL = 2000; // Update every 2 seconds

async function getLeaderboardFromServer() {
  try {
    const response = await fetch(`${API_BASE}/leaderboard`);
    const result = await response.json();
    if (result.success) {
      return result.data || [];
    }
    return [];
  } catch (error) {
    console.error('Error fetching leaderboard:', error);
    return [];
  }
}

async function sendScoreToServer(playerName, score) {
  try {
    const response = await fetch(`${API_BASE}/score`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: playerName,
        score: score
      })
    });
    
    const result = await response.json();
    if (result.success) {
      return result.leaderboard || [];
    }
    return [];
  } catch (error) {
    console.error('Error sending score:', error);
    return [];
  }
}

async function renderLeaderboard(currentScore, playerName) {
  // Send score to server
  const leaderboard = await sendScoreToServer(playerName, currentScore);
  
  // Clear existing items
  leaderboardList.innerHTML = '';

  const medals = ['👑', '🥈', '🥉', '', ''];

  leaderboard.forEach((entry, index) => {
    const item = document.createElement('li');
    item.className = 'leaderboard-item';
    if (entry.name === playerName) {
      item.classList.add('current-player');
    }
    const medal = medals[index] || '';
    const rankText = index + 1;
    item.innerHTML = `
      <span class="leaderboard-rank">${medal || rankText}</span>
      <span class="leaderboard-name">${entry.name}</span>
      <span class="leaderboard-score">${entry.score}</span>
    `;
    leaderboardList.appendChild(item);
  });
}

async function refreshLeaderboardDisplay() {
  try {
    const leaderboard = await getLeaderboardFromServer();
    leaderboardList.innerHTML = '';

    const medals = ['👑', '🥈', '🥉', '', ''];

    leaderboard.forEach((entry, index) => {
      const item = document.createElement('li');
      item.className = 'leaderboard-item';
      const medal = medals[index] || '';
      const rankText = index + 1;
      item.innerHTML = `
        <span class="leaderboard-rank">${medal || rankText}</span>
        <span class="leaderboard-name">${entry.name}</span>
        <span class="leaderboard-score">${entry.score}</span>
      `;
      leaderboardList.appendChild(item);
    });
  } catch (error) {
    console.error('Error refreshing leaderboard:', error);
  }
}

function startLeaderboardPolling() {
  // Stop any existing polling
  if (leaderboardPollingInterval) {
    clearInterval(leaderboardPollingInterval);
  }
  
  // Poll every 2 seconds
  leaderboardPollingInterval = setInterval(refreshLeaderboardDisplay, POLLING_INTERVAL);
}

function stopLeaderboardPolling() {
  if (leaderboardPollingInterval) {
    clearInterval(leaderboardPollingInterval);
    leaderboardPollingInterval = null;
  }
}

function setScreen(screen) {
  startScreen.classList.remove('active');
  quizScreen.classList.remove('active');
  resultScreen.classList.remove('active');
  screen.classList.add('active');
}

function getCurrentQuestion() {
  return questions[state.currentIndex];
}

function renderQuestion() {
  const current = getCurrentQuestion();
  state.answered = false;
  feedback.classList.add('hidden');
  feedback.classList.remove('success', 'warning');
  nextBtn.disabled = true;

  levelLabel.textContent = `${current.level}`;
  progressLabel.textContent = `${state.currentIndex + 1} / ${questions.length}`;
  progressBar.style.width = `${((state.currentIndex + 1) / questions.length) * 100}%`;
  questionText.textContent = current.prompt;
  scoreDisplay.textContent = state.score;

  optionsContainer.innerHTML = '';

  current.options.forEach((optionText, index) => {
    const option = document.createElement('button');
    option.type = 'button';
    option.className = 'option-btn';
    option.textContent = `${String.fromCharCode(65 + index)}. ${optionText}`;
    option.addEventListener('click', () => handleAnswer(index));
    optionsContainer.appendChild(option);
  });
}

function handleAnswer(selectedIndex) {
  if (state.answered) return;

  const current = getCurrentQuestion();
  const optionButtons = [...document.querySelectorAll('.option-btn')];

  optionButtons.forEach((button, index) => {
    button.classList.remove('selected', 'correct', 'wrong');

    if (index === selectedIndex) {
      button.classList.add('selected');
    }

    if (current.type === 'scored') {
      if (index === current.correct) {
        button.classList.add('correct');
      }
      if (index === selectedIndex && index !== current.correct) {
        button.classList.add('wrong');
      }
    }
  });

  state.answered = true;
  nextBtn.disabled = false;
  state.userAnswers[state.currentIndex] = selectedIndex;

  if (current.type === 'scored') {
    const isCorrect = selectedIndex === current.correct;
    if (isCorrect) {
      state.score += 1;
      feedback.textContent = `Benar! ${current.explanation}`;
      feedback.classList.add('success');
    } else {
      feedback.textContent = `Salah. ${current.explanation}`;
      feedback.classList.add('warning');
    }
  } else {
    feedback.textContent = current.explanation;
    feedback.classList.add('warning');
  }

  feedback.classList.remove('hidden');
  scoreDisplay.textContent = state.score;
}

function launchConfetti() {
  const colors = ['#8b5cf6', '#22d3ee', '#ff5ebc', '#3ce7b1', '#fbbf24', '#f87171'];

  for (let i = 0; i < 120; i += 1) {
    const piece = document.createElement('span');
    piece.className = 'confetti-piece';
    piece.style.setProperty('--confetti-color', colors[i % colors.length]);
    piece.style.left = `${Math.random() * 100}%`;
    piece.style.setProperty('--x', `${(Math.random() - 0.5) * 360}px`);
    piece.style.animationDelay = `${Math.random() * 0.25}s`;
    confettiLayer.appendChild(piece);

    setTimeout(() => piece.remove(), 2800);
  }
}

function showNameInput() {
  playerNameInput.value = '';
  playerNameInput.focus();
  setScreen(nameScreen);
}

async function showResult() {
  const correctTotal = state.score;
  const maxScored = scoredQuestions.length;

  finalScore.textContent = state.score;
  correctCount.textContent = correctTotal;
  totalScored.textContent = maxScored;
  
  // Render leaderboard (async - will send score to server)
  await renderLeaderboard(state.score, state.playerName);
  
  // Start real-time polling to show other players' scores
  startLeaderboardPolling();

  if (state.score >= 7) {
    resultTitle.textContent = 'Kamu punya potensi besar!';
    resultMessage.textContent = 'Skor kamu cukup solid untuk mulai perjalanan di UBS dengan semangat yang oke.';
  } else if (state.score >= 4) {
    resultTitle.textContent = 'Masih dalam proses, tapi bagus!';
    resultMessage.textContent = 'Kamu sudah mulai paham dunia kampus dan UBS. Tinggal lanjut belajar dan explore lebih dalam.';
  } else {
    resultTitle.textContent = 'Belum final, tapi tetap semangat!';
    resultMessage.textContent = 'Jangan khawatir. Kamu masih punya waktu untuk mengenal UBS, prodi, dan lingkungan kampus dengan lebih matang.';
  }

  launchConfetti();
  setScreen(resultScreen);
}

function nextQuestion() {
  if (!state.answered) return;

  if (state.currentIndex < questions.length - 1) {
    state.currentIndex += 1;
    renderQuestion();
  } else {
    showNameInput();
  }
}

document.getElementById('startBtn').addEventListener('click', () => {
  stopLeaderboardPolling(); // Stop real-time polling before starting new quiz
  state.currentIndex = 0;
  state.score = 0;
  state.answered = false;
  state.userAnswers = [];
  state.playerName = '';
  setScreen(quizScreen);
  renderQuestion();
});

document.getElementById('nextBtn').addEventListener('click', nextQuestion);

submitNameBtn.addEventListener('click', () => {
  const name = playerNameInput.value.trim();
  state.playerName = name || 'Anonim';
  showResult();
});

playerNameInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    submitNameBtn.click();
  }
});

document.getElementById('restartBtn').addEventListener('click', () => {
  stopLeaderboardPolling(); // Stop real-time polling
  state.currentIndex = 0;
  state.score = 0;
  state.answered = false;
  state.userAnswers = [];
  state.playerName = '';
  setScreen(startScreen);
});

themeButtons.forEach((button) => {
  button.addEventListener('click', () => {
    themeButtons.forEach((btn) => btn.classList.toggle('active', btn === button));
    document.body.setAttribute('data-theme', button.dataset.theme);
    localStorage.setItem('ubs-quiz-theme', button.dataset.theme);
  });
});

modeButtons.forEach((button) => {
  button.addEventListener('click', () => {
    modeButtons.forEach((btn) => btn.classList.toggle('active', btn === button));
    document.body.setAttribute('data-mode', button.dataset.mode);
    localStorage.setItem(modeKey, button.dataset.mode);
  });
});

// Load saved theme and mode
const savedTheme = localStorage.getItem('ubs-quiz-theme') || 'cyberpunk';
const savedMode = localStorage.getItem(modeKey) || 'desktop';

document.body.setAttribute('data-theme', savedTheme);
document.body.setAttribute('data-mode', savedMode);

// Update active button for theme
themeButtons.forEach((btn) => {
  btn.classList.toggle('active', btn.dataset.theme === savedTheme);
});

// Update active button for mode
modeButtons.forEach((btn) => {
  btn.classList.toggle('active', btn.dataset.mode === savedMode);
});

setScreen(startScreen);
