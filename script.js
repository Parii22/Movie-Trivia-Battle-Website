// ── QUESTIONS ────────────────────────────────
const Q = {
  Action: [
    { q: "In Die Hard, what building is taken over?", c: ["Nakatomi Plaza", "Empire State", "Pentagon", "Trump Tower"], a: 0 },
    { q: "Who plays John Wick?", c: ["Tom Cruise", "Keanu Reeves", "Brad Pitt", "Vin Diesel"], a: 1 },
    { q: "Main villain in Mad Max: Fury Road?", c: ["Humungus", "Immortan Joe", "Toecutter", "War Boy"], a: 1 },
    { q: "What year was The Dark Knight released?", c: ["2005", "2006", "2008", "2010"], a: 2 },
    { q: "Minimum bus speed in Speed?", c: ["60 mph", "50 mph", "70 mph", "80 mph"], a: 1 },
    { q: "'Hasta la vista, baby' is from which film?", c: ["The Terminator", "Terminator 2", "Predator", "RoboCop"], a: 1 },
    { q: "Who plays Ethan Hunt in Mission: Impossible?", c: ["Tom Hanks", "Tom Cruise", "Brad Pitt", "Will Smith"], a: 1 },
    { q: "Island in Jurassic Park?", c: ["Isla Sorna", "Isla Nublar", "Isla Matanceros", "Isla Tasman"], a: 1 },
    { q: "Maverick's real first name in Top Gun?", c: ["Pete", "Nick", "Jake", "Mark"], a: 0 },
    { q: "Who kills Maximus's family in Gladiator?", c: ["Commodus", "Marcus Aurelius", "Proximo", "Lucilla"], a: 0 },
  ],
  Comedy: [
    { q: "Who plays the Grinch in the 2000 film?", c: ["Jim Carrey", "Mike Myers", "Eddie Murphy", "Will Ferrell"], a: 0 },
    { q: "'You stay classy, San Diego' is from?", c: ["Old School", "Anchorman", "Step Brothers", "Blades of Glory"], a: 1 },
    { q: "Kevin McCallister's surname in Home Alone?", c: ["McCallister", "McAllister", "McCarthy", "MacAlister"], a: 0 },
    { q: "Who directed The Grand Budapest Hotel?", c: ["P.T. Anderson", "Wes Anderson", "Noah Baumbach", "Sofia Coppola"], a: 1 },
    { q: "Year Superbad was released?", c: ["2005", "2006", "2007", "2008"], a: 2 },
    { q: "Star of Elf (2003)?", c: ["Adam Sandler", "Jim Carrey", "Will Ferrell", "Ben Stiller"], a: 2 },
    { q: "Where is the bachelorette trip in Bridesmaids?", c: ["Miami", "Las Vegas", "New Orleans", "Cancun"], a: 1 },
    { q: "'Nobody puts Baby in a corner' is from?", c: ["Footloose", "Dirty Dancing", "Grease", "Fame"], a: 1 },
    { q: "Who directed Clueless (1995)?", c: ["Amy Heckerling", "Nancy Meyers", "Nora Ephron", "Penny Marshall"], a: 0 },
    { q: "Lloyd's surname in Dumb and Dumber?", c: ["Christmas", "Dunne", "McGill", "Brown"], a: 0 },
  ],
  "Sci-Fi": [
    { q: "What are replicants in Blade Runner?", c: ["Robots", "Bioengineered humans", "Aliens", "Cyborgs"], a: 1 },
    { q: "Color of pill Neo takes in The Matrix?", c: ["Blue", "Red", "Green", "White"], a: 1 },
    { q: "Spaceship name in Alien (1979)?", c: ["Prometheus", "Nostromo", "Sulaco", "Discovery"], a: 1 },
    { q: "Who directed Interstellar?", c: ["Ridley Scott", "James Cameron", "Christopher Nolan", "Spielberg"], a: 2 },
    { q: "Han Solo's ship?", c: ["USS Enterprise", "Millennium Falcon", "Serenity", "Normandy"], a: 1 },
    { q: "Candy used to lure E.T.?", c: ["M&Ms", "Reese's Pieces", "Skittles", "Smarties"], a: 1 },
    { q: "Year Marty travels back to in Back to the Future?", c: ["1950", "1955", "1960", "1965"], a: 1 },
    { q: "What planet is Superman from?", c: ["Mars", "Krypton", "Tatooine", "Vulcan"], a: 1 },
    { q: "Aliens in Arrival are called?", c: ["Heptapods", "Xenomorphs", "Greys", "Visitors"], a: 0 },
    { q: "Who created HAL 9000 in 2001?", c: ["IBM", "Univ. of Illinois", "NASA", "Boeing"], a: 1 },
  ],
  Horror: [
    { q: "Room Jack obsesses over in The Shining?", c: ["217", "237", "313", "666"], a: 1 },
    { q: "Who directed Halloween (1978)?", c: ["Wes Craven", "John Carpenter", "Tobe Hooper", "Romero"], a: 1 },
    { q: "Killer's name in Scream?", c: ["Ghostface", "Michael Myers", "Jason", "Freddy"], a: 0 },
    { q: "Freddy Krueger's weapon?", c: ["Chainsaw", "Razor glove", "Knife", "Axe"], a: 1 },
    { q: "Possessed doll's name in Child's Play?", c: ["Annabelle", "Chucky", "Billy", "Talky Tina"], a: 1 },
    { q: "Country in Midsommar?", c: ["Norway", "Denmark", "Sweden", "Finland"], a: 2 },
    { q: "Who composed the Jaws theme?", c: ["Herrmann", "John Williams", "Morricone", "Zimmer"], a: 1 },
    { q: "Horror film with 'They're here'?", c: ["Amityville Horror", "Poltergeist", "The Haunting", "Insidious"], a: 1 },
    { q: "Year Psycho was released?", c: ["1955", "1958", "1960", "1963"], a: 2 },
    { q: "Hypnosis technique in Get Out?", c: ["The Sink", "The Sunken Place", "The Deep End", "The Void"], a: 1 },
  ],
  Romance: [
    { q: "'Can men and women just be friends?' — which film?", c: ["Say Anything", "When Harry Met Sally", "Pretty Woman", "Sleepless in Seattle"], a: 1 },
    { q: "Hugh Grant's job in Notting Hill?", c: ["Antique shop", "Travel bookshop", "Coffee shop", "Florist"], a: 1 },
    { q: "What do Noah and Allie do in the rain in The Notebook?", c: ["Dance", "Kiss", "Run", "Argue"], a: 1 },
    { q: "Who plays Mia in La La Land?", c: ["Anne Hathaway", "Emma Stone", "Amy Adams", "Natalie Portman"], a: 1 },
    { q: "Elizabeth Bennet in Pride & Prejudice (2005)?", c: ["Keira Knightley", "Natalie Portman", "Carey Mulligan", "Sienna Miller"], a: 0 },
    { q: "City Amélie is set in?", c: ["Lyon", "Paris", "Bordeaux", "Marseille"], a: 1 },
    { q: "Shakespeare play behind 10 Things I Hate About You?", c: ["Midsummer Night's Dream", "Much Ado About Nothing", "Taming of the Shrew", "Twelfth Night"], a: 2 },
    { q: "Who directed Carol (2015)?", c: ["Terrence Malick", "Todd Haynes", "P.T. Anderson", "Wong Kar-wai"], a: 1 },
    { q: "Crazy Rich Asians is set in?", c: ["Hong Kong", "Tokyo", "Singapore", "Shanghai"], a: 2 },
    { q: "Actress in Roman Holiday (1953)?", c: ["Grace Kelly", "Audrey Hepburn", "Ingrid Bergman", "Marilyn Monroe"], a: 1 },
  ],
  Classic: [
    { q: "Who played Charles Foster Kane?", c: ["Orson Welles", "Humphrey Bogart", "Cary Grant", "James Stewart"], a: 0 },
    { q: "Where does Casablanca take place?", c: ["Algiers", "Tunis", "Casablanca", "Marrakech"], a: 2 },
    { q: "'Not in Kansas anymore' is from?", c: ["Gone with the Wind", "The Wizard of Oz", "Stagecoach", "Wuthering Heights"], a: 1 },
    { q: "Singin' in the Rain (1952) directors?", c: ["Vincente Minnelli", "Kelly & Donen", "Billy Wilder", "Howard Hawks"], a: 1 },
    { q: "Who says 'Nobody's perfect' in Some Like It Hot?", c: ["Jack Lemmon", "Tony Curtis", "Osgood Fielding", "Sugar Kane"], a: 2 },
    { q: "Norma Desmond's profession in Sunset Boulevard?", c: ["Singer", "Silent film actress", "Stage actress", "Dancer"], a: 1 },
    { q: "Star of Roman Holiday (1953)?", c: ["Grace Kelly", "Audrey Hepburn", "Ingrid Bergman", "Marilyn Monroe"], a: 1 },
    { q: "Film ending with 'Forget it, Jake. It's Chinatown'?", c: ["Double Indemnity", "The Big Sleep", "Chinatown", "Laura"], a: 2 },
    { q: "Who plays Terry Malloy in On the Waterfront?", c: ["James Dean", "Marlon Brando", "Montgomery Clift", "Paul Newman"], a: 1 },
    { q: "L.B. Jefferies in Rear Window?", c: ["Cary Grant", "James Stewart", "Gregory Peck", "William Holden"], a: 1 },
  ]
};

