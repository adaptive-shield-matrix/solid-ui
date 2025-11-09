export function demoGetTextValue(value: string): string {
  const texts: Record<string, string> = {
    "0": "Short",
    "1": "Medium length option",
    "2": "This is a very long option text that should vary the length significantly",
    "3": "Opt",
    "4": "Another medium length option here",
    "5": "Longer option with more words to make it longer",
    "6": "S",
    "7": "Medium",
    "8": "This is an even longer option text that will definitely vary the length",
    "9": "XL",
  }
  return texts[value] || `Option ${value}`
}
