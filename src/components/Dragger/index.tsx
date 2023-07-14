import Image from "next/image";
import * as Style from "./styles";
import { projects } from "../RecentProjects/projects";

interface DraggerProps {
  list: typeof projects,
}

export default function Dragger({ list }: DraggerProps) {
  return (
    <Style.DraggerWrapper>
      {
        list.map((item) => (
          <a href={item.href} key={item.id} target="_blank">
            <Image
              alt={item.title}
              src={item.path}
              fill
              priority
              sizes="(max-width: 768px) 192px, (max-width: 1200px) 192px"
            />
          </a>
        ))
      }
    </Style.DraggerWrapper>
  );
}
