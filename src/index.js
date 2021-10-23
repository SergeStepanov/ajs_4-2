export default function sortLive(arr) {
  arr.sort((a, b) => a.health - b.health);
  return arr.reverse();
}
