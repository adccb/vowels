console.log(
  process.argv[2]
    .split('')
    .filter(letter => !letter.match(/[AaEeIiOoUu]/))
    .join('')
)
