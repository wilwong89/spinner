const animation = ['|','/','-','\\'];
for (let i = 0; i <= 10; i++) {
  let delay = ((i * 100) + 200);
  setTimeout(() => {
    process.stdout.write('\r' + animation[i % 3]);
    if (i === 10) {
      process.stdout.write('\n\r');
    }
  }, delay);
};