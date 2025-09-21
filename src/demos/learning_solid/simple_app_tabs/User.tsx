import { useParams } from "@solidjs/router"
import { createResource, Suspense } from "solid-js"

export function User() {
  const params = useParams()
  const [data] = createResource(params.id, fetchUser) // 👈 Pass the dynamic route parameter to the createResource primitive
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <div>
        <p>Name: {data().name}</p> {/* 👈 Access the data returned from the fetchUser function */}
        <p>Email: {data().email}</p>
        <p>Phone: {data().phone}</p>
      </div>
    </Suspense>
  )
}

async function fetchUser(id: string) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
  return response.json()
}
