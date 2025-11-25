const getYear = new Date().getFullYear();
console.log(getYear);
export default function SnackFooter() {
  return <footer>{`Lewis Labs ${getYear}`}</footer>;
}
