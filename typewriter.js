const sentence = "hello there from lighthouse labs";

let counter = 1000;

for (let index in sentence){
  setTimeout(() => {
    process.stdout.write(sentence[index]);
    if (index >= sentence.length -1){
      console.log('\n');
    }
  }, counter)
  counter += 50;
};