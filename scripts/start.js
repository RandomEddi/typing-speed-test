function start() {
  const startCon = document.createElement("div")
  const btnStart = document.createElement("button")
  const numberCount = document.createElement("input")
  const paragraph = document.createElement("p")
  const checkSigns = document.createElement("input")
  const sighsLabel = document.createElement("label")

  btnStart.className = "start-btn"
  btnStart.textContent = "Начать"
  btnStart.tabIndex = "-1"
  startCon.appendChild(btnStart)
  btnStart.addEventListener("click", () => {
    startCon.classList.add("move-up")
  })

  paragraph.textContent = "Введите количество слов"
  startCon.appendChild(paragraph)

  numberCount.type = "number"
  numberCount.value = "10"
  startCon.appendChild(numberCount)
  numberCount.addEventListener("input", () => {
    if (numberCount.value > 120) numberCount.value = 120
    if (numberCount.value <= -1) numberCount.value = 1
  })

  checkSigns.className = "signs"
  checkSigns.type = "checkbox"
  checkSigns.name = "signs"
  sighsLabel.textContent = "Пунктуационные знаки"
  startCon.appendChild(checkSigns)
  startCon.appendChild(sighsLabel)

  startCon.className = "start-container"
  document.body.appendChild(startCon)
  btnStart.focus()
}

start()
