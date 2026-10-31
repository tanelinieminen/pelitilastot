// Esitäytetyt joukkueet. Luodaan Firebaseen automaattisesti ensimmäisellä käynnistyksellä, jos niitä ei vielä ole.
// Pelaajia ei pidetä tässä (julkinen repo): ne ovat Firestoressa ja niitä muokataan sovelluksessa
// (etusivu → Pelaajat → liitä tulospalvelun taulukko).
window.JOUKKUEET = [
  { id: 'u15', name: 'U15', ts: 64281, players: [] },
  // U17 (JyLe/B-pojat): tulospalvelussa ei vielä pelaajia.
  { id: 'u17', name: 'U17', ts: 64272, players: [] }
];

// Tulevat ottelut tulospalvelusta (tulospalvelu.lentopallo.fi). Sovelluksessa ottelu valitaan aina tästä listasta.
// Kentät: no = ottelunumero, team = joukkueen id, opp = vastustaja, home/away = kotijoukkue/vierasjoukkue.
window.OTTELUT_HAETTU = '2026-10-31';
window.OTTELUT = [
  { no: 31718, team: 'u15', date: '2026-10-10', time: '10:30', home: 'Pirkat/Blue',     away: 'JyLe/U15',    opp: 'Pirkat/Blue',     venue: 'Sääksjärven liikuntahalli 2, Lempäälä' },
  { no: 31720, team: 'u15', date: '2026-10-10', time: '11:45', home: 'JyLe/U15',        away: 'Lempo/Sininen', opp: 'Lempo/Sininen', venue: 'Sääksjärven liikuntahalli 2, Lempäälä' },
  { no: 31721, team: 'u15', date: '2026-10-10', time: '13:00', home: 'Lempo/Valkoinen', away: 'JyLe/U15',    opp: 'Lempo/Valkoinen', venue: 'Sääksjärven liikuntahalli 1, Lempäälä' },
  { no: 32019, team: 'u17', date: '2026-10-17', time: '11:30', home: 'Tiikerit',        away: 'JyLe/B-pojat', opp: 'Tiikerit',       venue: 'Kirmaus-halli, Seinäjoki' },
  { no: 32021, team: 'u17', date: '2026-10-17', time: '14:30', home: 'JyLe/B-pojat',    away: 'NJ/B-Pojat',  opp: 'NJ/B-Pojat',      venue: 'Kirmaus-halli, Seinäjoki' },
  { no: 32022, team: 'u17', date: '2026-10-17', time: '16:00', home: 'LaihLu/B-pojat',  away: 'JyLe/B-pojat', opp: 'LaihLu/B-pojat', venue: 'Kirmaus-halli, Seinäjoki' },
  { no: 37081, team: 'u15', date: '2026-10-31', time: '11:00', home: 'PuWo/U15-pojat', away: 'JyLe/U15',    opp: 'PuWo/U15-pojat', venue: 'Neulamäen koulu, Kuopio' },
  { no: 37083, team: 'u15', date: '2026-10-31', time: '13:30', home: 'JyLe/U15',       away: 'East Volley jr/KiU', opp: 'East Volley jr/KiU', venue: 'Neulamäen koulu, Kuopio' },
  { no: 37085, team: 'u15', date: '2026-10-31', time: '16:00', home: 'JyLe/U15',       away: 'KempeLe/C-Citius', opp: 'KempeLe/C-Citius', venue: 'Neulamäen koulu, Kuopio' },
  { no: 38567, team: 'u17', date: '2026-11-07', time: '11:00', home: 'JyLe/B-pojat',   away: 'VilTä/U 17',  opp: 'VilTä/U 17',      venue: 'Vaajakosken yhtenäiskoulu, Jyväskylä' },
  { no: 38570, team: 'u17', date: '2026-11-07', time: '14:45', home: 'NJ/B-Pojat',     away: 'JyLe/B-pojat', opp: 'NJ/B-Pojat',     venue: 'Vaajakosken yhtenäiskoulu, Jyväskylä' },
  { no: 38572, team: 'u17', date: '2026-11-07', time: '17:15', home: 'PuWo/U17-pojat', away: 'JyLe/B-pojat', opp: 'PuWo/U17-pojat', venue: 'Vaajakosken yhtenäiskoulu, Jyväskylä' }
];