// ── STATE ─────────────────────────────────────
let genre = 'Action', name = '', round = 0, score = 0, correct = 0;
let qs = [], tick = null, time = 15, picked = false;

// ── NAV ───────────────────────────────────────
function go(id) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('show'));
  document.querySelectorAll('nav button').forEach(b => b.classList.remove('active'));
  document.getElementById(id).classList.add('show');
  event.target.classList.add('active');
  if (id === 'scores') renderLB();
  if (id === 'forum') renderPosts();
}

// ── GENRE SELECT ──────────────────────────────
document.querySelector('.genre-grid').addEventListener('click', e => {
  if (!e.target.dataset.g) return;
  document.querySelectorAll('.genre-grid button').forEach(b => b.classList.remove('active'));
  e.target.classList.add('active');
  genre = e.target.dataset.g;
});

// ── GAME ──────────────────────────────────────
function shuffle(a) { return [...a].sort(() => Math.random() - 0.5); }

function startGame() {
  name  = document.getElementById('pname').value.trim() || 'Anonymous';
  round = 0; score = 0; correct = 0;
  qs    = shuffle(Q[genre]).slice(0, 10);

  document.getElementById('setup').style.display   = 'none';
  document.getElementById('results').style.display = 'none';
  document.getElementById('battle').style.display  = 'block';
  document.getElementById('b-name').textContent    = name;
  document.getElementById('b-genre').textContent   = genre;

  nextQ();
}

