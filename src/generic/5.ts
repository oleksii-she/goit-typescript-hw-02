/*
  Вам потрібно реалізувати інтерфейс KeyValuePair, який описує пару ключ-значення. 
  Використовуйте generics, щоб цей інтерфейс міг працювати з будь-якими типами ключів та значень.
*/

interface KeyValuePair<K, V> {
  key: K;
  value: V;
}

// Приклади використання
const stringPair: KeyValuePair<string, number> = {
  key: "age",
  value: 25,
};

const numberPair: KeyValuePair<number, boolean> = {
  key: 42,
  value: true,
};
export {};
