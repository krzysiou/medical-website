export default function redirect(destination: string) {
  return () =>{
    window.location.href = destination;
  }
}