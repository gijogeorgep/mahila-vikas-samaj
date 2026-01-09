export default function Card({ title, text }) {
  return (
    <div className="bg-white p-6 rounded shadow">
      <h3 className="text-lg font-semibold text-primary mb-2">{title}</h3>
      <p>{text}</p>
    </div>
  );
}
