import { ListItem } from "@/app/data";

export default function List({ items }: { items: ListItem[] }) {
  return (
    <li className="list-none pb-12">
      <ul className="flex justify-between text-xs p-3">
        <p>Project</p>
        <div className="w-20">
          <p className="mr-10">Stack</p>
        </div>
      </ul>
      {items.map((item) => (
        <ul
          key={item.id}
          className="border-t border-gray p-3 flex justify-between"
        >
          <a href={item.href} target="_blank">
            <p className="font-medium">{item.title}</p>
          </a>
          <div className="w-20">
            <p>{item.stack}</p>
          </div>
        </ul>
      ))}
    </li>
  );
}
