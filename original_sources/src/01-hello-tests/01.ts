export function sum(a: number, b: number) { 
  return a + b;
}
export function mult(a: number, b: number) { 
  return a * b;
}




export function SplitIntoWords(sentence: string) { 
  const words = sentence.toLowerCase().split(' ')
  
  return words.filter(el => el !== "" && el !== "-")
  .map(el => el.replace('!','').replace('.',''));


}