	const quran = await fetch("/api/quran").then((res) => res.json());
	const ayah = document.getElementById("ayah");
	const name = document.getElementById("surahName");

	const n = Math.floor(Math.random() * 114); // any random surah
	const total_verses = Math.floor(Math.random() * quran[n].total_verses); // Random verse from random surah

	const text = quran[n].verses[total_verses];
	const ayahtext = document.createTextNode(text.text);
	// <div id="ayah">{randomVerse}</div>

	const nametext = document.createTextNode(
		`Surah ${quran[n].name} - ${quran[n].total_verses} Ayah `,
	);
	name.appendChild(nametext);
	// <div id="surahName">{randomSurah.name} - {randomSurah.verse}</div>

	const parent = document.createElement("span");
	const archTwo = document.createTextNode(
		` \ufd3f${quran[n].verses[total_verses].id.toLocaleString("AR-EG")}\ufd3e `,
	);
	// console.log(quran[n].verses[total_verses].id);
	parent.appendChild(archTwo);
	// <span>{verse.id}</span>

	ayah.appendChild(parent);
	ayah.appendChild(ayahtext);

/*
<div id="surahName">
  <div id="surahName">{randomSurah.name} - {randomSurah.verse}</div>
</div>

<div id="ayah">
  
  <span>{verse.id}</span> 
  <div id="ayah">{randomVerse}</div>
</div>
*/