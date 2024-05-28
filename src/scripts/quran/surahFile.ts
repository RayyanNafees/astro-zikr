const surah = document.getElementById("surah");
const quran = await fetch("/api/quran").then((res) => res.json());

const num = location.href.slice(28) || location.href.slice(37);
const name = document.createElement("h1");
name.className = "text-center mt-5 p-3";
const NameText = document.createTextNode(quran[+num - 1].name);
name.appendChild(NameText);
// <h1 class="text-center mt-5 p-3">{surah.name}</h1>

surah.appendChild(name);
for (const verse of quran[+num - 1].verses) {
	const div = document.createElement("div");
	div.className = "h3";
	const surahText = document.createTextNode(
		`${verse.text} \ufd3f${verse.id.toLocaleString("AR-EG")}\ufd3e `,
	);
	div.appendChild(surahText);
	// <div class="h3">{verse}</div>
	surah.appendChild(div);
}
/*
<div id="surah">
<h1 class="text-center mt-5 p-3">{surah.name}</h1>
{
  <div class="h3">{verse}</div>
}
</div>
*/