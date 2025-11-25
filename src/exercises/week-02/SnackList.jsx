const snackList = [
  { name: 'DumDum Suckers', rank: 3 },
  { name: 'RedVine licorice', rank: 2 },
  { name: 'Cinnamon Powdered Donuts', rank: 1 },
];

export default function SnackList() {
  return (
    <ul>
      {snackList.map((snack) => {
        return <li key={`${snack.name[0]}_${snack.rank}`}>{snack}</li>;
      })}
    </ul>
  );
}
