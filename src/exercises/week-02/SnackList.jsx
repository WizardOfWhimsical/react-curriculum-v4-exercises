export default function SnackList() {
  let snackList = [
    { name: 'DumDum Suckers', rank: 3 },
    { name: 'RedVine licorice', rank: 2 },
    { name: 'Cinnamon Powdered Donuts', rank: 1 },
  ];

  //each varible is the obj in the arr
  //MUTATES current arr for us
  snackList.sort((a, b) => a.rank - b.rank);

  return (
    <ul>
      {snackList.map((snack) => {
        return <li key={`${snack.name[0]}_${snack.rank}`}>{snack.name}</li>;
      })}
    </ul>
  );
}
