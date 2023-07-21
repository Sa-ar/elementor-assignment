import { StatableItem } from "../hooks/useGetItems";
import { useId } from "react";

type ItemProps = {
  children: string;
  link?: {
    url: string;
    text: string;
  };
  setChecked: (label: string) => void;
  checked: boolean;
};

interface CheckListProps {
  items: StatableItem[];
  checkItem: (label: string) => void;
}

function Item({ children, link, setChecked, checked }: ItemProps) {
  const id = useId();

  return (
    <li className="p-0 border-0 border-b border-purple-200 last:border-b-0">
      <input
        type="checkbox"
        id={id}
        hidden
        className="peer"
        checked={checked}
        onChange={() => setChecked(children)}
      />
      <label
        htmlFor={id}
        className="flex cursor-pointer items-center w-full h-full p-3 peer-checked:before:bg-primary-500 peer-checked:before:border-primary-500 peer-checked:before:content-['\2713'] peer-checked:before:text-xs before:border before:w-4 before:aspect-square gap-2 before:rounded-full before:border-black before:border-solid before:content before:inline-grid before:place-items-center"
      >
        <span className="flex-1 text-black">{children}</span>
        {link && (
          <a
            href={link.url}
            className="ml-auto text-xs text-primary-800 hover:underline"
          >
            {link.text}
          </a>
        )}
      </label>
    </li>
  );
}

function CheckList({ items, checkItem }: CheckListProps) {
  return (
    <ul>
      {items?.map(({ label, link, isDone }) => (
        <Item key={label} link={link} checked={isDone} setChecked={checkItem}>
          {label}
        </Item>
      ))}
    </ul>
  );
}

export default CheckList;
