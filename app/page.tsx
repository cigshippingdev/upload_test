export default function Home() {
  return (
    <main style={{ padding: '2rem' }}>
      <h1>파일 업로드</h1>
      <form action="/api/upload" method="POST" encType="multipart/form-data">
        <input type="file" name="file" required />
        <button type="submit">업로드</button>
      </form>
    </main>
  )
}