function nextQ() {
  if (round >= 10) { endGame(); return; }
  picked = false;

  const q = qs[round];
  document.getElementById('b-round').textContent = (round + 1) + ' / 10';
  document.getElementById('b-score').textContent = score;
  document.getElementById('q-num').textContent   = 'Question ' + (round + 1);
  document.getElementById('q-text').textContent  = q.q;

  const div = document.getElementById('choices');
  div.innerHTML = '';
  q.c.forEach((c, i) => {
    const b = document.createElement('button');
    b.textContent = c;
    b.onclick = () => pick(i);
    div.appendChild(b);
  });

  time = 15;
  clearInterval(tick);
  updateTimer();
  tick = setInterval(() => {
    time--;
    updateTimer();
    if (time <= 0) { clearInterval(tick); if (!picked) timesUp(); }
  }, 1000);
}

function updateTimer() {
  document.getElementById('timer-num').textContent = time;
  const fill = document.getElementById('tfill');
  fill.style.width      = (time / 15 * 100) + '%';
  fill.style.background = time <= 5 ? '#e74c3c' : time <= 8 ? '#e67e22' : '#222';
}

function pick(i) {
  if (picked) return;
  picked = true;
  clearInterval(tick);

  const btns = document.querySelectorAll('.choices button');
  btns.forEach(b => b.disabled = true);
  btns[qs[round].a].classList.add('correct');

  if (i === qs[round].a) {
    btns[i].classList.add('correct');
    const pts = 100 + Math.ceil(time * 6.67);
    score += pts;
    correct++;
    toast('+' + pts + ' pts');
  } else {
    btns[i].classList.add('wrong');
    toast('Wrong!');
  }

  round++;
  setTimeout(nextQ, 1300);
}

