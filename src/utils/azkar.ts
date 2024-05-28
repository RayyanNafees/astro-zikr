export default async (rowElem, i) => {
  
	const div = document.createElement("div");
	div.className = "item";
	// <div class="item" />

	const count = document.createElement("p");
	count.className = "text-start h5 m-2";
	count.style.cssText = "border-bottom: 1px solid rgba(0,0,0,.125);";
	const countNode = document.createTextNode(
		`Repetition: ${rep[i].count.toLocaleString("AR-EG")}`,
	);
	count.appendChild(countNode);
	// <p class="text-start h5 m-2" style="border-bottom: 1px solid rgba(0,0,0,.125);">
	//  Repetiton: {count}
	//</p>

	const text = document.createElement("p");
	text.className = "zekr";
	const textNode = document.createTextNode(rep[i].zekr);
	text.appendChild(textNode);
	//<p class="zekr">{zekr}</p>

	const btn = document.createElement("button");
	const btnCountSpan = document.createElement("span");
	btnCountSpan.className = "btnCount";
	const btnCountText = document.createTextNode(
		rep[i].count.toLocaleString("AR-EG"),
	);
	const btnText = document.createTextNode("remaining iterations: ");
	btnCountSpan.appendChild(btnCountText);
	btn.appendChild(btnText);
	btn.appendChild(btnCountSpan);

	btn.onclick = () => {
		if (+btnCountSpan.innerText !== 0) {
			btnCountSpan.innerText = `${+btnCountSpan.innerText - 1}`;
		} else {
			btn.classList.add("done");
		}
	};

	// <button onclick={() => count--}>
	// Remaining itterations:
	// <span class="btnCount">{count || "done"}</span>
	//</button>

	const reference = document.createElement("p");
	reference.className = "text-start h5 m-2";
	reference.style.cssText = "border-top: 1px solid rgba(0,0,0,.125);";
	const referenceNode = document.createTextNode(`${rep[i].reference}`);
	reference.appendChild(referenceNode);
	// <p class="text-start h5 m-2" style="border-top: 1px solid rgba(0,0,0,.125);">{reference}</p>

	div.appendChild(count);
	div.appendChild(text);
	div.appendChild(btn);
	div.appendChild(reference);
	rowElem.appendChild(div);
	/*
  <div class="item" />
    
    <p class="text-start h5 m-2" style="border-bottom: 1px solid rgba(0,0,0,.125);">
      Repetiton: {count}
    </p>
  
    <p class="zekr">{zekr}</p>

    <button onclick={() => count--}>
      Remaining itterations:
      <span class="btnCount">{count || "done"}</span>
		</button>

		<p class="text-start h5 m-2" style="border-top: 1px solid rgba(0,0,0,.125);">{reference}</p>

  </div>
  */
}; 