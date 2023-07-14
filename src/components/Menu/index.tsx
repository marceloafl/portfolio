import Link from "next/link";
import * as S from "./style";
import { kaiseiDecol, openSans } from '../../theme/styles/font';

export default function Menu() {
  const menuItems = [
    {
      text: "home",
      id: 1,
      active: true,
      href: "/",
    },
    {
      text: "blog",
      id: 2,
      active: false,
      href: "https://medium.com/@marceloafl",
    },
    {
      text: "projetos",
      id: 3,
      active: false,
      href: "https://github.com/marceloafl",
    },
  ];

  return (
    <S.MenuList>
      {menuItems.map((item) => (
        <S.Item key={item.id} active={item.active}>
          <Link href={item.href} target="_blank" style={kaiseiDecol.style}>
            {item.text}
          </Link>
        </S.Item>
      ))}
    </S.MenuList>
  );
}
