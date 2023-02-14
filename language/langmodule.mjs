const language = 'no';

const DICTIONARY = {
  en: {
        key1: 'hello world'
    },
    no: {
        key1: 'hallo verden'
    }
};

console.log(DICTIONARY('key1'))

export default DICTIONARY;