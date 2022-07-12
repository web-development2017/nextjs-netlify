import { useEffect } from "react"

export default function Guides() {
  useEffect(() => {
    fetch("/.netlify/functions/test")
    .then(res => res.json())
    .then(data => console.log(data))
  },[]);
  return (
    <div><h2>All Guides</h2></div>
  )
}
