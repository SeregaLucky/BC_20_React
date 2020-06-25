export const getRandomNumbers = () => {
  return (
    fetch(
      'https://www.random.org/integers/?num=10&min=1&max=6&col=1&base=10&format=plain&rnd=new',
    )
      .then(res => {
        // console.log(res);
        return res.text();
      })
      // .then(res => res.json())
      .then(data => {
        // console.log(data);
        const arr = data.split('');
        // console.log(arr);

        return arr;
      })
  );
};
