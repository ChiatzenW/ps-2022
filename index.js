
const Link = require("next/link")
const root = ReactDOM.createRoot(document.getElementById("root"))
const element = Home
root.render(element)

function Home() {
  return (
    <ul>
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/labs/water-lab">
          <a>Water Lab</a>
        </Link>
      </li>
      <li>
        <Link href="/labs/food-lab">
          <a>food-lab</a>
        </Link>
      </li>
    </ul>
  )
}

export default Home