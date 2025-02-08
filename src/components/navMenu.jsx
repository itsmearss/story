export default function NavMenu({ text }) {
  return (
    <li>
      <a
        href="#"
        className="text-black text-lg hover:bg-white hover:underline hover:text-yellow-400"
      >
        {text}
      </a>
    </li>
  );
}
