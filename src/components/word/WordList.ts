const WordList: Array<string> = ['hola', 'adios'];

function getWord(): Readonly<string> {

  return WordList[Math.floor(Math.random() * WordList.length)];
}

export default getWord;