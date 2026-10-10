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
window.OTTELUT_HAETTU = '2026-10-10';
window.OTTELUT = [
  { no: 31718, team: 'u15', date: '2026-10-10', time: '10:30', home: 'Pirkat/Blue',     away: 'JyLe/U15',    opp: 'Pirkat/Blue',     venue: 'Sääksjärven liikuntahalli 2, Lempäälä' },
  { no: 31720, team: 'u15', date: '2026-10-10', time: '11:45', home: 'JyLe/U15',        away: 'Lempo/Sininen', opp: 'Lempo/Sininen', venue: 'Sääksjärven liikuntahalli 2, Lempäälä' },
  { no: 31721, team: 'u15', date: '2026-10-10', time: '13:00', home: 'Lempo/Valkoinen', away: 'JyLe/U15',    opp: 'Lempo/Valkoinen', venue: 'Sääksjärven liikuntahalli 1, Lempäälä' },
  { no: 32019, team: 'u17', date: '2026-10-17', time: '11:30', home: 'Tiikerit',        away: 'JyLe/B-pojat', opp: 'Tiikerit',       venue: 'Kirmaus-halli, Seinäjoki' },
  { no: 32021, team: 'u17', date: '2026-10-17', time: '14:30', home: 'JyLe/B-pojat',    away: 'NJ/B-Pojat',  opp: 'NJ/B-Pojat',      venue: 'Kirmaus-halli, Seinäjoki' },
  { no: 32022, team: 'u17', date: '2026-10-17', time: '16:00', home: 'LaihLu/B-pojat',  away: 'JyLe/B-pojat', opp: 'LaihLu/B-pojat', venue: 'Kirmaus-halli, Seinäjoki' }
];
