if (window.quranScript === true) {
	const quran = await fetch("/api/quran").then((res) => res.json());
	const quranEl = document.getElementById("quran");

	const n = Math.floor(Math.random() * 114);
	const total_verses = Math.floor(Math.random() * quran[n].total_verses);
	const ayah = document.getElementById("ayah");
	const text = quran[n].verses[total_verses];
	const name = document.getElementById("surahName");
	const nametext = document.createTextNode(
		`Surah ${quran[n].name} - ${quran[n].total_verses} Ayah `,
	);
	name.appendChild(nametext);
	const ayahtext = document.createTextNode(text.text);
	const parent = document.createElement("span");

	const archTwo = document.createTextNode(
		` \ufd3f${quran[n].verses[total_verses].id.toLocaleString("AR-EG")}\ufd3e `,
	);
	console.log(quran[n].verses[total_verses].id);

	parent.appendChild(archTwo);

	ayah.appendChild(ayahtext);
	ayah.appendChild(parent);

	surahFile();
	QuranFile();

	function QuranFile() {
		for (const surah of quran) {
			const surahBox = document.createElement("a");
			surahBox.className = "col item text-center";
			surahBox.id = "surahBox";
			surahBox.href = `/quran/${surah.id}`;
			surahBox.setAttribute("data-name", surah.transliteration);
			const surahName = document.createElement("h2");
			const surahNameText = document.createTextNode(
				`${surah.id} - ${surah.name}`,
			);
			surahName.appendChild(surahNameText);

			const surahVerses = document.createElement("h4");
			const surahVersesText = document.createTextNode(
				`Total Verses: ${surah.total_verses}`,
			);
			surahVerses.appendChild(surahVersesText);

			surahBox.appendChild(surahName);
			surahBox.appendChild(surahVerses);
			quranEl.appendChild(surahBox);
		}
	}

	function surahFile() {
		const surah = document.getElementById("surah");

		const num = location.href.slice(28) || location.href.slice(37);
		const name = document.createElement("h1");
		name.className = "text-center mt-5 p-3";
		const NameText = document.createTextNode(quran[+num - 1].name);
		surah.appendChild(name);
		name.appendChild(NameText);
		const div = document.createElement("div");
		for (const e of quran[+num - 1].verses) {
			div.className = "h3";
			const surahText = document.createTextNode(
				`${e.text} \ufd3f${e.id.toLocaleString("AR-EG")}\ufd3e `,
			);
			div.appendChild(surahText);
			surah.appendChild(div);
		}
	}
}
