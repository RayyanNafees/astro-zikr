const quran = await fetch("/api/quran").then((res) => res.json());
const quranEl = document.getElementById("quran");

const n = Math.floor(Math.random() * 114); // any random surah
const total_verses = Math.floor(Math.random() * quran[n].total_verses); // Random verse from random surah

for (const surah of quran) {
	const surahBox = document.createElement("a");
	surahBox.className = "col item text-center";
	surahBox.id = "surahBox";
	surahBox.href = `/quran/${surah.id}`;
	surahBox.setAttribute("data-name", surah.transliteration);

	/* <a 
      href="/quran/${surah.id}"
      data-name={surah.transliteration} 
      id="surahBox" 
      class="col item text-center">

      </a>
*/
	const surahName = document.createElement("h2");
	const surahNameText = document.createTextNode(`${surah.id} - ${surah.name}`);
	surahName.appendChild(surahNameText);
	// <h2>{surah.id} - {surah.name}</h2>

	const surahVerses = document.createElement("h4");
	const surahVersesText = document.createTextNode(
		`Total Verses: ${surah.total_verses}`,
	);
	surahVerses.appendChild(surahVersesText);
	// <h4>Total Verse: {surah.total_verses}</h4>

	surahBox.appendChild(surahName);
	surahBox.appendChild(surahVerses);
	quranEl.appendChild(surahBox);
	/*
  <div id="quran">
    {
      <a 
        href="/quran/${surah.id}"
        data-name={surah.transliteration} 
        id="surahBox" 
        class="col item text-center">
          <h2>{surah.id} - {surah.name}</h2>
          <h2>{surah.id} - {surah.name}</h2>
      </a>    
    }
  </div>
  */
}
