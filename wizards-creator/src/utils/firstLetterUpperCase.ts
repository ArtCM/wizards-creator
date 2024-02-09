export function firstLetterUpperCase(word: string) {
  const wordFirstLetterUpper = word[0].toUpperCase() + word.substring(1);

  return wordFirstLetterUpper;
}
