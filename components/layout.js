export default function Layout({ children }) {
  return (
    <div className="h-full">
      <section className="bg-blue-500 text-white p-4">
        <h1 className="text-2xl">RickAndMorty Info</h1>
        <h3>Obtain info about your preferred characters</h3>
      </section>
      <main>{children}</main>
      <section className="bg-blue-500 text-white w-full p-2 absolute bottom-0">
        Natan Dias@2022
      </section>
    </div>
  );
}
