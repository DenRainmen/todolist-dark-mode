// импорт тестируемых функций
import {sum, mult, SplitIntoWords} from "./01"

/*                                Тестовый сценарий                           */

test('sum should be correct', () => {
  // подготовительная часть теста (исходные данные)
  const a = 1;
  const b = 2;
  const c = 3;

//action(проверка)
  const result1 = sum(a, b)
  const result2 = sum(b, c)

 
// expect result(ожидание результата)
expect(result1).toBe(3);
expect(result2).toBe(5);

})


test('multiply should be correct', () => {
  // подготовительная часть теста (исходные данные)
  const a = 1;
  const b = 2;
  const c = 3;

//action(проверка)
  const result1 = mult(a, b)
  const result2 = mult(b, c)

 
// expect result(ожидание результата)
expect(result1).toBe(2);
expect(result2).toBe(6);

})


test('SplitIntoWords should be correct', () => {
  // подготовительная часть теста (исходные данные)

  const sentence1 = 'Hello my friend!';
  const sentence2 = 'JS - the  best programming language.';
  

//action(проверка)

  const result1 = SplitIntoWords(sentence1)
  const result2 = SplitIntoWords(sentence2)

 
// expect result(ожидание результата)

expect(result1.length).toBe(3);
expect(result1[0]).toBe('hello');
expect(result1[1]).toBe('my');
expect(result1[2]).toBe('friend');

expect(result2.length).toBe(5);
expect(result2[0]).toBe('js');
expect(result2[1]).toBe('the');
expect(result2[2]).toBe('best');
expect(result2[3]).toBe('programming');
expect(result2[4]).toBe('language');

})