function timesUp() {
  picked = true;
  const btns = document.querySelectorAll('.choices button');
  btns.forEach(b => b.disabled = true);
  btns[qs[round].a].classList.add('correct');
  toast("Time's up!");
  round++;
  setTimeout(nextQ, 1300);
}

function endGame() {
  document.getElementById('battle').style.display  = 'none';
  document.getElementById('results').style.display = 'block';

  const acc = Math.round(correct / 10 * 100);
  document.getElementById('r-score').textContent   = score;
  document.getElementById('r-correct').textContent = correct;
  document.getElementById('r-wrong').textContent   = 10 - correct;
  document.getElementById('r-acc').textContent     = acc + '%';
  document.getElementById('sname').value           = name;

  const ranks = [
    [1500, 'CINEPHILE',  '🎬'],
    [1200, 'FILM BUFF',  '🏆'],
    [900,  'CRITIC',     '⭐'],
    [600,  'ENTHUSIAST', '🎭'],
    [0,    'ROOKIE',     '🎟️'],
  ];
  const [, rank, badge] = ranks.find(([min]) => score >= min);
  document.getElementById('r-rank').textContent  = rank;
  document.getElementById('r-badge').textContent = badge;
}

function restart() {
  document.getElementById('results').style.display = 'none';
  document.getElementById('setup').style.display   = 'block';
}

// ── TOAST ─────────────────────────────────────
let toastTimer;
function toast(msg) {
  const el = document.getElementById('toast');
  el.textContent = msg;
  el.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove('show'), 1200);
}

// ── LEADERBOARD ───────────────────────────────
function getScores() { return JSON.parse(localStorage.getItem('trivia_scores') || '[]'); }
function setScores(v) { localStorage.setItem('trivia_scores', JSON.stringify(v)); }

function saveScore() {
  const n = document.getElementById('sname').value.trim() || name;
  const s = getScores();
  s.push({
    name:  n,
    score: score,
    genre: genre,
    acc:   Math.round(correct / 10 * 100) + '%',
    date:  new Date().toLocaleDateString()
  });
  s.sort((a, b) => b.score - a.score);
  setScores(s.slice(0, 50));
  toast('Saved!');
}

function renderLB() {
  const s  = getScores();
  const lb = document.getElementById('lb');
  if (!s.length) {
    lb.innerHTML = '<tr><td colspan="6" style="text-align:center;padding:40px;color:#999">No scores yet.</td></tr>';
    return;
  }
  const medals = ['🥇', '🥈', '🥉'];
  lb.innerHTML = s.map((r, i) => `
    <tr>
      <td>${medals[i] || i + 1}</td>
      <td>${r.name}</td>
      <td class="score-td">${r.score}</td>
      <td class="muted-td">${r.genre}</td>
      <td class="muted-td">${r.acc}</td>
      <td class="muted-td">${r.date}</td>
    </tr>`).join('');
}

function clearScores() {
  if (confirm('Clear all scores?')) { setScores([]); renderLB(); }
}

// ── FORUM ─────────────────────────────────────
const defaultPosts = [
  { name: 'CinemaKing', body: 'Sci-Fi is the hardest genre — those questions are brutal!', time: '2 days ago' },
  { name: 'MovieMaven', body: "Classic films is my favourite. If you haven't seen Sunset Boulevard, watch it now.", time: '3 days ago' },
  { name: 'TriviaBoss', body: 'Tip: answer in the first 5 seconds for maximum bonus points!', time: '5 days ago' },
];

function getPosts() { return JSON.parse(localStorage.getItem('trivia_posts') || 'null') || defaultPosts; }
function setPosts(v) { localStorage.setItem('trivia_posts', JSON.stringify(v)); }

function renderPosts() {
  const posts = getPosts();
  document.getElementById('posts').innerHTML = posts.map(p => `
    <div class="post">
      <div class="meta">${p.name} <span>${p.time}</span></div>
      <div class="body">${p.body}</div>
    </div>`).join('');
}

function addPost() {
  const body = document.getElementById('fbody').value.trim();
  if (!body) return;
  const author = document.getElementById('fname').value.trim() || 'Anonymous';
  const posts  = getPosts();
  posts.unshift({ name: author, body, time: 'Just now' });
  setPosts(posts);
  document.getElementById('fbody').value = '';
  renderPosts();
}

// Init
renderPosts();