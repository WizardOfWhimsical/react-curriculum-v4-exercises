const getYear = new Date().getFullYear();

export default function SnackFooter() {
  return <footer>{`Lewis Labs ${getYear}`}</footer>;
}
