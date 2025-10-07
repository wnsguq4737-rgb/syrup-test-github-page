function formatWithSpaces(value) {
  return value
    .toString()
    .split('')
    .join(' ')
}

document.addEventListener('DOMContentLoaded', () => {
  const counterElement = document.querySelector('.counter__value')
  if (!counterElement) return

  const targetValue = Number(counterElement.dataset.target || '0')
  if (!Number.isFinite(targetValue)) return

  const duration = 2000
  const start = performance.now()

  function update(now) {
    const elapsed = now - start
    const progress = Math.min(elapsed / duration, 1)
    const eased = 1 - Math.pow(1 - progress, 3)
    const current = Math.floor(targetValue * eased)
    counterElement.textContent = `${formatWithSpaces(current)} g`

    if (progress < 1) {
      requestAnimationFrame(update)
    }
  }

  requestAnimationFrame(update)
})
